import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Cette page n’existe pas.</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Reviens à l’Overview, ou ouvre Démarrage si tu débutes.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Button asChild>
          <Link href="/">Overview</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/demarrage">Démarrage</Link>
        </Button>
      </div>
    </div>
  );
}
