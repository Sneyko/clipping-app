"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { shadowbanRecovery, shadowbanSignals, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { Info } from "lucide-react";

export default function ShadowbanPage() {
  const [flags, setFlags] = useLocalState<string[]>(storageKeys.shadowban, []);

  const max = shadowbanSignals.reduce((sum, s) => sum + s.weight, 0);
  const score = shadowbanSignals
    .filter((s) => flags.includes(s.id))
    .reduce((sum, s) => sum + s.weight, 0);
  const hygiene = Math.max(0, Math.round(100 - (score / max) * 100));

  function toggle(id: string) {
    setFlags((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const label =
    hygiene >= 80 ? "Compte propre" : hygiene >= 50 ? "Vigilance" : "Hygiène faible";

  return (
    <div>
      <PageHeader
        kicker="Shadowban"
        title="Un score d’hygiène. Pas un oracle."
        description="TikTok ne confirme pas les shadowbans. Aucun checker tiers n’y a accès. Coche ce que tu observes dans Analytics — on te donne un protocole, pas une magie."
        action={
          flags.length ? (
            <Button variant="outline" onClick={() => setFlags([])}>
              Tout décocher
            </Button>
          ) : null
        }
      />

      <Alert className="mb-6">
        <Info />
        <AlertTitle>Pas un détecteur</AlertTitle>
        <AlertDescription>
          Ne colle jamais tes identifiants TikTok dans un « shadowban check ».
          Ici, rien ne quitte le navigateur.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Signaux observables</CardTitle>
            <CardDescription>Coche uniquement ce que tu as réellement vu.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {shadowbanSignals.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <Checkbox
                  id={item.id}
                  checked={flags.includes(item.id)}
                  onCheckedChange={() => toggle(item.id)}
                />
                <Label htmlFor={item.id} className="text-sm leading-relaxed font-normal">
                  {item.label}
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hygiène</CardTitle>
              <CardDescription>{label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-heading text-[2.5rem] tracking-tight tabular">{hygiene}%</p>
              <Progress value={hygiene} className="mt-3" />
              <p className="mt-3 text-xs text-muted-foreground">
                Score inverse des signaux cochés (pondérés). Ce n’est pas une
                preuve de restriction FYP.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Protocole de reprise</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                {shadowbanRecovery.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
