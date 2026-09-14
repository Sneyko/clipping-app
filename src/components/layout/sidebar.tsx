"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Settings, Wallet } from "lucide-react";
import { ProcessMark, TikTokIcon } from "@/components/brand/marks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { program } from "@/lib/data";
import { navGroups } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [connectOpen, setConnectOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectError, setConnectError] = useState<string | null>(null);

  async function mockConnect() {
    setConnecting(true);
    setConnectError(null);
    await new Promise((r) => setTimeout(r, 700));
    setConnecting(false);
    setConnectError(
      "Stripe Connect n’est pas branché. Rien n’a été envoyé. Le bouton reste une démo locale."
    );
    toast.error("Connexion Stripe indisponible");
  }

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="px-5 pt-5 pb-4">
        <Link
          href="/"
          onClick={onNavigate}
          className="text-[11px] font-bold tracking-[0.06em] text-neutral-900"
        >
          PROCESS CLIPPING
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {navGroups.map((group, gi) => (
          <div key={group.label ?? `g-${gi}`} className={gi > 0 ? "mt-5" : ""}>
            {group.label ? (
              <p className="px-3 pb-2 text-[10px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
                {group.label}
              </p>
            ) : null}
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl px-3 py-[7px] text-[13.5px] transition-colors",
                      active
                        ? "bg-nav-active font-medium text-nav-active-fg"
                        : "text-neutral-600 hover:bg-white hover:text-neutral-900"
                    )}
                  >
                    {item.icon === "tiktok" ? (
                      <TikTokIcon className="size-4 shrink-0 opacity-80" />
                    ) : item.icon === "process" ? (
                      <ProcessMark />
                    ) : (
                      <item.icon className="size-4 shrink-0 opacity-80" />
                    )}
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto px-3 pb-3">
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <button
            type="button"
            onClick={() => setConnectOpen(true)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="flex items-center gap-2 text-[13.5px] font-semibold text-neutral-900">
              <Wallet className="size-4 text-neutral-500" />
              Paiements
            </span>
            <ChevronRight className="size-4 text-neutral-400" />
          </button>
          <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
            <div>
              <p className="text-neutral-400">À venir</p>
              <p className="mt-0.5 text-[15px] font-semibold tracking-tight text-neutral-900">
                €0.00
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Reçus</p>
              <p className="mt-0.5 text-[15px] font-semibold tracking-tight text-neutral-900">
                €0.00
              </p>
            </div>
          </div>
          <Button
            className="mt-3 h-9 w-full rounded-lg bg-neutral-900 text-[13px] font-medium text-white hover:bg-neutral-800"
            onClick={() => setConnectOpen(true)}
            data-testid="connect-stripe"
          >
            Connecter un compte
          </Button>
          <p className="mt-2 text-center text-[10.5px] text-neutral-400">
            Virements via Stripe Connect
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2.5 rounded-xl px-1.5 py-2">
          <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-800 text-[11px] font-semibold text-white">
            {program.userName.slice(0, 1)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-neutral-900">{program.userName}</p>
            <p className="truncate text-[11px] text-neutral-400">{program.userEmail}</p>
          </div>
          <button
            type="button"
            className="rounded-md p-1 text-neutral-400 hover:bg-white hover:text-neutral-700"
            aria-label="Réglages du compte"
            onClick={() =>
              toast.message("Compte démo", {
                description: "Pas d’auth. Tu es Evro sur ce portail local.",
              })
            }
          >
            <Settings className="size-4" />
          </button>
        </div>
      </div>

      <Dialog open={connectOpen} onOpenChange={setConnectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Stripe Connect</DialogTitle>
            <DialogDescription>
              Les virements passeront par Stripe Connect. Cette démo n’envoie rien à Stripe.
            </DialogDescription>
          </DialogHeader>
          {connectError ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {connectError}
            </p>
          ) : null}
          <Button onClick={mockConnect} disabled={connecting}>
            {connecting ? "Connexion…" : "Simuler la connexion"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
