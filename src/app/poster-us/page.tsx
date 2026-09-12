"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posterUsChecklist, posterUsLessons, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { TriangleAlert } from "lucide-react";

export default function PosterUsPage() {
  const [checks, setChecks] = useLocalState<string[]>(storageKeys.posterUs, []);

  function toggle(id: string) {
    setChecks((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const tosOk = checks.includes("tos");

  return (
    <div>
      <PageHeader
        kicker="Poster US"
        title="Le CPM US, sans tricher le GPS."
        description="Le marché pub américain paie souvent plus. Ça ne s’obtient pas avec un VPN. Cette page est un cours — pas un kit de contournement."
      />

      <Alert className="mb-6">
        <TriangleAlert />
        <AlertTitle>Ligne rouge</AlertTitle>
        <AlertDescription>
          Process Clipping n’inclut aucun script, proxy, spoof de localisation,
          ferme de téléphones ou automation pour contourner les restrictions
          géographiques de TikTok. Les ToS s’appliquent. Si tu te fais ban pour ça,
          tes gains sont gelés.
        </AlertDescription>
      </Alert>

      <div className="grid gap-3 lg:grid-cols-2">
        {posterUsLessons.map((lesson) => (
          <Card key={lesson.title} size="sm">
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lesson.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Checklist avant un post EN</CardTitle>
          <CardDescription>
            {checks.length}/{posterUsChecklist.length} — la case ToS est obligatoire
            pour considérer le pack « prêt ».
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {posterUsChecklist.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <Checkbox
                id={item.id}
                checked={checks.includes(item.id)}
                onCheckedChange={() => toggle(item.id)}
              />
              <Label htmlFor={item.id} className="text-sm leading-relaxed font-normal">
                {item.label}
              </Label>
            </div>
          ))}
          <p className="pt-2 text-xs text-muted-foreground">
            {tosOk
              ? "Tu as confirmé : pas de VPN / spoof. Le reste, c’est du métier (langue, son, heure)."
              : "Coche la dernière case. Sans elle, tu n’es pas « prêt US »."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
