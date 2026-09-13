import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  description,
  action,
}: {
  kicker?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-2xl">
        {kicker ? (
          <p className="mb-1.5 text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-heading text-[1.75rem] leading-[1.12] tracking-tight text-balance sm:text-[2rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
