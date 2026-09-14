"use client";

import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import { EmptyState } from "@/components/layout/empty-state";
import { Input } from "@/components/ui/input";
import { clipperColors, clipperInitials, clippersRoster } from "@/lib/clippers";
import { cn } from "@/lib/utils";

const filters = ["Gains", "Ventes", "Essais", "Installs", "Visites"] as const;

export default function ClippersPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Gains");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clippersRoster.filter(
      (c) => !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [query]);

  const you = clippersRoster.find((c) => c.you);
  const podiumBase = query.trim() ? rows : clippersRoster;
  const podium = [podiumBase[1], podiumBase[0], podiumBase[2]].filter(Boolean);

  async function onFilter(next: (typeof filters)[number]) {
    setLoading(true);
    setFilter(next);
    await new Promise((r) => setTimeout(r, 250));
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="mb-2 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
        CLASSEMENT
      </p>
      <h1 className="flex items-center gap-2 text-[28px] font-semibold tracking-tight">
        <Trophy className="size-6 text-amber-500" />
        Clippers
      </h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        Tous les clippers Process, classés par gains, ventes, essais et installs. Le podium change
        selon le filtre.
      </p>

      {you ? (
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3">
          <Avatar name={you.name} code={you.code} className="size-10 text-[13px]" />
          <div>
            <p className="text-[14px] font-semibold">
              Tu es n°{you.rank} sur {clippersRoster.length}
            </p>
            <p className="text-[12px] text-neutral-500">€0.00 · 0 ventes · 0 essais · 0 installs</p>
          </div>
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => onFilter(f)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] font-medium",
                filter === f
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nom ou code..."
          className="h-9 max-w-xs rounded-lg"
        />
      </div>

      <div className="mt-6 grid grid-cols-3 items-end gap-3">
        {podium.map((p, i) => {
          const place = i === 1 ? 1 : i === 0 ? 2 : 3;
          const tones =
            place === 1
              ? "border-amber-100 bg-amber-50/70"
              : place === 2
                ? "border-neutral-100 bg-neutral-50"
                : "border-orange-100 bg-orange-50/50";
          return (
            <div
              key={p.code}
              className={cn(
                "rounded-2xl border px-3 py-6 text-center",
                tones,
                place === 1 && "py-8"
              )}
            >
              <span
                className={cn(
                  "mx-auto mb-2 flex size-5 items-center justify-center rounded-full text-[10px] font-bold text-white",
                  place === 1 ? "bg-amber-400" : place === 2 ? "bg-neutral-400" : "bg-orange-400"
                )}
              >
                {place}
              </span>
              <Avatar name={p.name} code={p.code} rank={place} className="mx-auto size-14 text-[16px]" />
              <p className="mt-3 font-semibold">{p.name}</p>
              <p className="text-[12px] tracking-wide text-neutral-400 uppercase">{p.code}</p>
              <p className="mt-2 text-[18px] font-semibold">€0.00</p>
              <p className="text-[11px] text-neutral-400">0 ventes · 0 essais · 0 installs</p>
            </div>
          );
        })}
      </div>

      <section className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-[14px] font-semibold">Tous les clippers</p>
          <p className="text-[13px] text-neutral-400">{clippersRoster.length}</p>
        </div>
        {loading ? (
          <p className="px-5 py-8 text-sm text-neutral-500">Chargement du classement…</p>
        ) : rows.length === 0 ? (
          <div className="p-5">
            <EmptyState
              title="Personne dans ce filtre"
              body="Aucun clipper ne correspond à ce nom ou code."
              action={
                <button type="button" className="text-sm underline" onClick={() => setQuery("")}>
                  Vider la recherche
                </button>
              }
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="text-[12px] text-neutral-400">
                <tr className="border-t border-neutral-100">
                  <th className="px-4 py-2 font-medium">#</th>
                  <th className="px-2 py-2 font-medium">Clipper</th>
                  <th className="px-2 py-2 text-right font-medium">Gains</th>
                  <th className="px-2 py-2 text-right font-medium">Ventes</th>
                  <th className="px-2 py-2 text-right font-medium">Essais</th>
                  <th className="px-2 py-2 text-right font-medium">Installs</th>
                  <th className="px-4 py-2 text-right font-medium">Visites</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.rank}-${row.code}`} className="border-t border-neutral-100">
                    <td className="px-4 py-2.5 text-neutral-400">
                      {row.rank <= 3 ? (
                        <span
                          className={cn(
                            "inline-flex size-5 items-center justify-center rounded-full text-[10px] font-bold text-white",
                            row.rank === 1
                              ? "bg-amber-400"
                              : row.rank === 2
                                ? "bg-neutral-400"
                                : "bg-orange-400"
                          )}
                        >
                          {row.rank}
                        </span>
                      ) : (
                        row.rank
                      )}
                    </td>
                    <td className="px-2 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <Avatar name={row.name} code={row.code} rank={row.rank} />
                        <div>
                          <p className="font-semibold text-neutral-900">
                            {row.name}
                            {row.you ? (
                              <span className="ml-2 text-[10px] font-medium tracking-wide text-blue-600 uppercase">
                                TOI
                              </span>
                            ) : null}
                          </p>
                          <p className="text-[11px] tracking-wide text-neutral-400 uppercase">
                            {row.code}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-2.5 text-right tabular">€0.00</td>
                    <td className="px-2 py-2.5 text-right tabular text-neutral-500">0</td>
                    <td className="px-2 py-2.5 text-right tabular text-neutral-500">0</td>
                    <td className="px-2 py-2.5 text-right tabular text-neutral-500">0</td>
                    <td className="px-4 py-2.5 text-right tabular text-neutral-500">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function Avatar({
  name,
  code,
  rank,
  className,
}: {
  name: string;
  code: string;
  rank?: number;
  className?: string;
}) {
  const colors =
    rank === 1
      ? { bg: "#FDE68A", fg: "#B45309" }
      : rank === 2
        ? { bg: "#E5E7EB", fg: "#4B5563" }
        : rank === 3
          ? { bg: "#FED7AA", fg: "#C2410C" }
          : clipperColors(code);
  return (
    <span
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
        className
      )}
      style={{ background: colors.bg, color: colors.fg }}
    >
      {clipperInitials(name)}
    </span>
  );
}
