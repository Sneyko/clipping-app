import { cn } from "@/lib/utils";
import type { SlideshowSlide } from "@/lib/data";

const roleLabel: Record<SlideshowSlide["role"], string> = {
  hook: "Hook",
  story: "Récit",
  payoff: "Payoff",
  cta: "CTA",
};

export function Storyboard({
  slides,
  ctaSlide,
  className,
}: {
  slides: SlideshowSlide[];
  ctaSlide: number;
  className?: string;
}) {
  const picks = [
    { i: 0, fallback: "Hook" },
    { i: Math.min(Math.max(ctaSlide, 1), Math.max(slides.length - 1, 0)), fallback: "CTA" },
    { i: Math.max(slides.length - 1, 0), fallback: "Fin" },
  ];

  return (
    <div className={cn("grid grid-cols-3 gap-2", className)}>
      {picks.map((p, idx) => {
        const slide = slides[p.i];
        const isCta = p.i === ctaSlide;
        return (
          <div
            key={`${idx}-${p.i}`}
            className={cn(
              "overflow-hidden rounded-xl border bg-[#f3efe6]",
              isCta ? "border-foreground/40" : "border-foreground/10"
            )}
          >
            <div className="aspect-[9/14] px-3 pt-5 pb-3">
              <p className="text-[9px] tracking-[0.16em] text-neutral-500 uppercase">
                {slide ? roleLabel[slide.role] : p.fallback}
                {isCta ? " · app" : ""}
              </p>
              <p className="font-heading mt-3 text-[15px] leading-[1.15] text-neutral-900">
                {slide?.text || "—"}
              </p>
            </div>
            <p className="border-t border-foreground/8 bg-background/70 px-2 py-1.5 text-center text-[10px] text-muted-foreground">
              Slide {p.i + 1}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function RoleBadge({ role }: { role: SlideshowSlide["role"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[10px] tracking-wide uppercase",
        role === "cta" && "bg-foreground text-background",
        role === "hook" && "bg-foreground/10 text-foreground",
        role === "payoff" && "bg-emerald-950/8 text-emerald-900",
        role === "story" && "bg-muted text-muted-foreground"
      )}
    >
      {roleLabel[role]}
    </span>
  );
}
