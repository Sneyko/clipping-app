"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatusBadge } from "@/components/layout/status-badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  announcements,
  currentClipper,
  overviewKpis,
  overviewTodos,
  program,
  recentClips,
  weekViews,
} from "@/lib/data";
import { formatNumber } from "@/lib/format";

export default function OverviewPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  async function refresh() {
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    if (Math.random() < 0.18) {
      setError(
        "Synchronisation TikTok indisponible — l’API n’est pas branchée. Les chiffres affichés restent les données locales."
      );
      return;
    }
    setTick((n) => n + 1);
  }

  return (
    <div>
      <PageHeader
        kicker="Overview"
        title={`Salut ${currentClipper.name.split(" ")[0]}.`}
        description={`${program.pitch} ${program.demoNotice}`}
        action={
          <Button variant="outline" onClick={refresh} disabled={loading} id="refresh-overview">
            <RefreshCw className={loading ? "animate-spin" : ""} data-icon="inline-start" />
            Actualiser
          </Button>
        }
      />

      {error ? (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Erreur de sync</AlertTitle>
          <AlertDescription>
            {error}{" "}
            <button type="button" className="underline" onClick={refresh}>
              Réessayer
            </button>
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {overviewKpis.map((kpi) => (
          <Card key={`${kpi.id}-${tick}`} size="sm">
            <CardHeader>
              <CardDescription>{kpi.label}</CardDescription>
              {loading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <CardTitle className="font-heading text-[1.35rem] tabular tracking-tight">
                  {kpi.value}
                </CardTitle>
              )}
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              {kpi.delta} · {kpi.hint}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Vues · 7 jours</CardTitle>
            <CardDescription>
              Index local, pas un export TikTok Analytics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-40 w-full" />
            ) : (
              <div className="flex h-36 items-end gap-1.5">
                {weekViews.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
                    <div
                      className="w-full rounded-[3px] bg-foreground/80"
                      style={{ height: `${d.views * 2}px` }}
                    />
                    <span className="text-[11px] text-muted-foreground">{d.day}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>À faire cette semaine</CardTitle>
            <CardDescription>Recherche, puis batch — pas un chef-d’œuvre isolé.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {overviewTodos.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-muted/70"
              >
                <span>
                  <span className="block font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.hint}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Derniers clips</CardTitle>
            <CardDescription>Statuts de modération manuelle.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            {loading ? (
              <div className="space-y-3 px-4 py-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : (
              <ul>
                {recentClips.map((clip) => (
                  <li
                    key={clip.id}
                    className="flex flex-col gap-1.5 border-b border-border/80 px-4 py-2.5 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{clip.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {clip.postedAt} · {clip.market} · {formatNumber(clip.views)} vues
                        {clip.reason ? ` · ${clip.reason}` : ""}
                      </p>
                    </div>
                    <StatusBadge status={clip.status} />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Annonces Process</CardTitle>
            <CardDescription>Notes d’équipe, pas de hype.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((a) => (
              <div key={a.id}>
                <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                  {a.date}
                </p>
                <p className="mt-0.5 text-sm font-medium">{a.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
