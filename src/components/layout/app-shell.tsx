"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { PaymentsRail } from "@/components/layout/payments-rail";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { currentClipper } from "@/lib/data";
import { pageMeta } from "@/lib/nav";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const meta = pageMeta(pathname);
  const [navOpen, setNavOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);

  useEffect(() => {
    document.title = `${meta.label} — Process Clipping`;
  }, [meta.label]);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto grid min-h-dvh max-w-[1480px] grid-cols-1 xl:grid-cols-[232px_minmax(0,1fr)_268px]">
        <aside className="sticky top-0 hidden h-dvh border-r border-sidebar-border bg-sidebar xl:block">
          <SidebarNav />
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-border/80 bg-background/80 px-4 backdrop-blur-md sm:px-6">
            <Button
              size="icon-sm"
              variant="ghost"
              className="xl:hidden"
              onClick={() => setNavOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-4" />
            </Button>
            <div className="xl:hidden">
              <Logo compact />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium tracking-tight">
                {meta.label}
                <span className="ml-2 hidden font-normal text-muted-foreground sm:inline">
                  {meta.hint}
                </span>
              </p>
            </div>
            <span className="hidden truncate text-[12px] text-muted-foreground md:inline">
              {currentClipper.handle}
            </span>
            <span className="hidden rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground sm:inline">
              Démo
            </span>
            <Button
              size="sm"
              variant="outline"
              className="xl:hidden"
              onClick={() => setPayOpen(true)}
            >
              <Wallet data-icon="inline-start" />
              Paiements
            </Button>
          </header>
          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">{children}</main>
        </div>

        <div className="sticky top-0 hidden h-dvh overflow-y-auto xl:block">
          <PaymentsRail />
        </div>
      </div>

      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetContent side="left" className="w-[280px] bg-sidebar p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <SidebarNav onNavigate={() => setNavOpen(false)} />
        </SheetContent>
      </Sheet>

      <Sheet open={payOpen} onOpenChange={setPayOpen}>
        <SheetContent side="right" className="w-[min(100%,380px)] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Paiements</SheetTitle>
          </SheetHeader>
          <div className="px-1 pb-6">
            <PaymentsRail compact />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
