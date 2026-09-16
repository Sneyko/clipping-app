# Aven Clipping

Portail clipper **Aven** (app iPhone de musculation). Même chrome que le portail Process : sidebar claire, TOC Démarrage, grille Format, Assets, KPIs Overview, rail Paiements Stripe, bulle WhatsApp. Copy et kit basculés sur Aven.

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

- **Overview** — lien tracké `aven-workout.vercel.app/?c=AVEN`, KPIs à 0, gains €0.00, Stats TikTok bientôt, commissions vides. Fiche App Store id 6810626340 hors ligne (pas de lien store fantôme).
- **Démarrage** — guide TOC (produit, 40 % du net sur le premier paiement, gymtok, un compte, règles, slideshow, résultats honnêtes)
- **SlideshowLab** — structures Rangs / Live Activity / Carte 9:16 (placeholders typo)
- **Aven Assets** — icône officielle + placeholders « kit HD à produire »
- **Format** — bibliothèque d’angles gymtok, compte officiel @avenworkout (pas de vues inventées)
- **Clippers** — classement vide, pas de roster fictif
- **Automatiser** — cadence, pas d’auto-post unofficial, pas de ferme
- **Règles** — attribution, commissions, paiements, interdits, fraude
- **FAQ**

## Programme

- Commission : **40 % du net** Aven sur le **premier** paiement Aven Pro attribué (2,99 €/mois · 26,99 €/an · 79,99 € à vie)
- Seuil : **50 €**, mensuel, virement ou PayPal
- Aucun revenu garanti, pas de preuve sociale inventée
- Un compte TikTok déclaré. Pas de VPN / geo-spoof / fermes

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui.

## Plus tard

- Auth / base
- Vrais virements Stripe Connect
- API TikTok (stats)
- Kit HD (captures app, B-roll, démos)
