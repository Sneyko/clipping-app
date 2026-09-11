import { Badge } from "@/components/ui/badge";
import { statusLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "valide" || status === "versé" || status === "actif"
      ? "ok"
      : status === "refuse"
        ? "bad"
        : status === "en_revue" || status === "demande"
          ? "wait"
          : "mute";

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal",
        tone === "ok" && "border-emerald-700/20 bg-emerald-700/8 text-emerald-800",
        tone === "bad" && "border-destructive/20 bg-destructive/8 text-destructive",
        tone === "wait" && "border-amber-700/20 bg-amber-700/8 text-amber-900",
        tone === "mute" && "text-muted-foreground"
      )}
    >
      {statusLabel(status)}
    </Badge>
  );
}
