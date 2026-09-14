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
import { joinUrl, officialFormats, program, viewBonuses, bonusNotes, demarrageNav } from "@/lib/data";
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
        {section === "warmup" ? <Warmup /> : null}
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
        Process Debloat. L’app s’appelle Debloat ton visage : scan, score, recettes, App Store.
        Tu ne vends pas un coaching filmé. Tu vends l’app. Tes slideshows amènent au lien{" "}
        {joinUrl()} — code {program.inviteCode}.
      </ArticleP>
      <ArticleP>
        Le viewer comprend en une seconde ce qu’il gagne : un visage moins gonflé, un glow-up, un
        protocole 72h. L’app entre en payoff — scan 2×2, carte App Store — jamais en sujet de la
        slide 1.
      </ArticleP>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          ["/assets/screen-home.png", "Home"],
          ["/assets/screen-scan-clair.png", "Scan"],
          ["/assets/store-card.png", "App Store"],
        ].map(([src, alt]) => (
          <div key={src} className="overflow-hidden rounded-xl border border-neutral-100">
            <Image src={src} alt={alt} width={280} height={500} className="h-44 w-full object-cover object-top" />
          </div>
        ))}
      </div>
      <GrayNote className="mt-6">
        Fichiers officiels (logo, screens, carte App Store) : Process Assets. Structures : SlideshowLab.
        Exemples TikTok : Format.
      </GrayNote>
      <p className="mt-5">
        <Link href="/process-assets" className="text-[14px] font-semibold text-neutral-900 underline-offset-4 hover:underline">
          Ouvrir Process Assets
        </Link>
      </p>
    </div>
  );
}

function BonusList() {
  return (
    <>
      <p className="mt-8 text-[15px] leading-[1.65] text-neutral-700">
        Les vues de toutes les vidéos du compte s’additionnent — ça avance plus vite, pas besoin
        d’une seule vidéo monstre.
      </p>
      <div className="mt-5 space-y-3">
        {viewBonuses.map((row) => (
          <div
            key={row.views}
            className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-16 shrink-0">
              <p className="text-[26px] leading-none font-semibold tracking-tight">{row.views}</p>
              <p className="text-[13px] font-medium text-[#3B82F6]">vues</p>
            </div>
            <div className="min-w-0 flex-1">
              <div className="border-t border-dashed border-[#93C5FD]" />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[18px] font-semibold tracking-tight">{row.reward}</p>
                {row.extra ? (
                  <p className="text-[11px] font-medium text-[#3B82F6]">{row.extra}</p>
                ) : null}
              </div>
              <Image src={row.image} alt="" width={56} height={48} className="h-12 w-14 object-contain object-right" />
            </div>
          </div>
        ))}
      </div>
      <Ul items={[...bonusNotes]} />
    </>
  );
}

function Paiement() {
  return (
    <div>
      <ArticleTitle>Combien vous êtes payé</ArticleTitle>
      <ArticleP>
        Tu es payé 40 % du net sur chaque vente, à vie, tant que l’abonnement reste actif. Pas de
        plafond. Les virements passent par Stripe, vers ton compte. Les commissions sont retenues 30
        jours, puis disponibles au payout.
      </ArticleP>
      <GrayNote className="mt-5">
        Chaque abo que tu génères te rapporte chaque semaine, automatiquement, tant qu’il ne se
        désabonne pas. Tu scales avec le volume — pas avec une seule vidéo.
      </GrayNote>
      <H2>En plus des 40 %</H2>
      <PercentCard />
      <BonusList />
      <H2>Ton lien</H2>
      <a
        href={`https://${joinUrl()}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-[13px] font-medium text-neutral-800"
      >
        {joinUrl()}
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  );
}

function Vendre() {
  return (
    <div>
      <ArticleTitle>Comment on vend</ArticleTitle>
      <H2>Clipping</H2>
      <ArticleP>
        La réponse, c’est le clipping. Ça consiste à automatiser des slideshows TikTok : tu copies
        une structure qui convertit — pas une vidéo 1:1 — tu postes en volume, ton lien clipper va
        dans la bio et le commentaire épinglé. Pas besoin de te filmer. Les slideshows se montent,
        se dupliquent, se postent.
      </ArticleP>
      <GrayNote className="mt-5">
        SlideshowLab pour monter. Format pour copier les exemples qui marchent. C’est ça, vendre
        Process.
      </GrayNote>
      <p className="mt-4">
        <Link href="/slideshow-lab" className="text-[14px] font-semibold underline-offset-4 hover:underline">
          Ouvrir SlideshowLab
        </Link>
      </p>
      <H2>Un bon clipper sait :</H2>
      <Ul
        items={[
          "Ne pas être shadowban.",
          "Poster 4× / jour par compte.",
          "Être régulier sur le long terme.",
          "Faire des slideshows viraux (pas des carousels de merde).",
        ]}
      />
      <H2>Un bon clipper obtient :</H2>
      <Ul
        items={[
          "1 compte actif → autour de 500 $ / mois.",
          "5 comptes actifs → autour de 2 000 $ / mois.",
          "Une compétence qui lui servira toute sa vie.",
          "La méthode complète pour distribuer ce qu’il veut.",
          "Des bonus de fou avec Process.",
          "La liberté de vivre du clipping.",
        ]}
      />
      <H2>Exemples de bons clippers :</H2>
      <a
        href="https://www.tiktok.com/@mannyprcs"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium"
      >
        @mannyprcs
        <ExternalLink className="size-3.5 text-neutral-400" />
      </a>
      <H2>Le rythme</H2>
      <Ol
        items={[
          "Compte looksmax (glowup_man, debloat_prime…). Photo de profil avec un bord coloré. Bio : tu as découvert Process Debloat sur l’App Store et tu as glow up.",
          "Chauffe 2 jours : cherche debloat / glow up / looksmax, like, commente, scrolle. 1 post / jour max la première semaine.",
          "Ensuite : 4 posts / jour par compte. Varie entre les 3 formats (Guide 72h, Glow-up, Foods).",
        ]}
      />
      <H2>Ce qui convertit</H2>
      <Ol
        items={[
          "Sans pin + bio, tu fais des vues pour TikTok, pas pour Process.",
          <>
            Commentaire épinglé : {joinUrl()} - code {program.inviteCode}.
          </>,
          "5 min après le post, un autre compte commente « C’est quoi l’app ? » — tu réponds avec un screen App Store.",
          "Sondage en commentaire : « Tu vas télécharger Process ? » — OUI et OUI.",
          "Dès qu’un post passe 40k, tu le dupliques : même hook, nouvel angle, nouvelles photos.",
        ]}
      />
      <DontBox
        items={[
          "Télécharger tes posts pour les reposter. TikTok reconnait le fichier → shadowban.",
          "Slideshows full IA, ou contenu marqué « généré par IA ».",
          "Poster 20 slideshows le premier jour sans avoir chauffé.",
          "Pub payante. Les commissions ne seront pas versées.",
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
      <ArticleTitle>Créer ses comptes TikTok</ArticleTitle>
      <ArticleP>
        Tu crées tes comptes toi-même. Pas tous le même jour : un compte trop proche de l’autre sur
        le même iPhone, TikTok les lie et les shadowban. Espace-les. 1 nouveau compte par semaine,
        avec quelques jours d’intervalle.
      </ArticleP>
      <H2>Le rythme</H2>
      <Ol
        items={[
          "1 nouveau compte TikTok par semaine. Pas 3 le lundi.",
          "Quelques jours d’intervalle entre chaque création — même si tu as le temps d’en faire plus.",
          "Chauffe le nouveau compte avant d’en ouvrir un autre (scroll, like, 1 post / jour la première semaine).",
        ]}
      />
      <GrayNote className="mt-5">
        Maximum 8 comptes TikTok par iPhone. Au-delà, TikTok shadowban — souvent plusieurs comptes
        d’un coup, pas juste le 9e.
      </GrayNote>
      <H2>Les comptes déjà créés comptent</H2>
      <ArticleP>
        Si tu as déjà créé des comptes TikTok sur cet iPhone — perso, tests, vieux @, comptes que tu
        n’utilises plus — ils rentrent dans les 8. Un compte créé sur cet iPhone = 1 slot. Tu n’as
        pas 8 slots Process en plus : tu as 8 moins ceux qui existent déjà.
      </ArticleP>
      <DontBox
        items={[
          "Créer 8 comptes d’un coup « pour être prêt ». Ils tombent ensemble.",
          "Oublier un vieux compte perso dans le décompte. TikTok, lui, ne l’oublie pas.",
          "Passer 8 en se disant que « ça ira ». Ça shadowban les comptes.",
        ]}
      />
      <H2>Quand tu crées le compte</H2>
      <Ol
        items={[
          "Nom avec un mot-clé looksmax : glowup_man, debloat_prime, New_looksmax…",
          "Photo de profil avec un bord coloré (rouge, bleu, vert).",
          "Bio : tu as découvert Process Debloat sur l’App Store et tu as glow up.",
        ]}
      />
    </div>
  );
}

function Warmup() {
  return (
    <div>
      <ArticleTitle>Comment warm up</ArticleTitle>
      <ArticleP>
        Un compte neuf que tu bombes de slideshows le premier jour se fait shadowban. Le warm up,
        c’est faire croire à TikTok que tu es un vrai compte looksmax : tu scrolles, tu likes, tu
        commentes — puis tu postes doucement.
      </ArticleP>
      <H2>Jour 1 et 2 — chauffer sans poster</H2>
      <Ol
        items={[
          "Taper « debloat face », « glow up », « looksmax » dans la recherche.",
          "Regarder, liker et commenter 15 min.",
          "Scroller le Pour toi plusieurs fois dans la journée.",
          "Mettre des slideshows dans les brouillons — tu ne les publies pas encore.",
        ]}
      />
      <H2>Ensuite — monter le volume</H2>
      <Ol
        items={[
          "Semaine 1 : 1 post / jour MAX.",
          "Semaine 2 : 2 posts / jour.",
          "Ensuite : 4 posts / jour par compte.",
        ]}
      />
      <GrayNote className="mt-5">
        Poster via API, ce n’est pas le problème. Le compte que tu ne visites pas, lui, se fait
        griller. Chaque jour : rentre dans le compte, like, commente, sondage, scrolle.
      </GrayNote>
      <DontBox
        items={[
          "Poster 20 slideshows le premier jour.",
          "Sauter le warm up parce que « le format est bon ».",
          "Créer un compte et le laisser mort 3 semaines, puis tout poster d’un coup.",
        ]}
      />
    </div>
  );
}

function FormatSlideshow() {
  const [open, setOpen] = useState<string>("72h");
  return (
    <div>
      <ArticleTitle>Le format slideshow</ArticleTitle>
      <ArticleP>
        On ne se filme pas. On poste des slideshows TikTok (Photo Mode) : une suite de slides 9:16,
        un hook en 1 seconde, une promesse par post. Tu copies une structure qui convertit — pas une
        vidéo 1:1. SlideshowLab pour monter. Format pour voir les exemples qui marchent.
      </ArticleP>
      <H2>Ce qui fait scroller</H2>
      <Ol
        items={[
          "Hook slide = 1 idée. Le viewer comprend en 1 seconde ce qu’il gagne.",
          "Une promesse par carrousel. Pas un mélange glow-up + recette + POV.",
          "Son tendance OK, collé à l’émotion — pas un son random.",
          "Caption = 1 ligne + hashtags. Le CTA est le lien, pas un script d’ads.",
        ]}
      />
      <H2>Les 3 formats officiels</H2>
      <p className="mt-2 text-[15px] text-neutral-600">
        Référence : @mannyprcs. Tu copies la structure, pas les fichiers.
      </p>
      <a
        href="https://www.tiktok.com/@mannyprcs"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium"
      >
        @mannyprcs
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
                        <Image src={src} alt={fmt.labels[i]} width={224} height={400} className="h-auto w-full" />
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
          "TikTok → + → Photo (pas Vidéo).",
          "Importer les JPG dans l’ordre slide_01, slide_02, … Recadrage 9:16, ne pas zoomer le texte.",
          "Ne re-tape pas le texte. Il est déjà sur l’image.",
          `Commentaire : ${joinUrl()} - code ${program.inviteCode} — puis épingler. Sans pin + bio, tu fais des vues pour TikTok, pas pour Process.`,
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
        Si ton compte est déjà chauffé, tes premières ventes peuvent arriver dès ce soir. Sinon,
        compte ~3 jours pour le warm up — puis tu postes. Ce qui suit, c’est du volume et un lien
        qui convertit.
      </ArticleP>
      <H2>Le déroulé</H2>
      <Ol
        items={[
          "Compte déjà chaud : tu postes aujourd’hui, premières ventes possibles dès ce soir.",
          "Compte neuf : ~3 jours de warm up, puis tu montes le rythme.",
          "Dès qu’un post passe 40k : tu le dupliques — même hook, nouvel angle, nouvelles photos.",
        ]}
      />
      <H2>Ce que ça peut donner</H2>
      <Ul
        items={[
          "1 compte actif, bien tenu → autour de 500 $ / mois.",
          "5 comptes actifs → autour de 2 000 $ / mois.",
          "Des primes en plus des 40 %, dès que les vues s’accumulent.",
          "Une compétence qui reste : poster des slideshows qui convertissent.",
        ]}
      />
      <H2>Les primes vues</H2>
      <PercentCard />
      <BonusList />
      <GrayNote className="mt-6">
        Ce n’est pas une vidéo miracle — c’est un rythme. Tu construis compte par compte, et les
        abos qui restent te paient chaque semaine.
      </GrayNote>
    </div>
  );
}
