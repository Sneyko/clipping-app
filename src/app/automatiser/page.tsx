"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArticleP, ArticleTitle, GrayNote, H2, Ol, Ul } from "@/components/layout/article";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { joinUrl, program } from "@/lib/data";

export default function AutomatiserPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function connectApi() {
    setLoading(true);
    setError(null);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setError(
      "File d’attente TikTok : OAuth officiel non branché. On n’activera jamais un auto-post unofficial."
    );
    toast.error("API TikTok absente");
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <ArticleTitle>Automatiser</ArticleTitle>
      <ArticleP>
        Le clipping, c’est du volume sur une structure — pas un robot qui poste à ta place. Tu
        batches dans SlideshowLab, tu postes à la main, tu tiens un seul compte déclaré.
      </ArticleP>

      {error ? (
        <Alert variant="destructive" className="mt-5">
          <AlertTitle>Connexion impossible</AlertTitle>
          <AlertDescription>
            {error}{" "}
            <button type="button" className="underline" onClick={connectApi}>
              Réessayer
            </button>
          </AlertDescription>
        </Alert>
      ) : null}

      <H2>Ce qui tourne tout seul</H2>
      <Ul
        items={[
          `Le lien ${joinUrl()} dans le commentaire épinglé — vitrine, pas un store fantôme.`,
          "Les 40 % du net sur le premier paiement Pro attribué, si vente il y a.",
          "Le seuil 50 € : en dessous, le solde reste.",
        ]}
      />

      <H2>Ce que tu fais à la main</H2>
      <Ol
        items={[
          "Un compte. Tes séances. Tes images.",
          "Varie Rangs, Live Activity, Carte 9:16.",
          "Soumets le lien du clip ici. Un modo vérifie.",
          "Pas de ferme, pas de VPN, pas d’auto-post unofficial.",
        ]}
      />

      <GrayNote className="mt-6">
        Poster via API n’est pas au programme. Ce portail ne lance aucun script de publication, aucun
        spoof, aucun warmup de comptes. Handle officiel : {program.handle}.
      </GrayNote>

      <div className="mt-6 rounded-2xl border border-neutral-200 px-5 py-8 text-center">
        <p className="font-semibold">File TikTok — bientôt</p>
        <p className="mt-1 text-sm text-neutral-500">
          {loading ? "Connexion…" : "Aucune publication en file. OAuth officiel plus tard."}
        </p>
        <Button className="mt-4" variant="outline" onClick={connectApi} disabled={loading}>
          Connecter TikTok
        </Button>
      </div>

      <p className="mt-6 flex gap-4">
        <Link href="/slideshow-lab" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Ouvrir SlideshowLab
        </Link>
        <Link href="/format" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Ouvrir Format
        </Link>
      </p>
    </div>
  );
}
