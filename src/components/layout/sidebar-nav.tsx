"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navGroups } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="px-3.5 pt-4 pb-3">
        <Link href="/" onClick={onNavigate} className="inline-flex">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto px-2 pb-3">
        {navGroups.map((group, gi) => (
          <div key={group.label ?? `g-${gi}`} className="flex flex-col gap-0.5">
            {group.label ? (
              <p className="px-2.5 pt-1 pb-1.5 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {group.label}
              </p>
            ) : null}
            {group.items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-2.5 rounded-md px-2.5 py-[7px] text-[13px] transition-colors",
                        active
                          ? "bg-foreground text-background"
                          : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                      )}
                    >
                      <Icon className="size-3.5 shrink-0 opacity-80" />
                      <span className="truncate font-medium">{item.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8}>
                    {item.hint}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="border-t border-sidebar-border px-3.5 py-3 text-[11px] leading-relaxed text-muted-foreground">
        <p className="font-medium text-foreground">Process Deblloat</p>
        <p className="mt-0.5">Données locales · FR</p>
      </div>
    </div>
  );
}
