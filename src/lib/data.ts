export const program = {
  name: "Process Clipping",
  product: "Process Debloat",
  pitch:
    "Portail clipper Process Debloat. Slideshows TikTok, 40 % du net, lien useprocess.xyz.",
  inviteName: "Evro",
  inviteCode: "EVRO71",
  joinHost: "useprocess.xyz",
  userName: "Evro",
  userEmail: "useprocess.daylong139…",
  whatsapp: "https://wa.me/",
} as const;

export const storageKeys = {
  joinCode: "process-clipping.join-code",
  formatLibrary: "process-clipping.format-library",
  stripeConnect: "process-clipping.stripe-connect",
  clipperQuery: "process-clipping.clipper-query",
} as const;

export function joinUrl(code: string = program.inviteCode) {
  return `${program.joinHost}/join/${code}`;
}

export const overviewKpis = [
  {
    id: "visites",
    label: "Visites",
    hint: "ouvertures de ton lien",
    value: 0,
    icon: "mouse",
    line: "#60a5fa",
  },
  {
    id: "installs",
    label: "Installs",
    hint: "app ouverte avec ton code",
    value: 0,
    icon: "phone",
    line: "#c4b5fd",
  },
  {
    id: "paywall",
    label: "Paywall",
    hint: "ont vu l’offre",
    value: 0,
    icon: "lock",
    line: "#fdba74",
  },
  {
    id: "essais",
    label: "Essais",
    hint: "essais gratuits lancés",
    value: 0,
    icon: "spark",
    line: "#f9a8d4",
  },
  {
    id: "ventes",
    label: "Ventes",
    hint: "achats attribués",
    value: 0,
    icon: "bag",
    line: "#86efac",
  },
] as const;

export const funnel = [
  { id: "v-i", label: "Visites → installs" },
  { id: "i-p", label: "Installs → paywall" },
  { id: "p-v", label: "Paywall → ventes" },
] as const;

export const demarrageNav = [
  { id: "produit", label: "Le produit qu’on vend" },
  { id: "paiement", label: "Combien vous êtes payé" },
  { id: "vendre", label: "Comment on vend" },
  { id: "comptes", label: "Créer ses comptes TikTok" },
  { id: "warmup", label: "Comment warm up" },
  { id: "format", label: "Le format slideshow" },
  { id: "resultats", label: "Les résultats à attendre" },
] as const;

export const viewBonuses = [
  {
    views: "100k",
    reward: "50 €",
    extra: null,
    image: "/rewards/50eur.png",
  },
  {
    views: "500k",
    reward: "100 €",
    extra: null,
    image: "/rewards/100eur.png",
  },
  {
    views: "1M",
    reward: "150 €",
    extra: "+ coaching 1-to-1",
    image: "/rewards/coaching.png",
  },
  {
    views: "10M",
    reward: "iPhone 17",
    extra: null,
    image: "/rewards/iphone17.png",
  },
] as const;

export const bonusNotes = [
  "Le post doit contenir un CTA subtil vers Process (en respectant la méthodologie).",
  "Les primes cash se débloquent à 200 € de commission déjà générée. L’iPhone à 1000 € — tes ventes d’abord, primes en plus.",
  "Tu claims en DM à leks, avec le lien du compte TikTok, dès qu’un palier est hit.",
  "C’est en plus des 40 % du net — pas à la place.",
];

export const officialFormats = [
  {
    id: "72h",
    title: "01 — Guide 72h",
    size: "1080×1920",
    labels: ["Hook", "Before (bloat)", "Scan 2×2 + app"],
    images: [
      "/demarrage/72h-hook.png",
      "/demarrage/72h-before.png",
      "/demarrage/72h-scan.png",
    ],
  },
  {
    id: "glow",
    title: "02 — Glow-up célébrité",
    size: "1080×1920",
    labels: ["Hook", "Tip visage", "Slide Process"],
    images: [
      "/demarrage/glow-hook.png",
      "/demarrage/glow-tip.png",
      "/demarrage/glow-process.png",
    ],
  },
  {
    id: "foods",
    title: "03 — Foods",
    size: "1080×1920",
    labels: ["Hook", "Aliment", "App + carte"],
    images: [
      "/demarrage/food-hook.png",
      "/demarrage/food-aliment.png",
      "/demarrage/food-app.png",
    ],
  },
] as const;

export const labStructures = [
  {
    id: "72h",
    tab: "01 — Guide 72h",
    heading: "“visage gonflé ? fais ça 72h”",
    steps: [
      "1. Hook — une promesse, 1 seconde",
      "2. Before — visage gonflé",
      "3. After — même personne, plus net",
      "4. Scan 2×2 — visages + screen app dans la grille",
      "5. 5–8. Protocole : glace → cardio → alim → sauna",
    ],
    labels: ["Hook", "Before (bloat)", "Scan 2×2 + app"],
    images: [
      "/lab/struct-72h-hook.png",
      "/lab/struct-72h-before.png",
      "/lab/struct-72h-scan.png",
    ],
  },
  {
    id: "glow",
    tab: "02 — Glow-up célébrité",
    heading: "“Comment glow up ? (méthode de X)”",
    steps: [
      "1. Hook — une célébrité / une méthode, 1 seconde",
      "2. Tip visage — un geste, pas un mélange recette + POV",
      "3. Slide Process — scan + app",
    ],
    labels: ["Hook", "Tip visage", "Slide Process"],
    images: [
      "/demarrage/glow-hook.png",
      "/demarrage/glow-tip.png",
      "/demarrage/glow-process.png",
    ],
  },
  {
    id: "foods",
    tab: "03 — Foods",
    heading: "“FOODS THAT BLOAT”",
    steps: [
      "1. Hook — aliments qui gonflent, 1 seconde",
      "2. Aliment — un aliment, une phrase",
      "3. App + carte — recettes Process, pas un random POV",
    ],
    labels: ["Hook", "Aliment", "App + carte"],
    images: [
      "/demarrage/food-hook.png",
      "/demarrage/food-aliment.png",
      "/demarrage/food-app.png",
    ],
  },
] as const;

export const formatLibrarySeed = [
  {
    id: "glow-rupture",
    title: "Comment glow up après une rupture",
    views: "8.6M",
    src: "/format/glow-rupture.png",
  },
  {
    id: "foods-bloat",
    title: "Debloat food",
    views: "7.0M",
    src: "/format/foods-bloat.png",
  },
  {
    id: "guide-debloat",
    title: "Guide debloat Your face",
    views: "1.6M",
    src: "/format/guide-debloat.png",
  },
  {
    id: "glow-x",
    title: "Comment glow up (méthode de X)",
    views: "306k",
    src: "/format/glow-methode-x.png",
  },
];

export const copyAccounts = [
  {
    name: "EvoFace",
    handle: "@evofaceprime",
    followers: "5k abonnés",
    likes: "378.4k likes",
    blurb:
      "Collages cyan. Photos détourées + icônes + hook gras. Un fond, une idée.",
    mosaic: "/format/evoface-grid.png",
    url: "https://www.tiktok.com/@evofaceprime",
  },
  {
    name: "chud j",
    handle: "@jacosahur",
    followers: "1.4k abonnés",
    likes: "35.8k likes",
    blurb:
      "Guides looksmaxxing. Fond pastel, schémas, avant/après, titre en capitales.",
    mosaic: "/format/chudj-grid.png",
    url: "https://www.tiktok.com/@jacosahur",
  },
];

export type ProcessAsset = {
  id: string;
  title: string;
  src: string;
  wide?: boolean;
};

export const processAssets: { group: string; items: ProcessAsset[] }[] = [
  {
    group: "LOGO",
    items: [
      { id: "icon-app", title: "Icône app", src: "/assets/icon-app.png" },
      { id: "icon-tile", title: "Tôle", src: "/assets/icon-tile.png" },
    ],
  },
  {
    group: "SCREENS APP",
    items: [
      { id: "home", title: "Home", src: "/assets/screen-home.png" },
      { id: "scan-clair", title: "Scan clair", src: "/assets/screen-scan-clair.png" },
      { id: "scan-sombre", title: "Scan sombre", src: "/assets/screen-scan-sombre.png" },
      { id: "scan-en", title: "Scan EN", src: "/assets/screen-scan-en.png" },
      { id: "scan-before", title: "Scan before", src: "/assets/screen-scan-before.png" },
      { id: "scan-after", title: "Scan after", src: "/assets/screen-scan-after.png" },
      { id: "recettes", title: "Recettes", src: "/assets/screen-recettes.png" },
    ],
  },
  {
    group: "APP STORE",
    items: [
      { id: "carte", title: "Carte App Store", src: "/assets/store-card.png", wide: true },
      { id: "fiche", title: "Fiche App Store", src: "/assets/store-fiche.png", wide: true },
      { id: "badge", title: "Badge Download", src: "/assets/badge-download.png" },
      { id: "as-logo", title: "Logo App Store", src: "/assets/logo-appstore.png" },
    ],
  },
];

export const posterPrompt = `# Setup VPN TikTok US — Hetzner Ashburn + Outline

Tu es un agent autonome (Cursor / Claude Code) avec accès shell. Tu fais TOUT le serveur toi-même. N'explique pas les commands : exécute-les. Ne demande pas à l'humain de copier-coller du JSON si tu peux SSH.

## Ce que l'humain a DÉJÀ fait — ne le refais pas, ne le demande pas
- Téléphone dédié reset, langue English (United States), région United States
- Fuseau New York ou Los Angeles, automatique OFF
- GPS / Location Services OFF
- Aucune SIM, Wi-Fi only
- Email neuf + Apple ID / Google US (ZIP 10001 ou 90001, paiement None)
- Compte Hetzner Cloud vérifié avec CB
Toi tu ne touches PAS au téléphone. Uniquement le VPS + Outline.`;

export const faqs = [
  {
    q: "C’est quoi Process Debloat ?",
    a: "L’app qu’on vend : Debloat ton visage. Scan, score, recettes, App Store. Tes slideshows amènent au lien useprocess.xyz — pas un coaching filmé.",
  },
  {
    q: "Comment je suis payé ?",
    a: "40 % du net sur chaque vente, à vie, tant que l’abonnement reste actif. Pas de plafond. Stripe, retenues 30 jours, puis payout. Les primes vues (100k → 50 €, etc.) sont en plus, pas à la place.",
  },
  {
    q: "C’est quoi le lien ?",
    a: "useprocess.xyz/join/EVRO71 — code EVRO71. Commentaire épinglé, pas en pin + bio. Sans pin + bio, tu fais des vues pour TikTok, pas pour Process.",
  },
  {
    q: "Je filme ou je poste des slideshows ?",
    a: "On ne se filme pas. Photo Mode TikTok, suite de slides 9:16. SlideshowLab pour monter, Format pour copier les exemples qui marchent.",
  },
  {
    q: "Combien de comptes ?",
    a: "Maximum 8 comptes TikTok par iPhone. 1 nouveau par semaine. Pas 8 d’un coup. Les comptes déjà créés sur cet iPhone comptent dans les 8.",
  },
  {
    q: "Je peux poster via API ?",
    a: "Poster via API n’est pas le problème. Le compte que tu ne visites pas se fait griller. Chaque jour : rentre dans le compte, like, commente, sondage, scrolle. Pas d’auto-post unofficial ici.",
  },
  {
    q: "Je dois poster aux États-Unis ?",
    a: "Poster US est une page de documentation. Ce portail n’exécute aucun VPN, aucun spoof, aucun script. Lis la page, ne lance rien depuis ici.",
  },
  {
    q: "Je suis shadowban ?",
    a: "Si tu as le message « Plus de données », oui. Sinon, moins de 50 vues = souvent shadowban. Arrête 2 jours, scrolle, like, Shop, panier, infos paiement — voir la page Shadowban.",
  },
  {
    q: "Stripe n’est pas branché ?",
    a: "Le bouton Connecter un compte est une démo locale. Virements via Stripe Connect arriveront plus tard. Rien n’est envoyé à une banque depuis ce portail.",
  },
  {
    q: "Les stats TikTok ?",
    a: "Disponible bientôt. Le dashboard Overview affiche 0 tant que l’API n’est pas branchée. Tes vrais Analytics restent dans TikTok.",
  },
];
