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
import { Switch } from "@/components/ui/switch";
import { automations, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";

export default function AutomatiserPage() {
  const [enabled, setEnabled] = useLocalState<Record<string, boolean>>(
    storageKeys.automations,
    { cadence: true, capcut: true }
  );
  const [apiError, setApiError] = useState<string | null>(null);

  function toggle(id: string, deferred?: boolean) {
    if (deferred) {
      setApiError(
        "File d’attente TikTok : OAuth officiel non branché. On n’activera jamais un auto-post unofficial."
      );
      toast.error("API TikTok absente");
      return;
    }
    setApiError(null);
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div>
      <PageHeader
        kicker="Automatiser"
        title="Des rituels. Pas une ferme."
        description="Cadence, preset, veille : oui. Scripts de spam, login TikTok collé ici, VPN, devices farms : non. L’API officielle viendra plus tard."
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

      <div className="mt-6">
        <Button
          variant="outline"
          onClick={() => {
            setEnabled({ cadence: true, capcut: true });
            toast.success("Rituels recommandés réactivés");
          }}
        >
          Revenir aux rituels recommandés
        </Button>
      </div>
    </div>
  );
}
