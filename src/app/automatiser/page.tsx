"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  automations,
  defaultKillBoard,
  storageKeys,
} from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type KillRow = {
  id: string;
  name: string;
  views: number;
  decision: "tester" | "doubler" | "tuer";
};

const decisionLabel = {
  tester: "Tester",
  doubler: "Doubler",
  tuer: "Tuer",
} as const;

export default function AutomatiserPage() {
  const [enabled, setEnabled] = useLocalState<Record<string, boolean>>(
    storageKeys.automations,
    { cadence: true, capcut: true, batch: true, recherche: true, split: true, kill: true }
  );
  const [apiError, setApiError] = useState<string | null>(null);
  const [board, setBoard] = useLocalState<KillRow[]>(storageKeys.killBoard, defaultKillBoard);
  const [newName, setNewName] = useState("");
  const [newViews, setNewViews] = useState("");

  function toggle(id: string, deferred?: boolean) {
    if (deferred) {
      setApiError(
        "File d’attente TikTok : OAuth officiel non branché. On n’activera jamais un auto-post unofficial, ni une ferme."
      );
      toast.error("API TikTok absente");
      return;
    }
    setApiError(null);
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function addRow(e: React.FormEvent) {
    e.preventDefault();
    const views = Number(newViews.replace(/\s/g, "").replace(",", "."));
    if (!newName.trim() || Number.isNaN(views)) return;
    const decision: KillRow["decision"] =
      views < 3000 ? "tuer" : views >= 10000 ? "doubler" : "tester";
    setBoard((prev) => [
      { id: `k-${Date.now()}`, name: newName.trim(), views, decision },
      ...prev,
    ]);
    setNewName("");
    setNewViews("");
  }

  return (
    <div>
      <PageHeader
        kicker="Automatiser"
        title="Des jobs. Pas une ferme."
        description="Veille, batch, cadence, tuer/doubler : oui. Scripts de spam, login TikTok collé ici, VPN, devices farms : non. L’API officielle viendra plus tard."
      />

      {apiError ? (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Automatisation refusée</AlertTitle>
          <AlertDescription>
            {apiError}{" "}
            <button type="button" className="underline" onClick={() => setApiError(null)}>
              Fermer
            </button>
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-2">
        {automations.map((item) => (
          <Card key={item.id}>
            <CardHeader className="border-b">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-1">{item.summary}</CardDescription>
                </div>
                <Switch
                  checked={Boolean(enabled[item.id])}
                  onCheckedChange={() => toggle(item.id, item.deferred)}
                  aria-label={item.title}
                />
              </div>
              <Badge variant="outline" className="w-fit">
                {item.kind}
                {item.deferred ? " · plus tard" : ""}
              </Badge>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                {item.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-2xl tracking-tight">Tableau tuer / doubler</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Après ~48 h : tu logs les vues. Moins de 3 k, le format meurt. Plus de 10–15 k, tu déclines. Lien à plat = tu bouges le CTA, tu ne relances pas le même.
        </p>

        <form onSubmit={addRow} className="mt-4 mb-4 flex flex-col gap-2 sm:flex-row">
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nom du format"
            className="sm:max-w-xs"
          />
          <Input
            value={newViews}
            onChange={(e) => setNewViews(e.target.value)}
            placeholder="Vues à 48 h"
            inputMode="numeric"
            className="sm:max-w-[140px]"
          />
          <Button type="submit" variant="outline">
            Logger
          </Button>
        </form>

        <div className="overflow-x-auto rounded-xl border border-foreground/8">
          <table className="w-full text-sm">
            <thead className="border-b border-foreground/8 text-left text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 font-medium">Format</th>
                <th className="px-4 py-2.5 font-medium text-right">Vues</th>
                <th className="px-4 py-2.5 font-medium">Décision</th>
              </tr>
            </thead>
            <tbody>
              {board.map((row) => (
                <tr key={row.id} className="border-b border-foreground/6 last:border-0">
                  <td className="px-4 py-2.5">{row.name}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{formatNumber(row.views)}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex flex-wrap gap-1">
                      {(["tester", "doubler", "tuer"] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() =>
                            setBoard((prev) =>
                              prev.map((r) => (r.id === row.id ? { ...r, decision: d } : r))
                            )
                          }
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[11px]",
                            row.decision === d
                              ? d === "tuer"
                                ? "bg-destructive/15 text-destructive"
                                : "bg-foreground text-background"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {decisionLabel[d]}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-6">
        <Button
          variant="outline"
          onClick={() => {
            setEnabled({ cadence: true, capcut: true, batch: true, recherche: true, kill: true, split: true });
            toast.success("Rituels recommandés réactivés");
          }}
        >
          Revenir aux rituels recommandés
        </Button>
      </div>
    </div>
  );
}
