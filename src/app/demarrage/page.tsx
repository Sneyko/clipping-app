"use client";

import Link from "next/link";
import { Check, Circle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { onboardingSteps, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { cn } from "@/lib/utils";

export default function DemarragePage() {
  const [done, setDone] = useLocalState<string[]>(storageKeys.onboarding, []);
  const ratio = Math.round((done.length / onboardingSteps.length) * 100);

  function toggle(id: string) {
    setDone((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div>
      <PageHeader
        kicker="Démarrage"
        title="Six étapes. Ensuite tu postes."
        description="Coche au fur et à mesure. L’état reste dans ce navigateur — pas de compte, pas encore de base."
        action={
          done.length ? (
            <Button variant="outline" onClick={() => setDone([])}>
              Réinitialiser
            </Button>
          ) : null
        }
      />

      <div className="mb-6 max-w-xl">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {done.length} / {onboardingSteps.length} faites
          </span>
          <span>{ratio} %</span>
        </div>
        <Progress value={ratio} />
      </div>

      <ol className="grid gap-3">
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
                  {checked ? (
                    <Check className="size-5" />
                  ) : (
                    <Circle className="size-5 text-muted-foreground" />
                  )}
                </button>
                <div>
                  <p className="text-sm font-medium">
                    <span className="mr-2 text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step.title}
                  </p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="sm:mt-0.5">
                <Link href={step.href}>Ouvrir</Link>
              </Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
