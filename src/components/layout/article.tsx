import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GrayNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-[14px] leading-relaxed text-neutral-700",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DontBox({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50/80 px-5 py-4">
      <p className="font-semibold text-red-600">À ne pas faire</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-neutral-800">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function PercentCard() {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-[#3B82F6] text-lg font-semibold text-white">
          %
        </span>
        <div>
          <p className="text-[13px] font-semibold tracking-wide text-neutral-800 uppercase">
            À VIE <span className="text-[#3B82F6]">40%</span>
          </p>
          <p className="text-[13px] font-semibold tracking-wide text-neutral-800 uppercase">
            DU NET SUR CHAQUE VENTE
          </p>
        </div>
      </div>
    </div>
  );
}

export function ArticleTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-neutral-900 sm:text-[32px]">
      {children}
    </h1>
  );
}

export function ArticleP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[15px] leading-[1.65] text-neutral-700">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-9 text-[20px] font-semibold tracking-tight text-neutral-900">{children}</h2>
  );
}

export function Ol({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] leading-[1.65] text-neutral-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.65] text-neutral-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
