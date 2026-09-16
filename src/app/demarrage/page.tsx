"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
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
import {
  commissionTiers,
  joinUrl,
  officialFormats,
  program,
  demarrageNav,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DemarragePage() {
  const [section, setSection] = useState<(typeof demarrageNav)[number]["id"]>("produit");

  return (
    <div className="mx-auto grid max-w-[1040px] gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
      <nav data-testid="demarrage-toc" className="flex flex-col gap-0.5 lg:sticky lg:top-8 lg:self-start">
        {demarrageNav.map((item) => (
          <button
            key={item.id}
            type="button"
            data-demarrage={item.id}
            onClick={() => setSection(item.id)}
            className={cn(
              "rounded-xl px-3 py-2 text-left text-[13.5px] text-neutral-500 transition-colors",
              section === item.id
                ? "bg-neutral-100 font-medium text-neutral-900"
                : "hover:bg-neutral-50 hover:text-neutral-800"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <article className="max-w-[640px] pb-16">
        {section === "produit" ? <Produit /> : null}
        {section === "paiement" ? <Paiement /> : null}
        {section === "vendre" ? <Vendre /> : null}
        {section === "comptes" ? <Comptes /> : null}
        {section === "regles" ? <ReglesResume /> : null}
        {section === "format" ? <FormatSlideshow /> : null}
        {section === "resultats" ? <Resultats /> : null}
      </article>
    </div>
  );
}

function Produit() {
  return (
    <div>
      <ArticleTitle>Le produit qu’on vend</ArticleTitle>
      <ArticleP>
        Aven. Tracker iPhone de musculation : séances guidées, rangs musculaires, records, XP. Tu
        ne vends pas un coaching filmé. Tu amènes gymtok vers Aven. Lien tracké {joinUrl()} — code{" "}
        {program.inviteCode}. Handle {program.handle}.
      </ArticleP>
      <ArticleP>
        Le viewer comprend en une seconde ce qu’il gagne : un rang lisible, le repos sur l’écran
        verrouillé, une carte de séance 9:16. L’app entre en payoff — jamais en sujet de la slide 1.
        Pas de transformation promise, pas de claim santé.
      </ArticleP>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          ["/demarrage/rangs-hook.png", "Rangs"],
          ["/demarrage/live-lock.png", "Live Activity"],
          ["/demarrage/carte-card.png", "Carte 9:16"],
        ].map(([src, alt]) => (
          <div key={src} className="overflow-hidden rounded-xl border border-neutral-100">
            <Image
              src={src}
              alt={alt}
              width={280}
              height={500}
              className="h-44 w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
      <GrayNote className="mt-6">
        Kit HD pas encore produit — les visuels ici sont des placeholders. Icône officielle dans
        Aven Assets. Structures : SlideshowLab. Angles : Format. Vitrine live :{" "}
        {program.joinHost}. Fiche App Store hors ligne.
      </GrayNote>
      <p className="mt-5">
        <Link
          href="/aven-assets"
          className="text-[14px] font-semibold text-neutral-900 underline-offset-4 hover:underline"
        >
          Ouvrir Aven Assets
        </Link>
      </p>
    </div>
  );
}

function Paiement() {
  return (
    <div>
      <ArticleTitle>Combien vous êtes payé</ArticleTitle>
      <ArticleP>
        40 % du net Aven (après commission Apple) sur le <strong>premier paiement</strong> de
        chaque abonnement Aven Pro attribué à ton code. Pas de récurrence en v1. Pas d’achat de
        vues. Pas de forfait. Rien n’est garanti : ça dépend des ventes attribuées.
      </ArticleP>
      <GrayNote className="mt-5">
        Aven Pro : 2,99 €/mois · 26,99 €/an · 79,99 € à vie. Le prix vit sur la fiche App Store —
        pas dans tes clips. Paiement clipper : à partir de 50 € cumulés, mensuel, virement ou
        PayPal, justificatif requis.
      </GrayNote>
      <H2>Indicatif, après Apple</H2>
      <PercentCard />
      <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-100">
        <table className="w-full text-left text-[14px]">
          <thead className="text-[12px] text-neutral-400">
            <tr className="border-b border-neutral-100">
              <th className="px-4 py-2 font-medium">Offre</th>
              <th className="px-4 py-2 font-medium">Prix</th>
              <th className="px-4 py-2 text-right font-medium">≈ commission</th>
            </tr>
          </thead>
          <tbody>
            {commissionTiers.map((row) => (
              <tr key={row.plan} className="border-t border-neutral-100">
                <td className="px-4 py-2.5 font-medium">{row.plan}</td>
                <td className="px-4 py-2.5 text-neutral-600">{row.price}</td>
                <td className="px-4 py-2.5 text-right tabular">{row.cut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
        Net = après commission Apple (15 % Small Business Program, sinon 30 %). Ces montants sont
        indicatifs. Pas un revenu promis.
      </p>
      <H2>Ton lien</H2>
      <a
        href={program.vitrineUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-[13px] font-medium text-neutral-800"
      >
        {joinUrl()}
        <ExternalLink className="size-3.5" />
      </a>
      <p className="mt-2 text-[13px] text-neutral-500">
        Vitrine live. Fiche App Store id {program.appStoreId} : pas encore publiée.
      </p>
    </div>
  );
}

function Vendre() {
  return (
    <div>
      <ArticleTitle>Comment on vend</ArticleTitle>
      <H2>Clipping gymtok</H2>
      <ArticleP>
        Des vidéos courtes TikTok autour d’Aven, à partir du kit + tes propres images. Slideshow
        Photo Mode accepté. Hook en 1 seconde, une promesse par post, caption = 1 ligne + hashtags,
        CTA vers le lien — pas un script d’ads. L’authenticité gagne : vraies séances, vraie salle,
        ta voix.
      </ArticleP>
      <GrayNote className="mt-5">
        SlideshowLab pour monter. Format pour les angles. Publication des clips à partir du
        lancement App Store — pas avant, pas avec un lien store inventé.
      </GrayNote>
      <p className="mt-4">
        <Link href="/slideshow-lab" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Ouvrir SlideshowLab
        </Link>
      </p>
      <H2>Un bon clipper sait :</H2>
      <Ul
        items={[
          "Un compte TikTok déclaré — et le tenir.",
          "Poster régulier, sans ferme ni auto-post unofficial.",
          "Montrer l’app ou son usage réel : rangs, Live Activity, carte 9:16.",
          "Respecter le ton : faits, pas hype, pas avant/après corporel.",
        ]}
      />
      <H2>Un bon clipper obtient :</H2>
      <Ul
        items={[
          "Un code unique et un lien tracké.",
          "Une commission sur le premier paiement Pro attribué — si vente il y a.",
          "Rien d’autre promis. Pas de palier vues, pas d’iPhone, pas de 2 000 $ / mois.",
        ]}
      />
      <H2>Référence</H2>
      <a
        href={program.handleUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium"
      >
        {program.handle}
        <ExternalLink className="size-3.5 text-neutral-400" />
      </a>
      <H2>Ce qui convertit</H2>
      <Ol
        items={[
          "Sans code + lien, tu fais des vues pour TikTok, pas pour Aven.",
          <>
            Commentaire épinglé : {joinUrl()} — code {program.inviteCode}. Bio : le même lien.
          </>,
          "Une idée par post. Rangs, Live Activity, ou carte de séance — pas les trois mélangés.",
          "Tes photos de salle. Le kit (quand il sera prêt) en payoff, pas en slide 1.",
        ]}
      />
      <DontBox
        items={[
          "Claims santé, perte de poids, transformation garantie, avant/après corporels.",
          "Prix et promos dans le clip — le prix vit sur la fiche App Store.",
          "Faux témoignages, vues achetées, bots, contenu volé.",
          "Lien App Store inventé tant que la fiche est hors ligne.",
        ]}
      />
      <p className="mt-6">
        <Link href="/format" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Ouvrir Format
        </Link>
      </p>
    </div>
  );
}

function Comptes() {
  return (
    <div>
      <ArticleTitle>Un compte TikTok</ArticleTitle>
      <ArticleP>
        Un compte TikTok déclaré par clipper. C’est la règle. Changement possible après validation
        — tu ne stacks pas les @. Pas de ferme d’iPhones, pas de multi-comptes, pas de SIM / proxy
        / VPN pour « scaler ».
      </ArticleP>
      <H2>Le rythme</H2>
      <Ol
        items={[
          "Tu candidatures avec le @ que tu vas vraiment utiliser.",
          "Tu reçois ton code et tu postes sur ce compte, à partir du lancement App Store.",
          "Si tu dois changer de @ : tu demandes, un modo valide, un seul compte reste actif.",
        ]}
      />
      <GrayNote className="mt-5">
        Les portails qui poussent 8 comptes par iPhone, le warmup de ferme et le geo-spoof : ce
        n’est pas Aven. Un produit propre, un programme propre.
      </GrayNote>
      <DontBox
        items={[
          "Ouvrir plusieurs TikTok « pour être prêt ».",
          "VPN, Outline, Hetzner, spoof de région.",
          "Achat de vues, commentaires, bots.",
        ]}
      />
      <H2>Sur le compte</H2>
      <Ol
        items={[
          "Niche gym / fit / lifestyle, en français.",
          "Bio : lien tracké + code, pas un roman.",
          "Contenu : tes séances. Aven en payoff.",
        ]}
      />
    </div>
  );
}

function ReglesResume() {
  return (
    <div>
      <ArticleTitle>Les règles</ArticleTitle>
      <ArticleP>
        Attribution par code. Commission sur le premier paiement Pro. Seuil 50 €. Un compte. Pas
        de dark pattern, pas de stats inventées, pas de « vues garanties ».
      </ArticleP>
      <H2>Interdits (clips et site)</H2>
      <Ul
        items={[
          "Claims médicaux, perte de poids, transformation, résultats rapides.",
          "Faux témoignages, fausse preuve sociale, faux partenariats.",
          "Prix dans les contenus. Concurrents nommés. Comparaisons agressives.",
          "Musiques ou visuels sans droits. Multi-comptes. Bots.",
        ]}
      />
      <H2>Acceptation d’un clip</H2>
      <Ol
        items={[
          "Il montre l’app ou son usage réel.",
          "Il respecte le ton et les interdits.",
          "Il porte le CTA correct (lien + code), pas un store fantôme.",
          "Un refus est motivé. Tu corriges, tu re-soumets.",
        ]}
      />
      <DontBox
        items={[
          "Warm-up de comptes, fermes, VPN.",
          "Faux avant/après.",
          "Promesses de revenus irréalistes.",
        ]}
      />
      <p className="mt-6">
        <Link href="/regles" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Lire les règles du programme
        </Link>
      </p>
    </div>
  );
}

function FormatSlideshow() {
  const [open, setOpen] = useState<string>("rangs");
  return (
    <div>
      <ArticleTitle>Le format slideshow</ArticleTitle>
      <ArticleP>
        Photo Mode TikTok : suite de slides 9:16, hook en 1 seconde, une promesse par post. Tu
        copies une structure — pas une vidéo 1:1. Tes images de salle + le kit (quand il sera
        produit). SlideshowLab pour monter. Format pour les angles.
      </ArticleP>
      <H2>Ce qui fait scroller</H2>
      <Ol
        items={[
          "Hook slide = 1 idée. Le viewer comprend en 1 seconde ce qu’il gagne.",
          "Une promesse par carrousel. Pas un mélange rangs + nutrition + POV.",
          "Son tendance OK, collé à l’émotion — pas un son random.",
          "Caption = 1 ligne + hashtags. Le CTA est le lien, pas un script d’ads.",
        ]}
      />
      <H2>Les 3 formats officiels</H2>
      <p className="mt-2 text-[15px] text-neutral-600">
        Référence : {program.handle}. Placeholders typo — le kit HD n’est pas produit. Tu copies la
        structure, pas des captures inventées.
      </p>
      <a
        href={program.handleUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium"
      >
        {program.handle}
        <ExternalLink className="size-3.5 text-neutral-400" />
      </a>
      <div className="mt-5 space-y-3">
        {officialFormats.map((fmt) => (
          <div key={fmt.id} className="overflow-hidden rounded-2xl border border-neutral-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpen((v) => (v === fmt.id ? "" : fmt.id))}
            >
              <div>
                <p className="font-semibold">{fmt.title}</p>
                <p className="text-[12px] text-neutral-400">{fmt.size}</p>
              </div>
              <ChevronDown
                className={cn("size-4 text-neutral-400 transition", open === fmt.id && "rotate-180")}
              />
            </button>
            {open === fmt.id ? (
              <div className="px-5 pb-5">
                <div className="grid grid-cols-3 gap-2">
                  {fmt.images.map((src, i) => (
                    <div key={src}>
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src={src}
                          alt={fmt.labels[i]}
                          width={224}
                          height={400}
                          className="h-auto w-full"
                        />
                      </div>
                      <p className="mt-2 text-[12px] text-neutral-500">{fmt.labels[i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <H2>Comment poster</H2>
      <Ol
        items={[
          "TikTok → + → Photo (pas Vidéo), ou ta facecam de vraie séance.",
          "9:16. Hook, preuve, payoff. Le kit HD viendra coller l’app en slide 3.",
          "Ne promets pas une transformation. Rangs, repos, carte — des faits.",
          `Commentaire : ${joinUrl()} — code ${program.inviteCode} — puis épingler. Pas de lien App Store tant que la fiche est hors ligne.`,
        ]}
      />
      <p className="mt-5 flex flex-wrap gap-4">
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

function Resultats() {
  return (
    <div>
      <ArticleTitle>Les résultats à attendre</ArticleTitle>
      <ArticleP>
        Aucun revenu n’est garanti. Les inscriptions sont ouvertes pour constituer le roster.
        Les clips se publient à partir du lancement App Store. Les commissions suivent les
        abonnements Pro réellement attribués à ton code — premier paiement seulement.
      </ArticleP>
      <H2>Le déroulé</H2>
      <Ol
        items={[
          "Candidature → validation → code + lien tracké + kit.",
          "Tu prépares tes angles maintenant. Tu postes au lancement, pas avant avec un store fantôme.",
          "Tu soumets le lien du clip. Un modo vérifie. Les ventes sont rapprochées à la main.",
        ]}
      />
      <H2>Ce que ça peut donner</H2>
      <Ul
        items={[
          "0 € si personne ne prend Pro avec ton code. C’est possible, et c’est dit.",
          "Une commission par premier paiement attribué, indicatif 1,00 € / 9,20 € / 27,20 €.",
          "Un virement une fois le seuil 50 € atteint — pas avant.",
          "Pas de palier 100k vues, pas d’iPhone, pas de 500 $ / mois affiché comme norme.",
        ]}
      />
      <H2>La grille</H2>
      <PercentCard />
      <GrayNote className="mt-6">
        Ce n’est pas une vidéo miracle. C’est un produit propre sur gymtok, un code, et des ventes
        attribuées — ou pas.
      </GrayNote>
    </div>
  );
}
