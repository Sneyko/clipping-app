import Link from "next/link";
import {
  ArticleP,
  ArticleTitle,
  DontBox,
  GrayNote,
  H2,
  Ol,
  PercentCard,
  Ul,
} from "@/components/layout/article";
import { commissionTiers, program } from "@/lib/data";

export default function ReglesPage() {
  return (
    <div className="mx-auto max-w-[640px] pb-16">
      <p className="text-[13px] text-neutral-400">
        <Link href="/questions" className="hover:text-neutral-700">
          ‹ Utiles
        </Link>
      </p>
      <p className="mt-3 text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
        UTILES
      </p>
      <ArticleTitle>Règles du programme</ArticleTitle>
      <ArticleP>
        Aven Clippers. Un produit propre, un programme propre. Attribution par code, commission sur
        le premier paiement Pro, seuil {program.payoutThreshold}. Pas de ferme, pas de VPN, pas de
        revenus promis.
      </ArticleP>

      <H2>Attribution</H2>
      <Ol
        items={[
          "Chaque clipper validé reçoit un code unique et un lien tracké.",
          "Le code s’applique via offre App Store ou champ « code parrain » dans l’app — le site gère la table, l’admin rapproche les ventes.",
          "Les vues TikTok sont saisies par le clipper et vérifiées à la main. Pas d’API TikTok en v1.",
        ]}
      />

      <H2>Commissions</H2>
      <PercentCard />
      <Ul
        items={[
          "40 % du net Aven (après commission Apple) sur le premier paiement de chaque abo Pro attribué.",
          "Pas de récurrence en v1. Pas d’achat de vues. Pas de forfait.",
          ...commissionTiers.map((t) => `${t.plan} ${t.price} → ${t.cut} indicatif.`),
        ]}
      />
      <GrayNote className="mt-4">
        Ces montants sont indicatifs. Aucun revenu n’est garanti. Tout dépend des ventes attribuées.
      </GrayNote>

      <H2>Paiements</H2>
      <Ul
        items={[
          "Seuil 50 € cumulés. En dessous, le solde reste.",
          "Cadence mensuelle. Virement ou PayPal. Justificatif requis.",
          "Cadre fiscal FR à cadrer (auto-entrepreneur / micro) — ce portail n’émet pas de facture.",
          "Stripe Connect affiché ici est une démo : rien n’est envoyé à une banque.",
        ]}
      />

      <H2>Contenus</H2>
      <Ol
        items={[
          "Le clip montre l’app ou son usage réel (rangs, Live Activity, carte 9:16, séance).",
          "Ton : direct, sobre. Faits, pas adjectifs. « Chaque série compte. »",
          "CTA : lien tracké + code. Publication à partir du lancement App Store.",
          "Un compte TikTok déclaré. Changement sur validation.",
        ]}
      />

      <H2>Interdits</H2>
      <DontBox
        items={[
          "Claims médicaux ou santé, perte de poids, transformation garantie, avant/après corporels, résultats rapides.",
          "Faux témoignages, fausse preuve sociale, faux partenariats.",
          "Prix et promotions dans les contenus.",
          "Concurrents nommés, comparaisons agressives.",
          "URL App Store inventée (fiche id 6810626340 hors ligne).",
          "Musiques ou visuels sans droits. Multi-comptes. Achat de vues. Bots.",
        ]}
      />

      <H2>Fraude et sanctions</H2>
      <Ul
        items={[
          "Un clip hors règles est refusé, avec une raison. Tu corriges, tu re-soumets.",
          "Fraude (multi-comptes, vues achetées, faux codes) : ban, reset de code, commissions non versées.",
          "Pub payante hors cadre : commissions non versées.",
        ]}
      />

      <H2>Ce que ce programme n’est pas</H2>
      <DontBox
        items={[
          "Warm-up de comptes, multi-comptes, VPN / geo-spoof, Outline, Hetzner.",
          "Fermes d’iPhones, SIM, proxies.",
          "Dark patterns, stats inventées, témoignages fictifs, « vues garanties ».",
          "Promesses de revenus irréalistes.",
        ]}
      />

      <p className="mt-8">
        <Link href="/questions" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Lire la FAQ
        </Link>
      </p>
    </div>
  );
}
