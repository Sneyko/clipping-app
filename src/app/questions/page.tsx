"use client";

import { useMemo, useState } from "react";
import { EmptyState } from "@/components/layout/empty-state";
import { ArticleTitle } from "@/components/layout/article";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqs } from "@/lib/data";

export default function QuestionsPage() {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[640px] pb-16">
      <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
        UTILES
      </p>
      <ArticleTitle>Questions</ArticleTitle>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
        Paiement, lien, comptes, shadowban, US. Si ça n’est pas ici, c’est probablement « pas
        encore » — Stripe et TikTok viendront plus tard.
      </p>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Chercher dans la FAQ…"
        className="mt-5 max-w-md"
      />
      {items.length === 0 ? (
        <EmptyState
          className="mt-6"
          title="Rien sur ce mot"
          body="Essaie « 40 % », « VPN », « warmup » ou « Stripe »."
          action={
            <Button size="sm" variant="outline" onClick={() => setQuery("")}>
              Vider la recherche
            </Button>
          }
        />
      ) : (
        <ul className="mt-8 space-y-8">
          {items.map((f) => (
            <li key={f.q}>
              <h2 className="text-[16px] font-semibold tracking-tight">{f.q}</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-600">{f.a}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
