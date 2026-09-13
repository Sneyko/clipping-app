"use client";

import { useMemo, useState } from "react";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div>
      <PageHeader
        kicker="Questions"
        title="Les questions qu’on pose vraiment."
        description="Paiement, US, multi-compte, CTA, API. Si ça n’est pas ici, c’est probablement « pas encore » — Stripe et TikTok viendront plus tard."
      />

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Chercher dans la FAQ…"
        className="mb-6 max-w-md"
      />

      {items.length === 0 ? (
        <EmptyState
          title="Rien sur ce mot"
          body="Essaie « CPM », « VPN », « CTA », « commentaires » ou « virement »."
          action={
            <Button size="sm" variant="outline" onClick={() => setQuery("")}>
              Vider la recherche
            </Button>
          }
        />
      ) : (
        <Accordion type="single" collapsible className="rounded-lg border border-border px-4">
          {items.map((item, index) => (
            <AccordionItem key={item.q} value={`q-${index}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
