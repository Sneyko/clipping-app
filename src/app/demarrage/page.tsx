"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Circle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { demarrageGuide, onboardingSteps, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { cn } from "@/lib/utils";

export default function DemarragePage() {
  const [done, setDone] = useLocalState<string[]>(storageKeys.onboarding, []);
  const [section, setSection] = useState<(typeof demarrageGuide)[number]["id"]>(
    demarrageGuide[0].id
  );
  const ratio = Math.round((done.length / onboardingSteps.length) * 100);
  const current = demarrageGuide.find((s) => s.id === section) ?? demarrageGuide[0];

  function toggle(id: string) {
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  return (
    <div>
      <PageHeader
        kicker="Démarrage"
        title="Un système. Ensuite tu postes."
        description="Recherche d’un format qui tourne, kit, un compte, un batch. L’état reste dans ce navigateur — pas de compte, pas encore de base."
        action={
          done.length ? (
            <Button variant="outline" onClick={() => setDone([])}>
              Réinitialiser
            </Button>
          ) : null
        }
      />

      <div className="mb-8 max-w-xl">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {done.length} / {onboardingSteps.length} faites
          </span>
          <span>{ratio} %</span>
        </div>
        <Progress value={ratio} />
      </div>

      <ol className="mb-12 grid gap-3">
        {onboardingSteps.map((step, index) => {
          const checked = done.includes(step.id);
          return (
            <li
              key={step.id}
              className={cn(
                "flex flex-col gap-3 rounded-xl border border-foreground/8 bg-card p-4 sm:flex-row sm:items-start sm:justify-between",
                checked && "bg-muted/40"
              )}
            >
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toggle(step.id)}
                  className="mt-0.5 text-foreground"
                  aria-pressed={checked}
                  aria-label={checked ? "Marquer non fait" : "Marquer fait"}
                >
                  {checked ? <Check className="size-5" /> : <Circle className="size-5 text-muted-foreground" />}
                </button>
                <div>
                  <p className="text-sm font-medium">
                    <span className="mr-2 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    {step.title}
                  </p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="sm:mt-0.5">
                <Link href={step.href}>Ouvrir</Link>
              </Button>
            </li>
          );
        })}
      </ol>

      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-2 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Guide</p>
          <ul className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {demarrageGuide.map((item) => (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setSection(item.id)}
                  className={cn(
                    "w-full rounded-lg px-3 py-2 text-left text-[13px] transition-colors",
                    section === item.id
                      ? "bg-foreground text-background"
                      : "text-foreground/80 hover:bg-foreground/5"
                  )}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-2xl">
          <h2 className="font-heading text-3xl tracking-tight">{current.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{current.lead}</p>
          <ol className="mt-6 space-y-3">
            {current.points.map((point, i) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 w-5 shrink-0 text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
          {current.id === "slideshow" ? (
            <Button asChild className="mt-6">
              <Link href="/slideshow-lab">Ouvrir SlideshowLab</Link>
            </Button>
          ) : null}
          {current.id === "recherche" ? (
            <Button asChild className="mt-6" variant="outline">
              <Link href="/format">Ouvrir Format</Link>
            </Button>
          ) : null}
        </article>
      </div>
    </div>
  );
}
