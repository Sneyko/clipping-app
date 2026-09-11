"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/layout/status-badge";
import { currentClipper, payoutHistory, program, storageKeys } from "@/lib/data";
import { formatEuro } from "@/lib/format";
import { useLocalState } from "@/hooks/use-local-state";

type RequestedPayout = {
  id: string;
  date: string;
  amount: number;
  status: "demande";
  method: string;
};

export function PaymentsRail({ compact = false }: { compact?: boolean }) {
  const [balance] = useState(128.4);
  const [pending] = useState(41.2);
  const [requests, setRequests] = useLocalState<RequestedPayout[]>(
    storageKeys.payouts,
    []
  );
  const [open, setOpen] = useState(false);

  const history = useMemo(
    () => [...requests, ...payoutHistory],
    [requests]
  );

  const canWithdraw = balance >= program.payoutThreshold;

  function requestPayout() {
    const entry: RequestedPayout = {
      id: `req-${Date.now()}`,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      amount: balance,
      status: "demande",
      method: "Virement (simulé)",
    };
    setRequests((prev) => [entry, ...prev]);
    setOpen(false);
    toast.message("Demande enregistrée localement", {
      description:
        "Stripe n’est pas branché. Rien n’a été envoyé à une banque.",
    });
  }

  return (
    <aside
      className={
        compact
          ? "flex flex-col gap-5"
          : "flex h-full flex-col gap-5 border-l border-foreground/8 bg-[color-mix(in_oklch,var(--background),var(--foreground)_2.5%)] px-5 py-6"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Paiements
          </p>
          <p className="font-heading mt-1 text-2xl tracking-tight">
            {formatEuro(balance)}
          </p>
          <p className="text-xs text-muted-foreground">
            Solde démo · {currentClipper.handle}
          </p>
        </div>
        <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
          <Wallet className="size-4" />
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border border-foreground/8 bg-background px-3 py-2.5">
          <p className="text-muted-foreground">En revue</p>
          <p className="mt-0.5 font-medium">{formatEuro(pending)}</p>
        </div>
        <div className="rounded-lg border border-foreground/8 bg-background px-3 py-2.5">
          <p className="text-muted-foreground">Seuil</p>
          <p className="mt-0.5 font-medium">{formatEuro(program.payoutThreshold)}</p>
        </div>
      </div>

      <div className="rounded-lg border border-foreground/8 bg-background px-3 py-3 text-xs leading-relaxed">
        <p className="font-medium">CPM indicatif</p>
        <p className="mt-1 flex justify-between text-muted-foreground">
          <span>France</span>
          <span className="text-foreground">{formatEuro(program.cpmFr)} / 1k</span>
        </p>
        <p className="mt-0.5 flex justify-between text-muted-foreground">
          <span>US (EN)</span>
          <span className="text-foreground">{formatEuro(program.cpmUs)} / 1k</span>
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Pas de revenu garanti. Les vues non validées ne comptent pas.
        </p>
      </div>

      <Button
        className="w-full"
        disabled={!canWithdraw}
        onClick={() => setOpen(true)}
      >
        Demander un virement
      </Button>
      {!canWithdraw ? (
        <p className="text-[11px] text-muted-foreground">
          Encore {formatEuro(program.payoutThreshold - balance)} avant le seuil.
        </p>
      ) : null}

      <Separator />

      <div className="min-h-0 flex-1">
        <p className="mb-2 text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          Historique
        </p>
        <ul className="space-y-2.5">
          {history.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0">
                <p className="truncate font-medium">{formatEuro(item.amount)}</p>
                <p className="text-muted-foreground">
                  {item.date} · {item.method}
                </p>
              </div>
              <StatusBadge status={item.status} />
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        {program.demoNotice}
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Virement simulé</DialogTitle>
            <DialogDescription>
              Aucun Stripe, aucun IBAN. On enregistre la demande dans ton
              navigateur pour que le flux soit testable.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm">
            <p>
              Montant : <strong>{formatEuro(balance)}</strong>
            </p>
            <p className="mt-1 text-muted-foreground">
              Méthode prévue plus tard : virement SEPA ou PayPal, justificatif
              requis.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button onClick={requestPayout}>Confirmer la démo</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  );
}
