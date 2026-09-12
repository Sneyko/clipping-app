"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { RoleBadge, Storyboard } from "@/components/layout/storyboard";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { PhoneFrame } from "@/components/layout/phone-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  type SlideshowSlide,
  slideshowTemplates,
  storageKeys,
  weekBatchSlots,
} from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { cn } from "@/lib/utils";

type Draft = {
  templateId: string;
  slides: SlideshowSlide[];
  caption: string;
  hashtags: string;
  ctaSlide: number;
};

const defaultDraft = (): Draft => ({
  templateId: slideshowTemplates[0].id,
  slides: slideshowTemplates[0].slides.map((s) => ({ ...s })),
  caption: slideshowTemplates[0].caption,
  hashtags: slideshowTemplates[0].hashtags,
  ctaSlide: slideshowTemplates[0].ctaSlide,
});

export default function SlideshowLabPage() {
  const [draft, setDraft] = useLocalState<Draft>(storageKeys.slideshow, defaultDraft());
  const [newSlide, setNewSlide] = useState("");
  const [preview, setPreview] = useState(0);
  const [variantIx, setVariantIx] = useState(0);
  const [batch, setBatch] = useLocalState<string[]>(
    storageKeys.weekBatch,
    weekBatchSlots.map((_, i) => (i < 4 ? slideshowTemplates[0].title : ""))
  );

  const template = useMemo(
    () => slideshowTemplates.find((t) => t.id === draft.templateId) ?? slideshowTemplates[0],
    [draft.templateId]
  );

  const current = draft.slides[preview] ?? draft.slides[0];

  function applyTemplate(id: string) {
    const t = slideshowTemplates.find((x) => x.id === id);
    if (!t) return;
    setVariantIx(0);
    setPreview(0);
    setDraft({
      templateId: t.id,
      slides: t.slides.map((s) => ({ ...s })),
      caption: t.caption,
      hashtags: t.hashtags,
      ctaSlide: t.ctaSlide,
    });
  }

  function applyVariant() {
    const variants = template.variants;
    if (!variants.length) return;
    const next = (variantIx + 1) % variants.length;
    const v = variants[next];
    setVariantIx(next);
    setPreview(0);
    setDraft({
      ...draft,
      slides: v.slides.map((s) => ({ ...s })),
      ctaSlide: v.slides.findIndex((s) => s.role === "cta"),
    });
    toast.message("Autre scénario", {
      description: `${v.label} — même mécanisme, autre vie.`,
    });
  }

  function move(index: number, dir: -1 | 1) {
    const next = [...draft.slides];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    let cta = draft.ctaSlide;
    if (cta === index) cta = target;
    else if (cta === target) cta = index;
    setDraft({ ...draft, slides: next, ctaSlide: cta });
  }

  function copyPack() {
    const text = [
      `Mécanisme : ${template.mechanism}`,
      `Angle : ${template.angle}`,
      "",
      ...draft.slides.map((s, i) => `${i + 1}. [${s.role}] ${s.text}`),
      "",
      draft.caption,
      draft.hashtags,
    ].join("\n");
    void navigator.clipboard.writeText(text);
    toast.success("Pack copié", {
      description: "Colle les slides dans TikTok Photo Mode, dans l’ordre.",
    });
  }

  function markCta(index: number) {
    setDraft({
      ...draft,
      ctaSlide: index,
      slides: draft.slides.map((s, i) => ({
        ...s,
        role: i === index ? "cta" : s.role === "cta" ? "story" : s.role,
      })),
    });
  }

  return (
    <div>
      <PageHeader
        kicker="SlideshowLab"
        title="Le mécanisme, puis dix vies."
        description="Tu ne cherches pas une idée inédite. Tu prends un squelette qui tourne, tu changes le scénario, tu batches la semaine. Photo Mode. Pas de rendu vidéo."
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

      <div className="mb-8 grid gap-4 rounded-xl border border-foreground/8 bg-card p-4 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            {template.structure}
          </p>
          <p className="mt-1 text-sm leading-relaxed">{template.mechanism}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Angle — pas un script : {template.angle}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <Button variant="outline" size="sm" onClick={applyVariant} disabled={!template.variants.length}>
            Autre scénario
          </Button>
          <Badge variant="outline">
            CTA slide {draft.ctaSlide + 1} · jamais 1
          </Badge>
        </div>
      </div>

      <Storyboard slides={draft.slides} ctaSlide={draft.ctaSlide} className="mb-8" />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {draft.slides.length === 0 ? (
            <EmptyState
              title="Aucune slide"
              body="Ajoute une ligne, ou recharge un squelette. Un carrousel Process tient en 5 à 8 slides."
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
                  key={`${index}-${slide.role}`}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border bg-card p-2",
                    index === draft.ctaSlide
                      ? "border-foreground/25"
                      : "border-foreground/8"
                  )}
                >
                  <span className="w-6 text-center text-xs text-muted-foreground">
                    {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => markCta(index)}
                    className="shrink-0"
                    aria-label="Marquer comme CTA"
                  >
                    <RoleBadge role={index === draft.ctaSlide ? "cta" : slide.role} />
                  </button>
                  <Input
                    value={slide.text}
                    onChange={(e) => {
                      const slides = [...draft.slides];
                      slides[index] = { ...slides[index], text: e.target.value };
                      setDraft({ ...draft, slides });
                    }}
                  />
                  <Button size="icon-sm" variant="ghost" onClick={() => move(index, -1)} aria-label="Monter">
                    <ArrowUp />
                  </Button>
                  <Button size="icon-sm" variant="ghost" onClick={() => move(index, 1)} aria-label="Descendre">
                    <ArrowDown />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => {
                      const slides = draft.slides.filter((_, i) => i !== index);
                      setDraft({
                        ...draft,
                        slides,
                        ctaSlide: Math.min(draft.ctaSlide, Math.max(slides.length - 1, 0)),
                      });
                    }}
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
              setDraft({
                ...draft,
                slides: [...draft.slides, { text: newSlide.trim(), role: "story" }],
              });
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
          <p className="text-[11px] text-muted-foreground">
            Clique un badge pour poser le CTA. Slide 1 en CTA = ça sent la pub, ça ne sera pas validé.
          </p>

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
                {preview === draft.ctaSlide ? " · CTA" : ""}
              </p>
              <p className="font-heading text-[32px] leading-[1.05] text-neutral-900">
                {current?.text || "Ajoute une slide."}
              </p>
              <div>
                <p className="text-[11px] text-neutral-500">
                  {preview + 1} / {Math.max(draft.slides.length, 1)}
                </p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-neutral-600">
                  {draft.caption}
                </p>
              </div>
            </div>
          </PhoneFrame>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Button
              size="icon-sm"
              variant="outline"
              onClick={() => setPreview((n) => Math.max(0, n - 1))}
              disabled={preview === 0}
              aria-label="Slide précédente"
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon-sm"
              variant="outline"
              onClick={() => setPreview((n) => Math.min(draft.slides.length - 1, n + 1))}
              disabled={preview >= draft.slides.length - 1}
              aria-label="Slide suivante"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-2xl tracking-tight">Batch de la semaine</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Dix créneaux. Un squelette. Tu n’attends pas lundi pour inventer. L’agent / Postiz, c’est pour plus tard — ici, tu organises à la main.
        </p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {weekBatchSlots.map((slot, i) => (
            <li
              key={slot}
              className="flex items-center gap-3 rounded-lg border border-foreground/8 bg-card px-3 py-2"
            >
              <span className="w-28 shrink-0 text-[11px] text-muted-foreground">{slot}</span>
              <Input
                value={batch[i] ?? ""}
                onChange={(e) => {
                  const next = [...batch];
                  next[i] = e.target.value;
                  setBatch(next);
                }}
                placeholder="Scénario / angle"
              />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
