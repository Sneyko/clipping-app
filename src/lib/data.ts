export const program = {
  name: "Aven Clipping",
  product: "Aven",
  pitch:
    "Portail clipper Aven. Slideshows gymtok, 40 % du net sur le premier paiement Aven Pro attribué.",
  inviteName: "Evro",
  inviteCode: "AVEN",
  joinHost: "aven-workout.vercel.app",
  userName: "Evro",
  userEmail: "evro@avenworkout…",
  whatsapp: "https://wa.me/",
  handle: "@avenworkout",
  handleUrl: "https://www.tiktok.com/@avenworkout",
  vitrineUrl: "https://aven-workout.vercel.app",
  appStoreId: "6810626340",
  appStoreLive: false,
  signature: "Chaque série compte.",
  commission: "40 % du net",
  payoutThreshold: "50 €",
} as const;

export const storageKeys = {
  joinCode: "aven-clipping.join-code",
  formatLibrary: "aven-clipping.format-library",
  stripeConnect: "aven-clipping.stripe-connect",
  clipperQuery: "aven-clipping.clipper-query",
} as const;

export function joinUrl(code: string = program.inviteCode) {
  return `${program.joinHost}/?c=${code}`;
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
    hint: "ont vu Aven Pro",
    value: 0,
    icon: "lock",
    line: "#fdba74",
  },
  {
    id: "clips",
    label: "Clips",
    hint: "soumis et en revue",
    value: 0,
    icon: "spark",
    line: "#C3F261",
  },
  {
    id: "ventes",
    label: "Ventes",
    hint: "abos Pro attribués",
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
  { id: "comptes", label: "Un compte TikTok" },
  { id: "regles", label: "Les règles" },
  { id: "format", label: "Le format slideshow" },
  { id: "resultats", label: "Les résultats à attendre" },
] as const;

export const commissionTiers = [
  { plan: "Mensuel", price: "2,99 €", cut: "≈ 1,00 €" },
  { plan: "Annuel", price: "26,99 €", cut: "≈ 9,20 €" },
  { plan: "À vie", price: "79,99 €", cut: "≈ 27,20 €" },
] as const;

export const officialFormats = [
  {
    id: "rangs",
    title: "01 — Rangs musculaires",
    size: "1080×1920",
    labels: ["Hook rang", "Paliers", "Payoff"],
    images: [
      "/demarrage/rangs-hook.png",
      "/demarrage/rangs-paliers.png",
      "/demarrage/rangs-app.png",
    ],
  },
  {
    id: "live",
    title: "02 — Live Activity",
    size: "1080×1920",
    labels: ["Hook repos", "Lock screen", "Séance"],
    images: [
      "/demarrage/live-hook.png",
      "/demarrage/live-lock.png",
      "/demarrage/live-seance.png",
    ],
  },
  {
    id: "carte",
    title: "03 — Carte 9:16",
    size: "1080×1920",
    labels: ["Hook bilan", "Carte séance", "CTA"],
    images: [
      "/demarrage/carte-hook.png",
      "/demarrage/carte-card.png",
      "/demarrage/carte-cta.png",
    ],
  },
] as const;

export const labStructures = [
  {
    id: "rangs",
    tab: "01 — Rangs musculaires",
    heading: "“t’es quoi comme rang aux pecs ?”",
    steps: [
      "1. Hook — une question de rang, 1 seconde",
      "2. Preuve — Bronze → Argent → Or → Platine → Diamant → Élite",
      "3. Payoff — l’app, pas un avant/après corporel",
    ],
    labels: ["Hook rang", "Paliers", "Payoff"],
    images: [
      "/lab/struct-rangs-hook.png",
      "/lab/struct-rangs-paliers.png",
      "/lab/struct-rangs-app.png",
    ],
  },
  {
    id: "live",
    tab: "02 — Live Activity",
    heading: "“le repos sans déverrouiller”",
    steps: [
      "1. Hook — zéro friction entre deux séries, 1 seconde",
      "2. Preuve — Live Activity + Dynamic Island : exo, charge, 2/3, timer",
      "3. Payoff — le tracker à une main, tableau kg / reps",
    ],
    labels: ["Hook repos", "Lock screen", "Séance"],
    images: [
      "/demarrage/live-hook.png",
      "/demarrage/live-lock.png",
      "/demarrage/live-seance.png",
    ],
  },
  {
    id: "carte",
    tab: "03 — Carte 9:16",
    heading: "“poste ton bilan de séance”",
    steps: [
      "1. Hook — le format prêt-à-poster, 1 seconde",
      "2. Preuve — carte 1080×1920 : durée, exercices, rang global",
      "3. Payoff — lien tracké + code, pas un script d’ads",
    ],
    labels: ["Hook bilan", "Carte séance", "CTA"],
    images: [
      "/demarrage/carte-hook.png",
      "/demarrage/carte-card.png",
      "/demarrage/carte-cta.png",
    ],
  },
] as const;

export const formatLibrarySeed = [
  {
    id: "rangs-pecs",
    title: "T’es quoi comme rang aux pecs ?",
    views: "angle",
    src: "/format/rangs-pecs.png",
  },
  {
    id: "live-activity",
    title: "Le repos sur l’écran verrouillé",
    views: "angle",
    src: "/format/live-activity.png",
  },
  {
    id: "carte-seance",
    title: "Poste ton bilan de séance",
    views: "angle",
    src: "/format/carte-seance.png",
  },
  {
    id: "seance-du-jour",
    title: "Ta séance du jour est déjà prête",
    views: "angle",
    src: "/format/seance-du-jour.png",
  },
];

export const copyAccounts = [
  {
    name: "Aven",
    handle: "@avenworkout",
    followers: "compte officiel",
    likes: "pas de compteur inventé",
    blurb:
      "Handle officiel. Gymtok FR, vraies séances, rangs et cartes 9:16. Tu copies la structure, pas des vues fantômes.",
    mosaic: "/format/aven-grid.png",
    avatar: "/format/aven-avatar.png",
    url: "https://www.tiktok.com/@avenworkout",
  },
];

export type AvenAsset = {
  id: string;
  title: string;
  src: string;
  wide?: boolean;
  ready?: boolean;
  note?: string;
};

export const avenAssets: { group: string; items: AvenAsset[] }[] = [
  {
    group: "LOGO",
    items: [
      {
        id: "icon-app",
        title: "Icône app",
        src: "/brand/aven-icon.png",
        ready: true,
      },
      {
        id: "icon-tile",
        title: "Tôle graphite",
        src: "/assets/icon-tile.png",
        ready: true,
      },
    ],
  },
  {
    group: "SCREENS APP — KIT HD À PRODUIRE",
    items: [
      {
        id: "rangs",
        title: "Rangs",
        src: "/assets/screen-rangs.png",
        note: "Placeholder. Pas une capture Aven.",
      },
      {
        id: "seance",
        title: "Séance",
        src: "/assets/screen-seance.png",
        note: "Placeholder. Pas une capture Aven.",
      },
      {
        id: "live",
        title: "Live Activity",
        src: "/assets/screen-live.png",
        note: "Placeholder. Pas une capture Aven.",
      },
      {
        id: "routines",
        title: "Routines",
        src: "/assets/screen-routines.png",
        note: "Placeholder. Pas une capture Aven.",
      },
      {
        id: "bilan",
        title: "Bilan",
        src: "/assets/screen-bilan.png",
        note: "Placeholder. Pas une capture Aven.",
      },
      {
        id: "journal",
        title: "Journal",
        src: "/assets/screen-journal.png",
        note: "Placeholder. Pas une capture Aven.",
      },
    ],
  },
  {
    group: "APP STORE",
    items: [
      {
        id: "store-offline",
        title: "Fiche App Store — hors ligne",
        src: "/assets/store-offline.png",
        wide: true,
        note: "ID 6810626340. Pas de lien store qui marche.",
      },
      {
        id: "vitrine",
        title: "Vitrine Aven",
        src: "/assets/vitrine.png",
        wide: true,
        ready: true,
        note: "aven-workout.vercel.app — live.",
      },
    ],
  },
];

export const faqs = [
  {
    q: "C’est quoi Aven ?",
    a: "Une app iPhone de musculation. Tu planifies tes routines, tu suis chaque série, tu vois chaque muscle progresser — rangs, records, XP. Pas de coach IA, pas de nutrition, pas d’Android. Signatures : « Chaque série compte. »",
  },
  {
    q: "Combien je peux gagner ?",
    a: "Ça dépend des abonnements Aven Pro attribués à ton code. Rien n’est garanti. 40 % du net Aven (après commission Apple) sur le premier paiement de chaque abo attribué. Indicatif : mensuel ≈ 1,00 € · annuel ≈ 9,20 € · à vie ≈ 27,20 €. Pas de récurrence en v1, pas d’achat de vues, pas de forfait.",
  },
  {
    q: "Comment je suis payé ?",
    a: "À partir de 50 € cumulés, une fois par mois, virement ou PayPal, justificatif requis. En dessous du seuil, le solde reste. Le bouton Stripe Connect de ce portail est une démo locale : rien n’est envoyé à une banque.",
  },
  {
    q: "C’est quoi le lien ?",
    a: "Ton code unique + un lien tracké vers aven-workout.vercel.app. La fiche App Store (id 6810626340) n’est pas en ligne : ne colle pas un lien store inventé. Publication des clips à partir du lancement App Store.",
  },
  {
    q: "Comment je récupère mon code ?",
    a: "Candidature (pseudo TikTok, lien, audience, niche, motivation) → validation. Ensuite tu reçois le code, le lien tracké et l’accès au kit. Sur ce portail démo, le code s’édite en local dans Overview.",
  },
  {
    q: "Je filme ou je poste des slideshows ?",
    a: "Les deux marchent si c’est vrai. Slideshow Photo Mode 9:16 accepté. L’authenticité gagne sur gymtok : vraies séances, vraie salle, ta voix. Kit de sources + tes images. Pas de script d’ads.",
  },
  {
    q: "Combien de comptes TikTok ?",
    a: "Un compte TikTok déclaré par clipper. Changement possible après validation. Pas de fermes, pas de multi-comptes, pas de VPN / geo-spoof.",
  },
  {
    q: "Je peux poster via API ?",
    a: "Pas d’auto-post unofficial ici. OAuth officiel n’est pas branché. Tu postes à la main en Photo Mode. Les stats TikTok du dashboard restent à 0 tant que l’API n’est pas branchée.",
  },
  {
    q: "La fiche App Store marche ?",
    a: "Non. L’id 6810626340 est prévu, la fiche est hors ligne. Site vitrine live : aven-workout.vercel.app. Handle : @avenworkout.",
  },
  {
    q: "Les captures HD sont où ?",
    a: "Le kit HD n’est pas encore produit. L’icône Aven est dispo. Les autres visuels du portail sont des placeholders assumés — pas des faux screens de l’app.",
  },
];
