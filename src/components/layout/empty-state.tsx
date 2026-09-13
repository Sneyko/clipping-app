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
        "flex flex-col items-start gap-3 rounded-lg border border-dashed border-border bg-muted/40 px-5 py-7",
        className
      )}
    >
      <div>
        <p className="font-heading text-[15px] tracking-tight">{title}</p>
        <p className="mt-1 max-w-md text-[13px] leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {action}
    </div>
  );
}
