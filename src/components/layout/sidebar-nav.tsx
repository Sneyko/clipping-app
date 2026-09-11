"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-5 pb-4">
        <Link href="/" onClick={onNavigate} className="inline-flex">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 px-2 pb-4">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "text-foreground/80 hover:bg-foreground/5"
              )}
            >
              <Icon className="size-3.5 shrink-0 opacity-80" />
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="font-medium">{item.label}</span>
                <span
                  className={cn(
                    "text-[11px]",
                    active ? "text-background/70" : "text-muted-foreground"
                  )}
                >
                  {item.hint}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-foreground/8 px-4 py-4 text-[11px] leading-relaxed text-muted-foreground">
        <p className="font-medium text-foreground">Process Deblloat</p>
        <p className="mt-0.5">Données locales · FR</p>
      </div>
    </div>
  );
}
