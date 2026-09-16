"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { AvenMark } from "@/components/brand/marks";
import { avenAssets } from "@/lib/data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function AvenAssetsPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  async function download(src: string, title: string, id: string, ready?: boolean) {
    setDownloading(id);
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error("missing");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = src.split("/").pop() ?? "asset.png";
      a.click();
      URL.revokeObjectURL(url);
      if (ready) toast.success(`Téléchargé : ${title}`);
      else toast.message("Placeholder", { description: "Kit HD à produire — pas une capture Aven." });
    } catch {
      toast.error("Fichier indisponible");
    } finally {
      setDownloading(null);
    }
  }

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
        <AvenMark />
        AVEN
      </p>
      <h1 className="text-[28px] font-semibold tracking-tight">Aven Assets</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        Kit de sources. L’icône est officielle. Captures HD, démos animées et B-roll salle : à
        produire. Les cartes ci-dessous sont des placeholders assumés — pas de faux screens.
      </p>

      {avenAssets.map((group) => (
        <section key={group.group} className="mt-10">
          <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
            {group.group}
          </p>
          <div className="flex flex-wrap gap-4">
            {group.items.map((item) => (
              <article
                key={item.id}
                className={cn(
                  "overflow-hidden rounded-2xl border border-neutral-200 bg-white",
                  item.wide ? "w-full max-w-[360px] sm:max-w-[400px]" : "w-[148px] sm:w-[158px]"
                )}
              >
                <div className={cn("bg-neutral-50", item.wide ? "p-3" : "p-2")}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.wide ? 750 : 336}
                    height={item.wide ? 374 : 688}
                    className={cn(
                      "w-full rounded-xl object-cover",
                      item.wide
                        ? "h-[140px] bg-white object-contain"
                        : "h-[176px] object-cover object-top"
                    )}
                  />
                </div>
                <div className="px-3 pt-2 pb-3">
                  <p className="text-[13px] font-medium">{item.title}</p>
                  {item.note ? (
                    <p className="mt-0.5 text-[11px] leading-snug text-neutral-400">{item.note}</p>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => download(item.src, item.title, item.id, item.ready)}
                    className="mt-2 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-neutral-900 text-[13px] font-medium text-white hover:bg-neutral-800"
                  >
                    <Download className="size-3.5" />
                    {downloading === item.id ? "…" : "Télécharger"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
