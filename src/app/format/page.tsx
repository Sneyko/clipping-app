import { PageHeader } from "@/components/layout/page-header";
import { PhoneFrame } from "@/components/layout/phone-frame";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDonts, formatSpecs } from "@/lib/data";

export const metadata = { title: "Format" };

export default function FormatPage() {
  return (
    <div>
      <PageHeader
        kicker="Format"
        title="Une idée. Un cadre. Un CTA."
        description="Si ça ne rentre pas dans ces règles, ça ne sera pas validé — même à 100 k vues. Process n’achète pas le chaos."
      />

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <div className="order-2 lg:order-1">
          <PhoneFrame>
            <div className="relative flex h-full flex-col px-5 pt-14 pb-16">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[140px] border-b border-dashed border-red-400/50" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] border-t border-dashed border-red-400/50" />
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
                Safe zone
              </p>
              <p className="font-heading mt-6 text-[34px] leading-[1.05] text-neutral-900">
                Ton PC n’est pas lent.
              </p>
              <p className="mt-auto text-xs text-neutral-600">
                Logo Process · 2 s min
                <br />
                CTA dans la caption, pas dans l’UI TikTok.
              </p>
            </div>
          </PhoneFrame>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Traits pointillés = UI TikTok (profil, boutons, caption).
          </p>
        </div>

        <div className="order-1 grid gap-3 sm:grid-cols-2 lg:order-2">
          {formatSpecs.map((spec) => (
            <Card key={spec.title} size="sm">
              <CardHeader>
                <CardTitle>{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {spec.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Card size="sm" className="sm:col-span-2">
            <CardHeader>
              <CardTitle>Interdits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {formatDonts.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
