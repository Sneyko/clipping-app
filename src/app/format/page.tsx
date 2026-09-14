"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { TikTokIcon } from "@/components/brand/marks";
import { EmptyState } from "@/components/layout/empty-state";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { copyAccounts, formatLibrarySeed, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";

type ExtraFormat = { id: string; title: string; views: string; src: string; url?: string };

export default function FormatPage() {
  const [extra, setExtra] = useLocalState<ExtraFormat[]>(storageKeys.formatLibrary, []);
  const [addOpen, setAddOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const library = useMemo(() => [...formatLibrarySeed, ...extra], [extra]);

  function addTiktok() {
    setError(null);
    if (!url.includes("tiktok.com")) {
      setError("Colle une URL TikTok (tiktok.com/…).");
      return;
    }
    setExtra((prev) => [
      ...prev,
      {
        id: `extra-${Date.now()}`,
        title: title.trim() || "Format ajouté",
        views: "—",
        src: "/format/guide-debloat.png",
        url,
      },
    ]);
    setUrl("");
    setTitle("");
    setAddOpen(false);
    toast.success("Format ajouté (local)");
  }

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="mb-2 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
        BIBLIOTHÈQUE
      </p>
      <h1 className="flex items-center gap-2 text-[28px] font-semibold tracking-tight">
        <TikTokIcon className="size-6" />
        Format
      </h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        Tous les formats Process, plus ceux que les clippers ajoutent. Colle un TikTok, crée un
        format — le MCP les voit tous.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          className="h-9 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800"
          onClick={() => {
            setError(null);
            setAddOpen(true);
          }}
        >
          Ajouter un TikTok
        </Button>
        <Button variant="outline" className="h-9 rounded-lg" onClick={() => setNewOpen(true)}>
          Nouveau format
        </Button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {library.map((card) => (
          <article key={card.id} className="relative overflow-hidden rounded-2xl">
            <Image src={card.src} alt={card.title} width={465} height={580} className="aspect-[3/4] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pt-8 pb-2.5">
              <p className="text-[14px] leading-tight font-semibold text-white">{card.title}</p>
              <p className="mt-1 text-[13px] font-medium text-white/90">{card.views}</p>
            </div>
          </article>
        ))}
      </div>

      {library.length === 0 ? (
        <EmptyState
          className="mt-6"
          title="Aucun format"
          body="Ajoute un TikTok ou un format pour remplir la bibliothèque."
        />
      ) : null}

      <section className="mt-12 border-t border-neutral-100 pt-8">
        <p className="text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
          ENSUITE
        </p>
        <h2 className="mt-1 text-[22px] font-semibold tracking-tight">Comptes à copier</h2>
        <p className="mt-1 text-[14.5px] text-neutral-600">
          Ouvre le compte, copie la structure — pas les fichiers.
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {copyAccounts.map((acc) => (
            <article key={acc.handle} className="rounded-2xl border border-neutral-200 p-5">
              <div className="flex items-start gap-3">
                <Image
                  src={acc.mosaic}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{acc.name}</p>
                  <p className="text-[13px] text-neutral-500">
                    {acc.handle}{" "}
                    <span className="text-neutral-400">
                      {acc.followers} · {acc.likes}
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{acc.blurb}</p>
              <Image src={acc.mosaic} alt={acc.name} width={885} height={750} className="mt-4 h-auto w-full rounded-xl" />
              <div className="mt-4 flex gap-2">
                <Button
                  className="h-9 rounded-lg bg-neutral-900 text-[13px] text-white hover:bg-neutral-800"
                  onClick={async () => {
                    await navigator.clipboard.writeText(acc.handle);
                    toast.success(`Copié ${acc.handle}`);
                  }}
                >
                  Copier {acc.handle}
                </Button>
                <Button variant="outline" className="h-9 rounded-lg text-[13px]" asChild>
                  <a href={acc.url} target="_blank" rel="noreferrer">
                    Ouvrir le compte
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un TikTok</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="https://www.tiktok.com/@…/video/…"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Input placeholder="Titre du format" value={title} onChange={(e) => setTitle(e.target.value)} />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>
              Annuler
            </Button>
            <Button onClick={addTiktok}>Ajouter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={newOpen} onOpenChange={setNewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouveau format</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-neutral-600">
            Un format, c’est une structure (Guide 72h, Glow-up, Foods) — pas un fichier. Colle un
            TikTok qui tourne, ou ouvre SlideshowLab.
          </p>
          <DialogFooter>
            <Button asChild>
              <a href="/slideshow-lab">Ouvrir SlideshowLab</a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
