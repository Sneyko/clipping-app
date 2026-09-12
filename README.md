# Process Clipping

Portail clipper francophone pour **Process Deblloat**. On y prépare les TikTok (Overview, Démarrage, SlideshowLab, kit d’assets, format, classement, rituels, Poster US, hygiène de compte, FAQ) avec un rail **Paiements** toujours visible.

Cette version tourne **sans auth, sans base, sans Stripe et sans API TikTok**. Les stats, virements et téléchargements sont des données locales de démonstration.

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

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui.

## Ce qui est livré

- Navigation complète (desktop + mobile), copy française
- **Démarrage** : checklist + guide (recherche de format, payoff, un seul compte)
- **SlideshowLab** : squelettes (notif, payoff slide 4, guide), variations, aperçu 9:16, batch de la semaine
- **Format** : bibliothèque de mécanismes, carnet de recherche, packaging (icône / 3 captures), cadre 9:16, interdits
- **Process Assets** : footage pack groupé (logo, histoire store, B-roll, angles)
- **Automatiser** : jobs séparés, batch hebdo, tableau tuer/doubler — pas d’auto-post unofficial
- **Clippers** : revue avant envoi (CTA, icône, angle, un compte)
- Poster US **éducatif** : pas de VPN, pas de spoof, pas de ferme, pas de script de contournement
- Score d’hygiène Shadowban (pas un détecteur magique)
- Demandes de virement simulées (localStorage)

## Déploiement Vercel

Le CLI Vercel de cet environnement est souvent **déconnecté**. Un déploiement anonyme temporaire :

```bash
rm -f .vercel/anonymous.json
npx vercel deploy --temporary --yes
```

Il expire (~1 h) tant qu’il n’est pas réclamé. Pour un projet durable : `npx vercel login` puis `npx vercel --yes --prod`.

## Plus tard

- Compte utilisateur / auth
- Base de données
- Stripe (vrais virements)
- API TikTok (stats, publication)
- Stockage CDN des assets binaires
