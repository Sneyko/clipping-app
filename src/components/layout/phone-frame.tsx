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
    <div className={cn("mx-auto w-[248px] sm:w-[264px]", className)}>
      <div className="rounded-[2rem] border border-neutral-800/90 bg-neutral-950 p-[8px] shadow-[0_20px_50px_-32px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-[#f4f5f7]">
          <div className="absolute top-2 left-1/2 z-20 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-neutral-950" />
          {children}
        </div>
      </div>
    </div>
  );
}
