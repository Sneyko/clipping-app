import { cn } from "@/lib/utils";

export type AssetMock =
  | "icon"
  | "logo-light"
  | "logo-dark"
  | "before"
  | "after"
  | "grid"
  | "onboard"
  | "store"
  | "badge"
  | "broll"
  | "text"
  | "audio"
  | "safe";

export function AssetMock({ kind, className }: { kind: AssetMock; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-foreground/8",
        className
      )}
    >
      {kind === "icon" && (
        <div className="flex aspect-square items-center justify-center bg-neutral-950">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-neutral-100 text-2xl font-semibold text-neutral-950">
            P
          </span>
        </div>
      )}
      {kind === "logo-light" && (
        <div className="flex aspect-[4/3] items-center justify-center bg-[#f6f4ef]">
          <span className="font-heading text-2xl text-neutral-900">Process</span>
        </div>
      )}
      {kind === "logo-dark" && (
        <div className="flex aspect-[4/3] items-center justify-center bg-neutral-950">
          <span className="font-heading text-2xl text-neutral-50">Process</span>
        </div>
      )}
      {kind === "before" && (
        <div className="aspect-[9/16] bg-[#e8e2d6] p-3">
          <div className="grid h-full grid-cols-3 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="rounded-sm bg-neutral-400/50" />
            ))}
          </div>
        </div>
      )}
      {kind === "after" && (
        <div className="flex aspect-[9/16] items-end bg-[#f6f4ef] p-4">
          <div className="h-8 w-8 rounded-md bg-neutral-900" />
        </div>
      )}
      {kind === "grid" && (
        <div className="aspect-[9/16] space-y-2 bg-neutral-950 p-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-6 rounded-md bg-neutral-800" style={{ width: `${88 - i * 8}%` }} />
          ))}
        </div>
      )}
      {kind === "onboard" && (
        <div className="flex aspect-[9/16] flex-col justify-between bg-[#f6f4ef] p-4">
          <div className="h-1.5 w-16 rounded-full bg-neutral-300" />
          <p className="font-heading text-lg leading-tight text-neutral-900">Une question. Un écran.</p>
          <div className="h-8 rounded-full bg-neutral-900" />
        </div>
      )}
      {kind === "store" && (
        <div className="flex aspect-[16/10] items-center gap-3 bg-neutral-950 px-4">
          <span className="flex size-10 items-center justify-center rounded-xl bg-neutral-100 text-sm font-semibold">
            P
          </span>
          <div>
            <p className="text-[11px] text-neutral-400">App Store</p>
            <p className="text-sm text-neutral-50">Process Deblloat</p>
          </div>
        </div>
      )}
      {kind === "badge" && (
        <div className="flex aspect-[16/10] items-center justify-center bg-neutral-950">
          <span className="rounded-md border border-neutral-600 px-3 py-1.5 text-[11px] text-neutral-100">
            Download
          </span>
        </div>
      )}
      {kind === "broll" && (
        <div className="flex aspect-video items-center justify-center bg-[#ddd6c8]">
          <span className="size-10 rounded-full border-2 border-neutral-700/40" />
        </div>
      )}
      {kind === "text" && (
        <div className="aspect-[16/10] space-y-2 bg-[#f6f4ef] p-4">
          <div className="h-2 w-4/5 rounded bg-neutral-300" />
          <div className="h-2 w-3/5 rounded bg-neutral-300" />
          <div className="h-2 w-2/3 rounded bg-neutral-300" />
        </div>
      )}
      {kind === "audio" && (
        <div className="flex aspect-[16/10] items-center justify-center gap-1 bg-neutral-950 px-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-neutral-400"
              style={{ height: `${8 + ((i * 7) % 22)}px` }}
            />
          ))}
        </div>
      )}
      {kind === "safe" && (
        <div className="relative aspect-[9/16] bg-[#f6f4ef]">
          <div className="absolute inset-x-0 top-0 h-[18%] border-b border-dashed border-red-400/60" />
          <div className="absolute inset-x-0 bottom-0 h-[24%] border-t border-dashed border-red-400/60" />
        </div>
      )}
    </div>
  );
}
