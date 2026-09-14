"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { posterPrompt } from "@/lib/data";

const etape1 = [
  "Téléphone dédié, neuf ou reset usine. Pas ton iPhone du quotidien.",
  "Setup : English (United States), région United States, clavier English (US).",
  "Fuseau New York ou Los Angeles — automatique OFF (sinon le Wi-Fi FR te recale sur Paris).",
  "Localisation OFF en global. Plus tard TikTok = Never / Don't allow.",
  "Aucune SIM. Jamais. Wi-Fi uniquement, à chaque session.",
  "Email neuf + Apple ID / Google US. Pays = United States, paiement = None. ZIP NY 10001 ou LA 90001.",
  "Compte Hetzner Cloud + CB. Crée un token API Read & Write (Security → API Tokens). Ne crée pas le serveur.",
  "Cursor ou Claude Code ouvert sur le Mac / PC.",
];

const etape3 = [
  "PC : Outline Manager → Set up Outline anywhere → colle le JSON → serveur Online (vert).",
  "+ une clé (ex. iPhone-TikTok) → QR / lien ss://.",
  "Téléphone US : Outline Client depuis le store US → scan QR → Connect (icône clé).",
  "Safari : whatismyipaddress.com = United States.",
  "VPN ON → désinstalle TikTok → réinstalle → nouveau compte, country = United States.",
  "Chaque session : Wi-Fi (pas de SIM) → Outline Connect → IP USA → ensuite seulement TikTok.",
];

export default function PosterUsPage() {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(posterPrompt);
    setCopied(true);
    toast.message("Prompt copié", {
      description: "Documentation uniquement. Ce portail n’exécute rien.",
    });
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mx-auto max-w-[640px] pb-16">
      <p className="text-center text-2xl">🇺🇸</p>
      <h1 className="mt-2 text-center text-[26px] font-semibold tracking-tight">
        Poster aux États-Unis
      </h1>
      <p className="mx-auto mt-2 max-w-lg text-center text-[14px] leading-relaxed text-neutral-500">
        TikTok lit la langue, la région, le fuseau, le GPS et l’IP. Un leak FR brûle le compte. Toi
        tu prépares le téléphone. Cursor fait le serveur.
      </p>

      <div className="mt-6 rounded-2xl bg-neutral-900 px-5 py-4 text-center text-[13.5px] leading-relaxed text-white">
        Règle d’or : VPN Outline ON avant d’ouvrir TikTok. Une seule ouverture sans VPN peut
        shadow-ban le compte.
      </div>

      <h2 className="mt-8 text-[12px] font-semibold tracking-[0.12em] text-neutral-800 uppercase">
        Étape 1 — Toi, avant Cursor
      </h2>
      <p className="mt-2 text-[15px] font-semibold">Fais ça à la main. L’IA ne peut pas.</p>
      <p className="mt-1 text-[14px] leading-relaxed text-neutral-600">
        Tant que cette liste n’est pas verte, n’envoie pas le prompt. Cursor ne reset pas un iPhone
        et ne crée pas ton Apple ID.
      </p>
      <ol className="mt-4 space-y-2">
        {etape1.map((item, i) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-neutral-200 px-3 py-3 text-[13.5px] leading-relaxed text-neutral-800"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-semibold text-white">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex flex-wrap gap-4 text-[13px] text-neutral-500">
        <DocLink href="https://www.hetzner.com/cloud">hetzner.com/cloud</DocLink>
        <DocLink href="https://console.hetzner.cloud">Console + token API</DocLink>
        <DocLink href="https://appleid.apple.com">appleid.apple.com</DocLink>
      </p>

      <h2 className="mt-10 text-[12px] font-semibold tracking-[0.12em] text-neutral-800 uppercase">
        Étape 2 — Cursor / Claude Code
      </h2>
      <p className="mt-2 text-[15px] font-semibold">Colle ce prompt. Il fait le serveur.</p>
      <p className="mt-1 text-[14px] leading-relaxed text-neutral-600">
        Ouvre Cursor (ou Claude Code) sur le Mac / PC. Nouveau chat. Colle le prompt. Donne le token
        Hetzner si on te le demande. À la fin tu récupères un JSON Outline.
      </p>

      <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-900">
        <div className="flex items-center justify-between px-4 py-2.5">
          <p className="text-[12px] text-neutral-400">Prompt Cursor / Claude Code</p>
          <Button
            size="sm"
            className="h-7 rounded-md bg-white text-[12px] text-neutral-900 hover:bg-neutral-100"
            onClick={copyPrompt}
          >
            {copied ? "Copié" : "Copier le prompt"}
          </Button>
        </div>
        <pre className="max-h-[280px] overflow-auto px-4 pb-4 font-mono text-[11.5px] leading-relaxed whitespace-pre-wrap text-neutral-200">
          {posterPrompt}
        </pre>
      </div>

      <h2 className="mt-10 text-[12px] font-semibold tracking-[0.12em] text-neutral-800 uppercase">
        Étape 3 — Après le JSON
      </h2>
      <p className="mt-2 text-[15px] font-semibold">VPN sur le téléphone, puis TikTok.</p>
      <ol className="mt-4 space-y-2">
        {etape3.map((item, i) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-neutral-200 px-3 py-3 text-[13.5px] leading-relaxed text-neutral-800"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-semibold text-white">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex flex-wrap gap-4 text-[13px] text-neutral-500">
        <DocLink href="https://getoutline.org">Outline Manager</DocLink>
        <DocLink href="https://itunes.apple.com">Outline iOS</DocLink>
        <DocLink href="https://play.google.com">Outline Android</DocLink>
        <DocLink href="https://whatismyipaddress.com">whatismyipaddress.com</DocLink>
        <DocLink href="https://www.textnow.com">TextNow</DocLink>
      </p>

      <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-[13.5px] leading-relaxed text-red-800">
        Si l’IP n’est pas USA, n’ouvre pas TikTok. Corrige d’abord. Un leak FR suffit.
      </p>
    </div>
  );
}

function DocLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neutral-800">
      {children}
      <ExternalLink className="size-3" />
    </a>
  );
}
