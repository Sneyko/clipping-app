# Process Clipping

Portail clipper **Process Debloat** (Debloat ton visage). Même chrome que le produit : sidebar PROCESS CLIPPING, Paiements Stripe Connect, Evro, bulle WhatsApp.

Cette version tourne **sans auth, sans base, sans Stripe et sans API TikTok**. Les stats, virements et téléchargements sont locaux.

## Lancer en local

```bash
npm install
npm run dev
```

L’app écoute sur [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm run start
```

## Pages

- **Overview** — lien `useprocess.xyz/join/EVRO71`, KPIs à 0, gains €0.00, Stats TikTok bientôt, commissions vides
- **Démarrage** — guide (produit, 40 % du net, primes vues, comptes, warmup, slideshow, résultats)
- **SlideshowLab** — mock @mannyprcs + structures Guide 72h / Glow-up / Foods
- **Process Assets** — logo, screens app, cartes App Store (téléchargement local)
- **Format** — bibliothèque TikTok + comptes à copier (EvoFace, chud j)
- **Clippers** — classement 128 clippers, podium, tout à 0
- **Automatiser** — cadence, pas d’auto-post unofficial
- **Poster US** — documentation statique uniquement (aucun script VPN exécuté)
- **Shadowban** / **Questions**

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui.

## Plus tard

- Auth / base
- Vrais virements Stripe Connect
- API TikTok (stats)
