"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { WhatsAppBubble } from "@/components/layout/whatsapp-bubble";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { pageMeta } from "@/lib/nav";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const meta = pageMeta(pathname);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.title = `${meta.label} — Aven Clipping`;
  }, [meta.label]);

  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <div className="mx-auto grid min-h-dvh grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="sticky top-0 hidden h-dvh border-r border-neutral-100 bg-sidebar lg:block">
          <Sidebar />
        </aside>

        <div className="flex min-w-0 flex-col bg-white">
          <header className="sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-neutral-100 bg-white px-4 lg:hidden">
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={() => setNavOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-4" />
            </Button>
            <Image
              src="/brand/aven-icon.png"
              alt=""
              width={18}
              height={18}
              className="size-[18px] rounded-[4px]"
            />
            <p className="text-[11px] font-bold tracking-[0.06em]">AVEN CLIPPING</p>
          </header>
          <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-9">{children}</main>
        </div>
      </div>

      <WhatsAppBubble />

      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetContent side="left" className="w-[280px] bg-sidebar p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <Sidebar onNavigate={() => setNavOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
