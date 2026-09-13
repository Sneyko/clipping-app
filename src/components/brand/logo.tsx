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
      <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-[12px] font-semibold tracking-tight text-background">
        P
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="font-heading block text-[15px] tracking-tight">
            Process
          </span>
          <span className="mt-0.5 block text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Clipping
          </span>
        </span>
      )}
    </div>
  );
}
