import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[260px] sm:w-[280px]", className)}>
      <div className="rounded-[2.15rem] border border-foreground/12 bg-neutral-950 p-[9px] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.65rem] bg-[#f6f4ef]">
          <div className="absolute top-2.5 left-1/2 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-neutral-950" />
          {children}
        </div>
      </div>
    </div>
  );
}
