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

- Navigation complète (desktop + mobile)
- Copy française réelle, états vides / chargement / erreur
- SlideshowLab (modèles, édition, aperçu 9:16, copie du pack)
- Kit Process Assets (filtre + téléchargement simulé)
- Poster US **éducatif** : pas de VPN, pas de spoof, pas de script de contournement
- Score d’hygiène Shadowban (pas un détecteur magique)
- Demandes de virement simulées (localStorage)

## Ce qui est reporté

- Compte utilisateur / auth
- Base de données
- Stripe (vrais virements)
- API TikTok (stats, publication)
- Stockage CDN des assets binaires
