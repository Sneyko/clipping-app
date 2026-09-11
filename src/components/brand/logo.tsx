import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-[13px] font-semibold tracking-tight text-background">
        P
      </span>
      {!compact && (
        <span className="min-w-0 leading-tight">
          <span className="font-heading block text-[17px] tracking-tight">
            Process
          </span>
          <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Clipping
          </span>
        </span>
      )}
    </div>
  );
}
