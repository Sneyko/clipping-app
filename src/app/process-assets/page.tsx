"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { ProcessMark } from "@/components/brand/marks";
import { processAssets } from "@/lib/data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ProcessAssetsPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  async function download(src: string, title: string, id: string) {
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
      toast.success(`Téléchargé : ${title}`);
    } catch {
      toast.error("Fichier indisponible");
    } finally {
      setDownloading(null);
    }
  }

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
        <ProcessMark />
        PROCESS
      </p>
      <h1 className="text-[28px] font-semibold tracking-tight">Process Assets</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        Fichiers officiels à coller dans tes slideshows : logo, screens app, carte App Store.
        Télécharge, n’écrase pas le visuel.
      </p>

      {processAssets.map((group) => (
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
                      item.wide ? "h-[140px] object-contain bg-white" : "h-[176px] object-cover object-top"
                    )}
                  />
                </div>
                <div className="px-3 pt-2 pb-3">
                  <p className="text-[13px] font-medium">{item.title}</p>
                  <button
                    type="button"
                    onClick={() => download(item.src, item.title, item.id)}
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
