"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/page-header";
import { PhoneFrame } from "@/components/layout/phone-frame";
import { EmptyState } from "@/components/layout/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  formatDonts,
  formatLibrary,
  formatSpecs,
  killRules,
  packagingRules,
  researchChecklist,
  storageKeys,
} from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";

type SavedFormat = {
  id: string;
  source: string;
  hook: string;
  firstImage: string;
  cta: string;
  comments: string;
  mechanism: string;
};

export default function FormatPage() {
  const [research, setResearch] = useLocalState<string[]>(storageKeys.research, []);
  const [notes, setNotes] = useLocalState<SavedFormat[]>(storageKeys.formatNotes, []);
  const [form, setForm] = useState({
    source: "",
    hook: "",
    firstImage: "",
    cta: "",
    comments: "",
    mechanism: "",
  });

  function toggleResearch(id: string) {
    setResearch((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function saveNote(e: React.FormEvent) {
    e.preventDefault();
    if (!form.mechanism.trim() && !form.hook.trim()) {
      toast.error("Il faut au moins un hook ou un mécanisme.");
      return;
    }
    setNotes((prev) => [
      {
        id: `f-${Date.now()}`,
        ...form,
      },
      ...prev,
    ]);
    setForm({ source: "", hook: "", firstImage: "", cta: "", comments: "", mechanism: "" });
    toast.success("Format noté", { description: "Structure sauvée en local. Pas le fichier du concurrent." });
  }

  return (
    <div>
      <PageHeader
        kicker="Format"
        title="Copier le mécanisme. Pas le post."
        description="Le produit est le payoff, pas le sujet. Tu casses ce qui tourne déjà, tu reconstruis autour de Process. Si ça ne rentre pas ici, ça ne sera pas validé — même à 100 k vues."
      />

      <Tabs defaultValue="bibliotheque">
        <TabsList variant="line" className="mb-6 h-auto w-full max-w-2xl flex-wrap justify-start">
          <TabsTrigger value="bibliotheque">Squelettes</TabsTrigger>
          <TabsTrigger value="recherche">Recherche</TabsTrigger>
          <TabsTrigger value="packaging">Packaging</TabsTrigger>
          <TabsTrigger value="regles">Cadre</TabsTrigger>
        </TabsList>

        <TabsContent value="bibliotheque" className="space-y-6">
          <div className="grid gap-3 lg:grid-cols-3">
            {formatLibrary.map((fmt) => (
              <Card key={fmt.id}>
                <CardHeader className="border-b">
                  <Badge variant="outline" className="w-fit">
                    {fmt.tag}
                  </Badge>
                  <CardTitle className="mt-2">{fmt.title}</CardTitle>
                  <CardDescription>{fmt.why}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <p className="text-xs text-muted-foreground">
                    CTA · {fmt.cta}
                    <br />
                    Hook · {fmt.hook}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {fmt.frames.map((f, i) => (
                      <span
                        key={f}
                        className="rounded-md bg-muted px-2 py-1 text-[11px] text-foreground/80"
                      >
                        {i + 1}. {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{fmt.tone}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {killRules.map((rule) => (
              <Card key={rule.id} size="sm">
                <CardHeader>
                  <CardTitle>{rule.title}</CardTitle>
                  <CardDescription>{rule.threshold}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{rule.body}</CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recherche" className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-xl tracking-tight">Ce mois-ci, pas l’an dernier</h2>
            <p className="mt-1 mb-4 text-sm text-muted-foreground">
              Recherche TikTok, plus aimés, 30 jours. Un format qui se répète plus qu’un one-off. Tu notes le pourquoi, tu ne clones pas les pixels.
            </p>
            <ul className="space-y-3">
              {researchChecklist.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <Checkbox
                    id={item.id}
                    checked={research.includes(item.id)}
                    onCheckedChange={() => toggleResearch(item.id)}
                  />
                  <Label htmlFor={item.id} className="text-sm leading-relaxed font-normal">
                    {item.label}
                  </Label>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={saveNote} className="space-y-3 rounded-xl border border-foreground/8 bg-card p-4">
            <p className="text-sm font-medium">Noter un format (local)</p>
            <Input
              placeholder="Lien TikTok ou titre interne"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
            />
            <Input
              placeholder="Hook — mécanisme, pas la phrase"
              value={form.hook}
              onChange={(e) => setForm({ ...form, hook: e.target.value })}
            />
            <Input
              placeholder="Première image (bureau, notif, visage objet…)"
              value={form.firstImage}
              onChange={(e) => setForm({ ...form, firstImage: e.target.value })}
            />
            <Input
              placeholder="CTA : slide n°, notif / store / bio"
              value={form.cta}
              onChange={(e) => setForm({ ...form, cta: e.target.value })}
            />
            <Input
              placeholder="Commentaires likés — on demande l’app ?"
              value={form.comments}
              onChange={(e) => setForm({ ...form, comments: e.target.value })}
            />
            <Textarea
              rows={3}
              placeholder="Mécanisme en une phrase (curiosité → preuve → payoff)"
              value={form.mechanism}
              onChange={(e) => setForm({ ...form, mechanism: e.target.value })}
            />
            <Button type="submit">Enregistrer la structure</Button>
          </form>

          {notes.length === 0 ? (
            <EmptyState
              className="lg:col-span-2"
              title="Aucun format noté"
              body="Colle un post qui tourne. On garde le squelette, pas le fichier."
            />
          ) : (
            <ul className="space-y-2 lg:col-span-2">
              {notes.map((n) => (
                <li key={n.id} className="rounded-lg border border-foreground/8 bg-card px-4 py-3">
                  <p className="text-sm font-medium">{n.hook || n.mechanism}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {n.source ? `${n.source} · ` : ""}
                    CTA {n.cta || "?"} · {n.comments || "commentaires non notés"}
                  </p>
                  {n.mechanism ? (
                    <p className="mt-1 text-xs text-muted-foreground">{n.mechanism}</p>
                  ) : null}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="mt-1 h-7 px-0"
                    onClick={() => setNotes((prev) => prev.filter((x) => x.id !== n.id))}
                  >
                    Retirer
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>

        <TabsContent value="packaging">
          <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
            Ce n’est pas un brief App Store. C’est comment tu <em>montres</em> l’app dans un clip : icône reconnaissable, trois captures qui racontent, un écran / une action.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {packagingRules.map((rule) => (
              <Card key={rule.title} size="sm">
                <CardHeader>
                  <CardTitle>{rule.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {rule.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="regles">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
            <div>
              <PhoneFrame>
                <div className="relative flex h-full flex-col px-5 pt-14 pb-16">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[140px] border-b border-dashed border-red-400/50" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] border-t border-dashed border-red-400/50" />
                  <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Safe zone</p>
                  <p className="font-heading mt-6 text-[34px] leading-[1.05] text-neutral-900">
                    Ton PC n’est pas lent.
                  </p>
                  <p className="mt-auto text-xs text-neutral-600">
                    Slide 1 = la vie
                    <br />
                    L’icône arrive plus tard.
                  </p>
                </div>
              </PhoneFrame>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Traits pointillés = UI TikTok (profil, boutons, caption).
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {formatSpecs.map((spec) => (
                <Card key={spec.title} size="sm">
                  <CardHeader>
                    <CardTitle>{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {spec.items.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
              <Card size="sm" className="sm:col-span-2">
                <CardHeader>
                  <CardTitle>Interdits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {formatDonts.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
