import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  body,
  action,
  className,
}: {
  title: string;
  body: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 rounded-xl border border-dashed border-neutral-200 bg-neutral-50 px-5 py-7",
        className
      )}
    >
      <div>
        <p className="text-[15px] font-semibold tracking-tight">{title}</p>
        <p className="mt-1 max-w-md text-[13px] leading-relaxed text-neutral-500">{body}</p>
      </div>
      {action}
    </div>
  );
}
