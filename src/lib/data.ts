export const program = {
  name: "Process Clipping",
  brand: "Process",
  product: "Process Deblloat",
  handle: "@process.deblloat",
  youtube: "youtube.com/@process",
  tagline: "Le portail clipper de Process Deblloat.",
  pitch:
    "Tu coupes les moments forts des lives et des longs formats Process, tu les postes sur TikTok, tu es payé au CPM validé. Un compte, des sources officielles, zéro hype.",
  demoNotice:
    "Portail de démonstration. Les stats, virements et téléchargements sont locaux. Stripe, TikTok et la base de données arriveront plus tard.",
  payoutThreshold: 50,
  cpmFr: 0.35,
  cpmUs: 1.2,
  currency: "EUR",
} as const;

export const currentClipper = {
  name: "Camille R.",
  handle: "@camille.setup",
  niche: "Setup & productivité",
  joined: "2026-03-12",
  code: "PROCESS-CAMILLE",
  trackedUrl: "https://process.deblloat/c/camille",
};

export const overviewKpis = [
  { id: "vues", label: "Vues validées · 7 j", value: "184 200", delta: "+12 %", hint: "Clips validés uniquement" },
  { id: "cpm", label: "CPM moyen", value: "0,92 €", delta: "FR + US", hint: "Mix des deux marchés" },
  { id: "gains", label: "Gains · 7 j", value: "169,46 €", delta: "+8 %", hint: "Avant seuil de virement" },
  { id: "clips", label: "Clips en revue", value: "3", delta: "48 h", hint: "Délai de modération cible" },
] as const;

export const weekViews = [
  { day: "Sam", views: 18 },
  { day: "Dim", views: 22 },
  { day: "Lun", views: 31 },
  { day: "Mar", views: 27 },
  { day: "Mer", views: 41 },
  { day: "Jeu", views: 36 },
  { day: "Ven", views: 29 },
] as const;

export const recentClips = [
  {
    id: "c1",
    title: "Windows 11 : les 7 trucs à virer tout de suite",
    url: "https://www.tiktok.com/@camille.setup/video/1",
    views: 41200,
    status: "valide" as const,
    market: "US",
    postedAt: "2026-09-09",
  },
  {
    id: "c2",
    title: "Ton PC n’est pas lent. Il est plein.",
    url: "https://www.tiktok.com/@camille.setup/video/2",
    views: 18800,
    status: "en_revue" as const,
    market: "FR",
    postedAt: "2026-09-10",
  },
  {
    id: "c3",
    title: "Edge, Copilot, widgets : off. Point.",
    url: "https://www.tiktok.com/@camille.setup/video/3",
    views: 9600,
    status: "refuse" as const,
    reason: "Logo Process recadré, CTA manquant.",
    market: "FR",
    postedAt: "2026-09-08",
  },
  {
    id: "c4",
    title: "Slideshow : le bureau vide qui charge en 4 s",
    url: "https://www.tiktok.com/@camille.setup/video/4",
    views: 67300,
    status: "valide" as const,
    market: "US",
    postedAt: "2026-09-06",
  },
];

export const announcements = [
  {
    id: "a1",
    date: "11 sept.",
    title: "Nouveau pack SlideshowLab « Privacy 60 s »",
    body: "8 slides, hooks EN + FR, safe zones déjà calées. À poster en Photo Mode, pas en recodage vidéo.",
  },
  {
    id: "a2",
    date: "4 sept.",
    title: "Modération : 48 h, pas 48 min",
    body: "On valide à la main. Un clip refusé peut être recollé après correction. Pas d’API TikTok pour l’instant.",
  },
];

export const onboardingSteps = [
  {
    id: "format",
    title: "Lire le Format officiel",
    detail: "Hook 1 s, 9:16, une idée par clip, CTA Process. Sans ça, tes vues ne sont pas validées.",
    href: "/format",
  },
  {
    id: "assets",
    title: "Télécharger Process Assets",
    detail: "Logo, captures, B-roll bureau, hooks pré-écrits. Tu n’utilises que le kit + tes propres plans.",
    href: "/process-assets",
  },
  {
    id: "compte",
    title: "Déclarer un seul compte TikTok",
    detail: "Un clipper = un compte. Le multi-compte fait ban le profil et gèle les gains.",
    href: "/shadowban",
  },
  {
    id: "lab",
    title: "Monter un premier slideshow",
    detail: "SlideshowLab assemble le texte, la caption et l’ordre des slides. Tu exportes, tu colles dans TikTok.",
    href: "/slideshow-lab",
  },
  {
    id: "poster",
    title: "Poster (FR d’abord)",
    detail: "Le marché US paie mieux. Tu y vas quand le format est propre — voir Poster US, sans VPN.",
    href: "/poster-us",
  },
  {
    id: "soumettre",
    title: "Soumettre le lien du clip",
    detail: "Colle l’URL. Les vues sont vérifiées à la main. Au-delà de 50 € cumulés, tu peux demander un virement.",
    href: "/clippers",
  },
];

export const assets = [
  {
    id: "logo-noir",
    title: "Logo Process — fond clair",
    kind: "Marque",
    format: "SVG · PNG",
    weight: "84 Ko",
    usage: "Coin supérieur, jamais déformé, marge 16 px.",
  },
  {
    id: "logo-inv",
    title: "Logo Process — fond sombre",
    kind: "Marque",
    format: "SVG · PNG",
    weight: "86 Ko",
    usage: "Slides sombres uniquement. Pas de contour blanc maison.",
  },
  {
    id: "broll-desk",
    title: "B-roll bureau vide",
    kind: "Vidéo",
    format: "MP4 4K",
    weight: "180 Mo",
    usage: "Plans de coupe. 4 s max par plan. Pas de visage tiers.",
  },
  {
    id: "capture-before",
    title: "Captures Windows « avant »",
    kind: "Image",
    format: "PNG 1080×1920",
    weight: "12 Mo",
    usage: "Slideshow avant/après setup. Recadrage 9:16 déjà fait.",
  },
  {
    id: "capture-after",
    title: "Captures Windows « après »",
    kind: "Image",
    format: "PNG 1080×1920",
    weight: "9 Mo",
    usage: "Même série que l’avant. Ne pas mélanger les builds.",
  },
  {
    id: "hooks-fr",
    title: "Hooks FR — pack septembre",
    kind: "Texte",
    format: "TXT",
    weight: "8 Ko",
    usage: "Une ligne à l’écran, pas un paragraphe. Tu peux adapter.",
  },
  {
    id: "hooks-en",
    title: "Hooks EN — pack US",
    kind: "Texte",
    format: "TXT",
    weight: "8 Ko",
    usage: "Pour Poster US. Anglais naturel, pas de traduction mot à mot.",
  },
  {
    id: "sons",
    title: "Sons TikTok suggérés",
    kind: "Audio",
    format: "Liste",
    weight: "1 Ko",
    usage: "Sons de la bibliothèque TikTok uniquement. Pas de rip YouTube.",
  },
  {
    id: "safezone",
    title: "Calque safe zone UI",
    kind: "Image",
    format: "PNG transparent",
    weight: "420 Ko",
    usage: "À superposer dans CapCut. UI TikTok + bouton + caption.",
  },
];

export const formatSpecs = [
  {
    title: "Cadre",
    items: ["9:16 · 1080×1920", "Photo Mode ou plan réel", "Safe zone : 140 px haut, 220 px bas", "Logo Process visible 2 s min"],
  },
  {
    title: "Rythme",
    items: ["Hook texte dès la 1re frame", "15 à 35 s en vidéo", "5 à 8 slides en carrousel", "Une seule idée par post"],
  },
  {
    title: "Son & texte",
    items: ["Son tendance en sous-mix (10–15 %)", "Texte grand, 4–7 mots", "Pas de pavé, pas de watermark tiers", "Caption = 1 ligne + 3 hashtags"],
  },
  {
    title: "CTA",
    items: ["« Lien en bio — Process Deblloat »", "Ou code clipper à l’oral, une fois", "Pas de prix, pas de « vues garanties »", "Pas de nom de concurrent"],
  },
];

export const formatDonts = [
  "Avant/après corporel, claims santé, « PC gaming miracle ».",
  "Multi-comptes, achat de vues, bots, watermarks d’autres apps.",
  "VPN, spoof GPS, faux comptes US — voir Poster US.",
  "Musique hors bibliothèque TikTok, extraits Process non fournis.",
];

export const clippers = [
  { rank: 1, handle: "@lea.minimal", niche: "Minimalisme", views7d: 512000, clips: 18, cpm: 1.14, status: "actif" as const, market: "US" },
  { rank: 2, handle: "@nico.debloat", niche: "Windows", views7d: 388400, clips: 21, cpm: 0.88, status: "actif" as const, market: "Mix" },
  { rank: 3, handle: "@camille.setup", niche: "Setup", views7d: 184200, clips: 11, cpm: 0.92, status: "actif" as const, market: "Mix", you: true },
  { rank: 4, handle: "@ira.privacy", niche: "Privacy", views7d: 142000, clips: 9, cpm: 1.31, status: "actif" as const, market: "US" },
  { rank: 5, handle: "@tom.cleanos", niche: "Windows", views7d: 98000, clips: 14, cpm: 0.41, status: "pause" as const, market: "FR" },
  { rank: 6, handle: "@sami.dock", niche: "Mac", views7d: 76400, clips: 7, cpm: 0.55, status: "en_revue" as const, market: "FR" },
  { rank: 7, handle: "@nahe.desk", niche: "Setup", views7d: 51200, clips: 4, cpm: 0.38, status: "nouveau" as const, market: "FR" },
  { rank: 8, handle: "@elio.tiles", niche: "Productivité", views7d: 22100, clips: 3, cpm: 0.33, status: "nouveau" as const, market: "FR" },
];

export const automations = [
  {
    id: "cadence",
    title: "Cadence de publication",
    summary: "2 à 4 posts / jour, espacés de 3 h. Jamais 8 dumps d’un coup.",
    kind: "Rituel",
    steps: [
      "Prépare 6 clips le dimanche (3 FR, 3 EN si tu vises l’US).",
      "Poste à 7h, 12h, 18h heure du compte — pas 8 d’affilée.",
      "Un même moment Process = un trim différent + un hook différent.",
    ],
  },
  {
    id: "capcut",
    title: "Preset CapCut Process",
    summary: "Typo, safe zone, durée de slide. À coller une fois, puis duplicata.",
    kind: "Preset",
    steps: [
      "Projet 1080×1920, 30 fps.",
      "Texte : 78 pt, poids medium, ombre 20 %, jamais en bas de l’écran.",
      "Slides Photo Mode : 1,4 s / image. Vidéo : cut sur le mot fort.",
    ],
  },
  {
    id: "sources",
    title: "Veille des sources officielles",
    summary: "YouTube Process + assets du portail. Rien d’autre.",
    kind: "Veille",
    steps: [
      "Abonne-toi à la chaîne Process. Un long format = 4 à 8 clips, pas 30 clones.",
      "Note le timestamp + l’idée en une phrase avant de monter.",
      "Si le kit Assets n’a pas le plan, filme le tien. Ne vole pas un autre clipper.",
    ],
  },
  {
    id: "tiktok-api",
    title: "File d’attente TikTok",
    summary: "Connexion API — pas encore branchée. La file reste locale.",
    kind: "API",
    deferred: true,
    steps: [
      "Plus tard : OAuth TikTok officiel, pas de login/password collés ici.",
      "En attendant : exporte depuis SlideshowLab, uploade à la main dans l’app.",
      "Aucun outil tiers « auto-post unofficial » n’est autorisé.",
    ],
  },
];

export const posterUsLessons = [
  {
    title: "Pourquoi l’US paie plus",
    body: "Le CPM suit le marché pub, pas un « hack de pays ». Les annonceurs US enchérissent plus. Un clip EN bien fait peut valoir 2 à 4× un clip FR — à vues égales, et seulement s’il est validé.",
  },
  {
    title: "Ce que tu peux faire (dans les règles)",
    body: "Écrire des hooks en anglais naturel. Choisir un son qui marche aux US. Poster aux heures ET/PT. Régler la langue du contenu dans TikTok. Parler à un usage universel (PC lent, bloat, privacy), pas à « les Français vs les ricains ».",
  },
  {
    title: "Ce que tu ne feras pas ici",
    body: "Pas de VPN, pas de spoof de localisation, pas de ferme de téléphones, pas de faux comptes US achetés, pas de script pour contourner les restrictions géo. Process Clipping n’automatise aucune de ces pratiques. Si quelqu’un te vend « un IP US pour le FYP », c’est un risque de ban, pas une méthode.",
  },
  {
    title: "Qualité avant géo",
    body: "Un clip FR propre bat un clip EN bâclé. Passe par Format + SlideshowLab. Quand trois clips FR d’affilée dépassent 10 k vues organiques, tu testes l’EN — sans changer d’IP.",
  },
];

export const posterUsChecklist = [
  { id: "langue", label: "Hooks et caption rédigés en anglais, relus à voix haute" },
  { id: "universel", label: "Sujet compréhensible hors France (Windows, clutter, privacy)" },
  { id: "son", label: "Son bibliothèque TikTok, pas un rip de live FR" },
  { id: "heure", label: "Créneau 7–9h ou 18–22h heure US East, pas 3h du matin chez toi par habitude" },
  { id: "tos", label: "Aucun VPN / GPS spoof / compte acheté — case obligatoire" },
];

export const shadowbanSignals = [
  { id: "fyp", label: "Tes 5 derniers posts ont quasi 0 vue « Pour toi » (Analytics > Trafic)", weight: 2 },
  { id: "hashtag", label: "Tes hashtags ne remontent plus tes vidéos depuis un autre compte", weight: 1 },
  { id: "processing", label: "Plusieurs uploads restent bloqués en « Traitement » sans réseau faible", weight: 2 },
  { id: "violations", label: "Paramètres > Intégrité : une infraction récente", weight: 3 },
  { id: "dump", label: "Tu as posté plus de 8 fois en 24 h ou supprimé en masse", weight: 2 },
  { id: "clone", label: "Même fichier, même hook, plusieurs comptes (même les tiens)", weight: 3 },
  { id: "watermark", label: "Watermark CapCut / autre app encore visible", weight: 1 },
  { id: "vpn", label: "Tu as changé d’IP / VPN / appareil de façon brutale", weight: 3 },
];

export const shadowbanRecovery = [
  "Arrête de poster 3 à 5 jours. Pas de « test » quotidien.",
  "Passe en privé ou archive les posts clones, watermarks, hors-sujet.",
  "Un compte, un appareil, une connexion habituelle.",
  "Reprise : un clip propre, original, 20–30 s, puis attends 24 h.",
  "Lis les Community Guidelines. On ne « déshadowban » pas avec un outil tiers.",
];

export const faqs = [
  {
    q: "C’est quoi Process Deblloat ?",
    a: "Process Deblloat, c’est la méthode Process pour enlever le superflu : Windows, apps, notifications, bureaux saturés. Tes clips montrent le geste, pas un discours gourou.",
  },
  {
    q: "Comment je suis payé ?",
    a: "Au CPM sur les vues des clips validés. Indicatif démo : 0,35 € / 1 000 vues FR, 1,20 € / 1 000 vues US. Virement dès 50 € cumulés, une fois par mois. Stripe n’est pas branché dans cette version — le bouton Paiements simule la demande.",
  },
  {
    q: "Je dois poster aux États-Unis ?",
    a: "Non. Le FR marche. L’US paie souvent mieux si le contenu est vraiment en anglais. Poster US explique le cadre légitime. VPN et contournement géo sont interdits.",
  },
  {
    q: "Je peux utiliser plusieurs comptes ?",
    a: "Non. Un clipper, un TikTok déclaré. Le multi-compte = exclusion et gains gelés.",
  },
  {
    q: "Mes vues sont fausses / l’API TikTok ?",
    a: "Pas d’API TikTok pour l’instant. Tu colles le lien, un modo vérifie. Les chiffres du dashboard sont des données de démonstration locales.",
  },
  {
    q: "Je peux automatiser le post ?",
    a: "Les rituels (cadence, preset CapCut, veille) oui. L’auto-post unofficial, les fermes de devices et les VPN, non. La file TikTok API est prévue plus tard, en OAuth officiel.",
  },
  {
    q: "Mon clip a été refusé ?",
    a: "La raison s’affiche (CTA, recadrage, hors-sujet…). Corrige, re-soumets. Ce n’est pas un ban du programme.",
  },
  {
    q: "Je suis shadowban ?",
    a: "TikTok ne le confirme jamais. La page Shadowban est un score d’hygiène, pas un détecteur magique. Ignore les « shadowban checkers » qui demandent tes identifiants.",
  },
  {
    q: "Je peux inventer des témoignages Process ?",
    a: "Non. Pas de faux avant/après, pas de « +200 FPS garantis », pas de stats inventées. Le ton Process est factuel.",
  },
  {
    q: "Quand arrivent le vrai Stripe et la base ?",
    a: "Plus tard. Cette version tient tout en local (navigateur) pour que tu puisses déjà tourner le flux clipper.",
  },
];

export const payoutHistory = [
  { id: "p1", date: "1 août 2026", amount: 86.4, status: "versé" as const, method: "Virement" },
  { id: "p2", date: "1 juil. 2026", amount: 54.1, status: "versé" as const, method: "PayPal" },
  { id: "p3", date: "1 juin 2026", amount: 61.0, status: "versé" as const, method: "Virement" },
];

export const slideshowTemplates = [
  {
    id: "win11",
    title: "Windows 11 · 7 gestes",
    lang: "FR",
    caption: "Ton PC n’est pas mort. Il est juste plein. Process Deblloat, lien en bio.",
    hashtags: "#windows11 #debloat #setup #process",
    slides: [
      "Ton PC n’est pas lent.",
      "Il est plein.",
      "Widgets, Copilot, pubs Start.",
      "Télémétrie qui tourne à vide.",
      "Apps que tu n’as jamais ouvertes.",
      "Process : on enlève, on ne « optimise » pas magique.",
      "7 gestes. 4 minutes. Bureau calme.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy · 60 secondes",
    lang: "FR",
    caption: "Moins de télémétrie, pas moins d’OS. Process Deblloat.",
    hashtags: "#privacy #windows #debloat #process",
    slides: [
      "Windows n’a pas besoin de tout savoir.",
      "Diag tracking : le plus bas.",
      "Pubs ciblées : off.",
      "Localisation des apps : non.",
      "Ça n’est pas un VPN miracle.",
      "C’est juste moins de bruit.",
    ],
  },
  {
    id: "us-bloat",
    title: "Your PC is full",
    lang: "EN",
    caption: "Your PC isn’t slow. It’s full. Process Deblloat — link in bio.",
    hashtags: "#windows11 #debloat #minimalsetup #pc",
    slides: [
      "Your PC isn’t slow.",
      "It’s full.",
      "Widgets. Ads. Apps you never asked for.",
      "Turn off what you don’t use.",
      "No magic FPS. Just less junk.",
      "Process Deblloat. Link in bio.",
    ],
  },
  {
    id: "desk",
    title: "Bureau vide",
    lang: "FR",
    caption: "Un bureau vide, ce n’est pas une esthétique. C’est de la place.",
    hashtags: "#setup #minimal #desk #process",
    slides: [
      "42 icônes sur le bureau.",
      "Aucune n’est « temporaire ».",
      "Une barre des tâches, une icône utile.",
      "Le reste : menu Démarrer, ou poubelle.",
      "Moins à regarder = moins à subir.",
    ],
  },
];

export const storageKeys = {
  onboarding: "process-clipping.onboarding",
  slideshow: "process-clipping.slideshow",
  shadowban: "process-clipping.shadowban",
  automations: "process-clipping.automations",
  payouts: "process-clipping.payouts",
  posterUs: "process-clipping.poster-us",
  submissions: "process-clipping.submissions",
} as const;
