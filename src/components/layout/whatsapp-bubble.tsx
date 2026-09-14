import { program } from "@/lib/data";
import { WhatsAppIcon } from "@/components/brand/marks";

export function WhatsAppBubble() {
  return (
    <div className="pointer-events-none fixed right-5 bottom-6 z-40 flex flex-col items-end gap-2">
      <a
        href={program.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pr-2.5 pl-2 text-[12px] text-neutral-700 shadow-sm"
      >
        <span className="size-2 rounded-full bg-emerald-500" />
        Hésitez pas ?
      </a>
      <a
        href={program.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-700/20"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
