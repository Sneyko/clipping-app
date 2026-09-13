"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { StatusBadge } from "@/components/layout/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clippers, currentClipper, storageKeys, submitChecks } from "@/lib/data";
import { formatEuro, formatNumber } from "@/lib/format";
import { useLocalState } from "@/hooks/use-local-state";

const niches = ["Toutes", ...Array.from(new Set(clippers.map((c) => c.niche)))];

export default function ClippersPage() {
  const [query, setQuery] = useState("");
  const [niche, setNiche] = useState("Toutes");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [ready, setReady] = useState<string[]>([]);
  const [subs, setSubs] = useLocalState<{ url: string; at: string }[]>(
    storageKeys.submissions,
    []
  );

  const rows = useMemo(() => {
    return clippers.filter((c) => {
      const q = query.trim().toLowerCase();
      const matchQ = !q || c.handle.toLowerCase().includes(q) || c.niche.toLowerCase().includes(q);
      const matchN = niche === "Toutes" || c.niche === niche;
      return matchQ && matchN;
    });
  }, [query, niche]);

  async function fakeRefresh() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.message("Classement local", {
      description: "Pas d’API TikTok. Les rangs ne bougent pas tout seuls.",
    });
  }

  function submitClip(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    if (ready.length < submitChecks.length) {
      toast.error("Revue incomplète", {
        description: "On vérifie le post avant de payer. Coche les 4 points.",
      });
      return;
    }
    setSubs((prev) => [
      { url: url.trim(), at: new Date().toLocaleString("fr-FR") },
      ...prev,
    ]);
    setUrl("");
    toast.success("Lien enregistré en local", {
      description: "En revue simulée. Un modo réel arrivera avec la base.",
    });
  }

  return (
    <div>
      <PageHeader
        kicker="Clippers"
        title="Le roster de la semaine."
        description={`Tu es ${currentClipper.handle}. Un compte déclaré, un code ${currentClipper.code}. On lit chaque lien avant de payer — pas après. Les chiffres sont une démo.`}
        action={
          <Button variant="outline" onClick={fakeRefresh} disabled={loading}>
            {loading ? "Chargement…" : "Actualiser"}
          </Button>
        }
      />

      <form
        onSubmit={submitClip}
        className="mb-6 grid gap-2 rounded-lg border border-border bg-card p-4 sm:grid-cols-[1fr_auto]"
      >
        <div className="space-y-1.5">
          <Label htmlFor="tiktok-url">Soumettre un clip</Label>
          <Input
            id="tiktok-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@…/video/…"
          />
        </div>
        <Button type="submit" className="sm:mt-6">
          Envoyer
        </Button>
        <div className="grid gap-2 sm:col-span-2 sm:grid-cols-2">
          {submitChecks.map((item) => (
            <label key={item.id} className="flex items-start gap-2 text-xs leading-relaxed">
              <Checkbox
                checked={ready.includes(item.id)}
                onCheckedChange={() =>
                  setReady((prev) =>
                    prev.includes(item.id) ? prev.filter((x) => x !== item.id) : [...prev, item.id]
                  )
                }
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
        {subs.length > 0 ? (
          <p className="text-xs text-muted-foreground sm:col-span-2">
            Dernier : {subs[0].url} · {subs[0].at}
          </p>
        ) : null}
      </form>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Chercher un handle ou une niche…"
          className="sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {niches.map((n) => (
            <Button
              key={n}
              size="sm"
              variant={niche === n ? "default" : "outline"}
              onClick={() => setNiche(n)}
            >
              {n}
            </Button>
          ))}
        </div>
      </div>

      {rows.length === 0 ? (
        <EmptyState
          title="Personne dans ce filtre"
          body="Le roster démo est petit. Élargis le filtre, ou reviens à « Toutes »."
          action={
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setQuery("");
                setNiche("Toutes");
              }}
            >
              Tout afficher
            </Button>
          }
        />
      ) : loading ? (
        <p className="text-sm text-muted-foreground">Chargement du classement…</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Clipper</TableHead>
                <TableHead>Niche</TableHead>
                <TableHead className="text-right">Vues 7 j</TableHead>
                <TableHead className="text-right">Clips</TableHead>
                <TableHead className="text-right">CPM</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.handle} className={"you" in row && row.you ? "bg-muted/40" : undefined}>
                  <TableCell className="text-muted-foreground">{row.rank}</TableCell>
                  <TableCell className="font-medium">
                    {row.handle}
                    {"you" in row && row.you ? (
                      <span className="ml-2 text-[11px] text-muted-foreground">toi</span>
                    ) : null}
                  </TableCell>
                  <TableCell>{row.niche}</TableCell>
                  <TableCell className="text-right">{formatNumber(row.views7d)}</TableCell>
                  <TableCell className="text-right">{row.clips}</TableCell>
                  <TableCell className="text-right">{formatEuro(row.cpm)}</TableCell>
                  <TableCell>
                    <StatusBadge status={row.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
