import Image from "next/image";

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14.5 3.2c.8 1.6 2.2 2.8 4 3.1v2.7c-1.4 0-2.7-.4-3.8-1.1v6.6c0 3.4-2.7 6.2-6.2 6.2S2.3 17.9 2.3 14.4s2.7-6.2 6.2-6.2c.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.1-.9-.1-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4V3.2h2.6Z" />
    </svg>
  );
}

export function AvenMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/aven-icon.png"
      alt=""
      width={16}
      height={16}
      className={`size-4 shrink-0 rounded-[3px] ${className ?? ""}`}
    />
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2.5A9.5 9.5 0 0 0 3.2 16.4L2.5 21.5l5.2-.7A9.5 9.5 0 1 0 12.04 2.5Zm5.5 13.4c-.23.65-1.14 1.2-1.86 1.36-.49.11-1.13.2-3.28-.7-2.75-1.16-4.52-4-4.66-4.18-.13-.18-1.1-1.46-1.1-2.79 0-1.32.7-1.97.94-2.24.23-.26.51-.33.68-.33h.49c.16 0 .37-.06.58.44.23.53.77 1.84.84 1.97.07.13.11.29 0 .47-.1.18-.16.29-.31.45-.16.16-.33.35-.47.47-.16.13-.32.28-.14.54.18.26.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.54.3.16.48.13.66-.08.18-.2.77-.9.98-1.2.2-.31.41-.26.68-.16.28.1 1.76.83 2.06.98.3.15.5.23.57.35.08.13.08.73-.15 1.38Z" />
    </svg>
  );
}
