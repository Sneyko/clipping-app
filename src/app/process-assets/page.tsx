"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Download } from "lucide-react";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { assets } from "@/lib/data";

const kinds = ["Tous", ...Array.from(new Set(assets.map((a) => a.kind)))];

export default function AssetsPage() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("Tous");

  const filtered = useMemo(() => {
    return assets.filter((asset) => {
      const matchKind = kind === "Tous" || asset.kind === kind;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        asset.title.toLowerCase().includes(q) ||
        asset.usage.toLowerCase().includes(q);
      return matchKind && matchQ;
    });
  }, [query, kind]);

  function download(title: string) {
    const blob = new Blob(
      [
        `Process Assets — ${title}\n\nFichier de démonstration. Le kit réel (MP4 / PNG HD) sera servi plus tard depuis le stockage.\nUsage : ${assets.find((a) => a.title === title)?.usage ?? ""}\n`,
      ],
      { type: "text/plain;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replaceAll(" ", "-").toLowerCase()}-demo.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Téléchargement simulé", {
      description: "Placeholder texte. Pas encore de CDN.",
    });
  }

  return (
    <div>
      <PageHeader
        kicker="Process Assets"
        title="Le kit. Rien d’autre."
        description="Logo, captures, B-roll, hooks. Tes propres plans de salle / bureau sont les bienvenus. Les visuels d’autres clippers, non."
      />

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          id="asset-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filtrer un asset…"
          className="sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {kinds.map((k) => (
            <Button
              key={k}
              size="sm"
              variant={kind === k ? "default" : "outline"}
              onClick={() => setKind(k)}
            >
              {k}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="Aucun asset"
          body="Ce filtre ne correspond à rien dans le kit de septembre. Efface la recherche ou change de type."
          action={
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setQuery("");
                setKind("Tous");
              }}
            >
              Réinitialiser
            </Button>
          }
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((asset) => (
            <Card key={asset.id} size="sm">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline">{asset.kind}</Badge>
                  <span className="text-[11px] text-muted-foreground">
                    {asset.weight}
                  </span>
                </div>
                <CardTitle>{asset.title}</CardTitle>
                <CardDescription>{asset.format}</CardDescription>
              </CardHeader>
              <CardContent className="text-xs leading-relaxed text-muted-foreground">
                {asset.usage}
              </CardContent>
              <CardFooter>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => download(asset.title)}
                >
                  <Download data-icon="inline-start" />
                  Télécharger
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
