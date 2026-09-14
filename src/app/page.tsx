"use client";

import { useState } from "react";
import {
  CircleHelp,
  Copy,
  Lock,
  MousePointer2,
  Play,
  Smartphone,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { joinUrl, overviewKpis, program, storageKeys } from "@/lib/data";
import { useLocalState } from "@/hooks/use-local-state";
import { TikTokIcon } from "@/components/brand/marks";

const kpiIcons = {
  mouse: MousePointer2,
  phone: Smartphone,
  lock: Lock,
  spark: Sparkles,
  bag: ShoppingBag,
};

export default function OverviewPage() {
  const [code, setCode] = useLocalState<string>(storageKeys.joinCode, program.inviteCode);
  const [editOpen, setEditOpen] = useState(false);
  const [draft, setDraft] = useState(code);
  const [copied, setCopied] = useState(false);
  const [tiktok, setTiktok] = useState<"soon" | "loading" | "error">("soon");

  const url = joinUrl(code);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      setCopied(true);
      toast.success("Lien copié");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Impossible de copier");
    }
  }

  async function retryTiktok() {
    setTiktok("loading");
    await new Promise((r) => setTimeout(r, 800));
    setTiktok("error");
  }

  return (
    <div className="mx-auto max-w-[920px]">
      <div className="mb-5 flex items-center gap-2">
        <h1 className="text-[22px] font-semibold tracking-tight">Overview</h1>
        <CircleHelp className="size-4 text-neutral-300" />
      </div>

      <section className="rounded-2xl border border-neutral-200/80 bg-white px-4 py-3.5 sm:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 text-sm font-semibold text-white">
              {program.inviteName.slice(0, 1)}
            </span>
            <div>
              <p className="text-[15px] font-semibold tracking-tight">{url}</p>
              <p className="text-[13px] text-neutral-500">
                Nom sur l’invitation : {program.inviteName}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              className="h-8 rounded-lg bg-neutral-900 px-3 text-[13px] text-white hover:bg-neutral-800"
              onClick={copyLink}
            >
              <Copy data-icon="inline-start" className="size-3.5" />
              {copied ? "Copié" : "Copier"}
            </Button>
            <Button
              variant="outline"
              className="h-8 rounded-lg px-3 text-[13px]"
              onClick={() => {
                setDraft(code);
                setEditOpen(true);
              }}
            >
              Modifier le lien
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {overviewKpis.slice(0, 4).map((kpi) => {
            const Icon = kpiIcons[kpi.icon];
            return <KpiCard key={kpi.id} kpi={kpi} Icon={Icon} />;
          })}
        </div>
        <div className="mt-3 max-w-[calc(50%-0.375rem)] sm:max-w-[calc(25%-0.56rem)]">
          <KpiCard kpi={overviewKpis[4]} Icon={kpiIcons[overviewKpis[4].icon]} />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-3 text-center text-[12px] text-neutral-500">
          <div>
            Visites → installs
            <div className="mt-1 text-neutral-400">—</div>
          </div>
          <div>
            Installs → paywall
            <div className="mt-1 text-neutral-400">—</div>
          </div>
          <div>
            Paywall → ventes
            <div className="mt-1 text-neutral-400">—</div>
          </div>
        </div>
      </section>

      <section className="mt-4 rounded-2xl border border-neutral-200/80 px-5 py-5">
        <p className="text-[13px] text-neutral-500">Gains totaux</p>
        <p className="mt-1 text-[28px] font-semibold tracking-tight">€0.00</p>
        <div className="relative mt-8 h-16">
          <div className="absolute inset-x-0 bottom-6 h-px bg-emerald-400/80" />
          <div className="absolute right-0 bottom-7 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] text-neutral-400 shadow-sm">
            <span className="size-2 rounded-full bg-emerald-400" />
            Gains
          </div>
          <div className="absolute bottom-0 left-0 text-[11px] text-neutral-400">Thu, Aug 13</div>
          <div className="absolute right-0 bottom-0 text-[11px] text-neutral-400">Fri, Sep 11</div>
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden rounded-2xl border border-neutral-200/80 px-5 py-5">
        <div className="mb-3 flex items-center gap-2 text-[12px] text-neutral-500">
          <TikTokIcon className="size-4" />
          TikTok
        </div>
        <h2 className="text-[18px] font-semibold">Stats TikTok</h2>
        {tiktok === "loading" ? (
          <p className="mt-8 text-sm text-neutral-500">Chargement des stats…</p>
        ) : tiktok === "error" ? (
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600">L’API TikTok n’est pas branchée.</p>
            <Button variant="outline" className="mt-3" onClick={retryTiktok}>
              Réessayer
            </Button>
          </div>
        ) : (
          <>
            <div className="pointer-events-none mt-4 grid grid-cols-3 gap-6 blur-[6px] select-none">
              {["Vues", "Likes", "Posts"].map((l) => (
                <div key={l}>
                  <p className="text-xs text-neutral-400">{l}</p>
                  <p className="text-2xl font-semibold">128.4k</p>
                </div>
              ))}
              <div className="col-span-3 h-24 rounded-lg bg-neutral-100" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button type="button" onClick={retryTiktok} className="text-center">
                <span className="mx-auto flex size-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
                  <TikTokIcon className="size-5" />
                </span>
                <p className="mt-2 text-[14px] font-semibold">Disponible bientôt</p>
              </button>
            </div>
          </>
        )}
      </section>

      <section className="mt-4 rounded-2xl border border-neutral-200/80 px-5 py-16 text-center">
        <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400">
          <Play className="size-3.5 fill-neutral-400" />
        </span>
        <p className="mt-3 text-[15px] font-semibold">Aucune commission</p>
        <p className="mx-auto mt-1 max-w-sm text-[13px] leading-relaxed text-neutral-500">
          Les commissions apparaissent ici dès qu’un install via ton lien s’abonne.
        </p>
      </section>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le lien</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-neutral-500">useprocess.xyz/join/</p>
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
            placeholder="EVRO71"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              Annuler
            </Button>
            <Button
              onClick={() => {
                if (!draft.trim()) {
                  toast.error("Code vide");
                  return;
                }
                setCode(draft.trim());
                setEditOpen(false);
                toast.success("Lien mis à jour (local)");
              }}
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function KpiCard({
  kpi,
  Icon,
}: {
  kpi: (typeof overviewKpis)[number];
  Icon: typeof MousePointer2;
}) {
  return (
    <div className="rounded-xl border border-neutral-100 px-3.5 py-3">
      <p className="flex items-center gap-1.5 text-[13px] text-neutral-500">
        <Icon className="size-3.5" style={{ color: kpi.line }} />
        {kpi.label}
      </p>
      <p className="mt-1 text-[22px] font-semibold tracking-tight">{kpi.value}</p>
      <p className="text-[11px] text-neutral-400">{kpi.hint}</p>
      <div className="mt-3 h-px" style={{ background: kpi.line }} />
      <div className="mt-1 flex justify-between text-[10px] text-neutral-400">
        <span>Thu, Aug 13</span>
        <span>Fri, Sep 11</span>
      </div>
    </div>
  );
}
