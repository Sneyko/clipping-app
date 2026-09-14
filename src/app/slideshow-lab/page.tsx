"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layers } from "lucide-react";
import { TikTokIcon } from "@/components/brand/marks";
import { labStructures } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function SlideshowLabPage() {
  const [tab, setTab] = useState<(typeof labStructures)[number]["id"]>(labStructures[0].id);
  const current = labStructures.find((s) => s.id === tab) ?? labStructures[0];

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
        <Layers className="size-3.5" />
        LAB
      </p>
      <h1 className="text-[28px] font-semibold tracking-tight">SlideshowLab</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        Les leçons d’abord. Les structures officielles sont en bas, les exemples TikTok dans Format.
      </p>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-[16px] font-semibold">
          <span className="flex size-5 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white">
            1
          </span>
          C’est quoi le format slideshow
        </h2>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-neutral-600">
          Sur TikTok, un slideshow c’est un post Photo — l’icône deux carrés sur la miniature. Tu
          swipe les slides. Pas une facecam. Voici @mannyprcs, puis les mêmes formats dans Format.
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <Image
            src="/lab/tiktok-manny.png"
            alt="Profil TikTok @mannyprcs"
            width={1760}
            height={1144}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="mt-10">
        <p className="text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
          STRUCTURES OFFICIELLES
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {labStructures.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setTab(s.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] font-medium",
                tab === s.id
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
              )}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-3 gap-2">
            {current.images.map((src, i) => (
              <div key={src}>
                <div className="overflow-hidden rounded-xl">
                  <Image src={src} alt={current.labels[i]} width={367} height={640} className="h-auto w-full" />
                </div>
                <p className="mt-2 text-[12px] text-neutral-500">{current.labels[i]}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-[18px] font-semibold tracking-tight">{current.heading}</h3>
            <ol className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-neutral-700">
              {current.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <Button asChild className="mt-6 h-9 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">
              <Link href="/format">
                <TikTokIcon className="size-3.5" />
                Voir les exemples dans Format
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
