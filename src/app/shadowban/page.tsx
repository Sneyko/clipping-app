import { ChevronRight } from "lucide-react";
import { ArticleP, ArticleTitle, H2, Ol } from "@/components/layout/article";
import Link from "next/link";

export default function ShadowbanPage() {
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
      <ArticleTitle>Shadowban</ArticleTitle>
      <ArticleP>
        Si tu as ce message quand tu cliques sur « Plus de données », ta vidéo est shadowban.
      </ArticleP>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-amber-200/80 bg-[#F8EDE0] px-4 py-3 text-[13.5px] leading-relaxed text-neutral-800">
        <div className="min-w-0 flex-1">
          Cette vidéo n’est pas éligible à la recommandation dans le fil d’actualité Pour toi. Si tu
          n’es pas d’accord avec cette restriction de contenu, tu peux envoyer une contestation.
        </div>
        <ChevronRight className="size-4 shrink-0 text-neutral-500" />
      </div>

      <ArticleP>
        Mais parfois tu n’as pas de message. Si tu fais moins de 50 vues, tu es shadowban.
      </ArticleP>

      <H2>Les raisons d’un shadowban ?</H2>
      <Ol
        items={[
          "Tu n’as pas (assez) chauffé ton compte.",
          "Tu postes des slideshows full IA.",
          "Tu as posté beaucoup de slideshows en peu de temps.",
        ]}
      />

      <H2>Comment ne pas être shadowban</H2>
      <Ol
        items={[
          "Si tu es shadowban, ARRÊTE DE POSTER pendant 2 jours.",
          "Scroll et like 15 min / jour.",
          "Va sur TikTok Shop.",
          "Ajoute des articles au panier.",
          "Mets toutes tes infos jusqu’au paiement.",
          "Relance l’app TikTok.",
          "Continue de scroller.",
          "Remplis toutes les vérifications d’identité (numéro, email…).",
          "Poste 1 slideshow au bout de 3 jours.",
        ]}
      />
    </div>
  );
}
