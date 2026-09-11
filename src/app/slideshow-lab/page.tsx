"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { PhoneFrame } from "@/components/layout/phone-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { slideshowTemplates, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";

type Draft = {
  templateId: string;
  slides: string[];
  caption: string;
  hashtags: string;
};

const defaultDraft = (): Draft => ({
  templateId: slideshowTemplates[0].id,
  slides: [...slideshowTemplates[0].slides],
  caption: slideshowTemplates[0].caption,
  hashtags: slideshowTemplates[0].hashtags,
});

export default function SlideshowLabPage() {
  const [draft, setDraft] = useLocalState<Draft>(
    storageKeys.slideshow,
    defaultDraft()
  );
  const [newSlide, setNewSlide] = useState("");

  const template = useMemo(
    () =>
      slideshowTemplates.find((t) => t.id === draft.templateId) ??
      slideshowTemplates[0],
    [draft.templateId]
  );

  function applyTemplate(id: string) {
    const t = slideshowTemplates.find((x) => x.id === id);
    if (!t) return;
    setDraft({
      templateId: t.id,
      slides: [...t.slides],
      caption: t.caption,
      hashtags: t.hashtags,
    });
  }

  function move(index: number, dir: -1 | 1) {
    const next = [...draft.slides];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setDraft({ ...draft, slides: next });
  }

  function copyPack() {
    const text = [
      ...draft.slides.map((s, i) => `${i + 1}. ${s}`),
      "",
      draft.caption,
      draft.hashtags,
    ].join("\n");
    void navigator.clipboard.writeText(text);
    toast.success("Pack copié", {
      description: "Colle les slides dans TikTok Photo Mode, dans l’ordre.",
    });
  }

  return (
    <div>
      <PageHeader
        kicker="SlideshowLab"
        title="Le carrousel avant le FYP."
        description="Tu montes le texte ici. TikTok Photo Mode fait le reste. Pas de rendu vidéo, pas d’API — un pack propre à coller."
        action={
          <Button onClick={copyPack} disabled={draft.slides.length === 0}>
            Copier le pack
          </Button>
        }
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {slideshowTemplates.map((t) => (
          <Button
            key={t.id}
            size="sm"
            variant={draft.templateId === t.id ? "default" : "outline"}
            onClick={() => applyTemplate(t.id)}
          >
            {t.title}
            <span className="ml-1.5 text-[10px] opacity-70">{t.lang}</span>
          </Button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {draft.slides.length === 0 ? (
            <EmptyState
              title="Aucune slide"
              body="Ajoute une ligne, ou recharge un modèle. Un carrousel Process tient en 5 à 8 slides."
              action={
                <Button size="sm" onClick={() => applyTemplate(template.id)}>
                  Recharger {template.title}
                </Button>
              }
            />
          ) : (
            <ul className="space-y-2">
              {draft.slides.map((slide, index) => (
                <li
                  key={`${index}-${slide.slice(0, 8)}`}
                  className="flex items-center gap-2 rounded-lg border border-foreground/8 bg-card p-2"
                >
                  <span className="w-6 text-center text-xs text-muted-foreground">
                    {index + 1}
                  </span>
                  <Input
                    value={slide}
                    onChange={(e) => {
                      const slides = [...draft.slides];
                      slides[index] = e.target.value;
                      setDraft({ ...draft, slides });
                    }}
                  />
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => move(index, -1)}
                    aria-label="Monter"
                  >
                    <ArrowUp />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => move(index, 1)}
                    aria-label="Descendre"
                  >
                    <ArrowDown />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() =>
                      setDraft({
                        ...draft,
                        slides: draft.slides.filter((_, i) => i !== index),
                      })
                    }
                    aria-label="Supprimer"
                  >
                    <Trash2 />
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!newSlide.trim() || draft.slides.length >= 10) return;
              setDraft({ ...draft, slides: [...draft.slides, newSlide.trim()] });
              setNewSlide("");
            }}
          >
            <Input
              value={newSlide}
              onChange={(e) => setNewSlide(e.target.value)}
              placeholder="Nouvelle slide (4 à 7 mots)"
            />
            <Button type="submit" variant="outline" disabled={draft.slides.length >= 10}>
              <Plus data-icon="inline-start" />
              Ajouter
            </Button>
          </form>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="caption">Caption</Label>
              <Textarea
                id="caption"
                rows={3}
                value={draft.caption}
                onChange={(e) => setDraft({ ...draft, caption: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="hash">Hashtags</Label>
              <Textarea
                id="hash"
                rows={3}
                value={draft.hashtags}
                onChange={(e) => setDraft({ ...draft, hashtags: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-center text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            Aperçu Photo Mode
          </p>
          <PhoneFrame>
            <div className="flex h-full flex-col justify-between px-5 pt-12 pb-10">
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                {template.lang} · {draft.slides.length} slides
              </p>
              <p className="font-heading text-[32px] leading-[1.05] text-neutral-900">
                {draft.slides[0] || "Ajoute une slide."}
              </p>
              <div>
                <p className="text-[11px] text-neutral-500">1 / {Math.max(draft.slides.length, 1)}</p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-neutral-600">
                  {draft.caption}
                </p>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
