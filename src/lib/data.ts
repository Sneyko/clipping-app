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
    reason: "Logo Process recadré, CTA trop tôt (slide 1).",
    postedAt: "2026-09-08",
    market: "FR",
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
    date: "12 sept.",
    title: "SlideshowLab : structures + variations",
    body: "Trois squelettes officiels (notif, payoff slide 4, guide). Tu copies le mécanisme, pas le fichier. Batch de la semaine dans Automatiser.",
  },
  {
    id: "a2",
    date: "11 sept.",
    title: "Pack SlideshowLab « Privacy 60 s »",
    body: "8 slides, hooks EN + FR, safe zones déjà calées. À poster en Photo Mode, pas en recodage vidéo.",
  },
  {
    id: "a3",
    date: "4 sept.",
    title: "Modération : 48 h, pas 48 min",
    body: "On lit le post à la main avant de payer. Un clip refusé peut être recollé. Pas d’API TikTok pour l’instant.",
  },
];

export const overviewTodos = [
  { href: "/demarrage", label: "Finir Démarrage", hint: "Recherche de format d’abord" },
  { href: "/format", label: "Noter un format qui tourne", hint: "Mécanisme, pas le post" },
  { href: "/slideshow-lab", label: "Batch 10 slides de la semaine", hint: "Même squelette, 10 scénarios" },
] as const;

export const onboardingSteps = [
  {
    id: "recherche",
    title: "Trouver un format qui tourne déjà",
    detail:
      "Recherche TikTok, filtre « plus aimés · 30 jours ». Tu sauves ce qui se répète, pas un one-off d’il y a un an. Colle le mécanisme dans Format.",
    href: "/format",
  },
  {
    id: "format",
    title: "Lire le Format officiel",
    detail: "Hook 1 s, 9:16, une idée, CTA après le récit. Process en payoff, jamais en sujet de la slide 1.",
    href: "/format",
  },
  {
    id: "assets",
    title: "Télécharger le footage pack",
    detail: "Icône, 3 premières captures (histoire), B-roll, angles — pas des scripts. Tes propres plans restent les bienvenus.",
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
    title: "Monter un batch, pas un chef-d’œuvre",
    detail: "SlideshowLab : 6 à 10 variations du même mécanisme. Tu exportes, tu colles dans Photo Mode.",
    href: "/slideshow-lab",
  },
  {
    id: "poster",
    title: "Poster (FR d’abord)",
    detail: "Le marché US paie mieux. Tu y vas quand le format convertit — voir Poster US, sans VPN.",
    href: "/poster-us",
  },
  {
    id: "soumettre",
    title: "Soumettre le lien du clip",
    detail: "Colle l’URL. Les vues sont vérifiées à la main. Au-delà de 50 € cumulés, tu peux demander un virement.",
    href: "/clippers",
  },
];

export const demarrageGuide = [
  {
    id: "produit",
    title: "Le produit qu’on vend",
    lead: "Process Deblloat enlève le superflu : Windows, apps, notifications, bureaux saturés. Tes clips montrent le geste, pas un discours gourou.",
    points: [
      "Une idée par post. Le viewer comprend en une seconde ce qu’il gagne : un PC plus calme.",
      "Tu montres le bureau, la notif, la capture — pas un tutoriel de 40 clics.",
      "L’icône Process doit rester lisible en miniature. C’est elle qu’on reconnaît au 3e passage, pas le slogan.",
    ],
  },
  {
    id: "paiement",
    title: "Combien tu es payé",
    lead: "CPM sur les vues des clips validés. Rien n’est garanti. Un post à 3 M de vues qui n’envoie personne ne vaut pas un post à 40 k qui fait ouvrir le lien.",
    points: [
      "Indicatif démo : 0,35 € / 1 000 vues FR, 1,20 € / 1 000 vues US.",
      "Virement dès 50 € cumulés, une fois par mois. Stripe n’est pas branché ici.",
      "On vérifie le lien avant de payer. Compte botté, CTA slide 1, vues achetées : refusé sur place.",
      "Un plafond par post (côté programme) évite qu’un outlier mange le mois — le reste des vues, c’est de la portée gratuite, pas un chèque infini.",
    ],
  },
  {
    id: "vendre",
    title: "Comment on vend",
    lead: "Le produit est le payoff, pas le sujet. On te donne un angle, pas un script à lire.",
    points: [
      "Slide 1 = une vie (PC lent, notif à 2 h, bureau illisible). Jamais le nom de l’app.",
      "L’app entre plus tard : notif en slide 2, ou solution en slide 4. Pas une pub dès la miniature.",
      "Tu écris tes mots. Si ça sonne récité, ça scrolle.",
      "Le commentaire « c’est quoi l’app ? » est le signal qui compte. Tu réponds avec le code, tu n’achètes pas des faux commentaires.",
    ],
  },
  {
    id: "compte",
    title: "Un seul compte",
    lead: "Process Clipping ne scale pas avec des fermes, des SIM ni des proxies. Un clipper, un TikTok déclaré.",
    points: [
      "Chauffe : scrolle, like, commente dans ta niche avant de poster. Pas 20 carrousels le jour 1.",
      "Semaine 1 : 1 post / jour max. Ensuite 2 à 4, espacés.",
      "Changer de compte sans validation = exclusion et gains gelés.",
    ],
  },
  {
    id: "recherche",
    title: "Trouver un format qui tourne",
    lead: "Tu ne commences pas par « 20 idées virales ». Tu commences par ce qui marche déjà, ce mois-ci, plusieurs fois.",
    points: [
      "Barre de recherche TikTok : setup, PC lent, Windows, privacy. Filtre plus aimés, 30 jours.",
      "Un format qui revient dans des niches différentes > un one-off chanceux.",
      "Tu casses le post : hook, première image, récit, rythme, CTA, commentaires les plus likés.",
      "Tu retiens le mécanisme (« curiosité → preuve → notif ») pas la phrase du concurrent.",
    ],
  },
  {
    id: "slideshow",
    title: "Le format slideshow",
    lead: "On ne filme pas un 1:1. On poste des carrousels Photo Mode : 9:16, une promesse, un CTA tardif.",
    points: [
      "Hook = 1 idée, 4 à 7 mots, dès la première frame.",
      "5 à 8 slides. Une action par slide, comme un onboarding court.",
      "Son collé à l’émotion, pas un son random au top du moment.",
      "Caption = 1 ligne + 3 hashtags. Le CTA vit en bio / code, pas dans un pavé.",
    ],
  },
  {
    id: "resultats",
    title: "Ce qu’on peut attendre",
    lead: "Ce n’est pas une vidéo miracle. C’est un rythme : rechercher, batcher, tuer les losers, doubler les winners.",
    points: [
      "Au-dessus de ~10–15 k vues organiques : tu déclines le même squelette (détail, personnage, contexte).",
      "En dessous de ~3 k, deux fois de suite : tu tues le format. Pas de troisième « on verra ».",
      "Si les installs / le lien ne bougent pas en ~48 h, le CTA est probablement trop tôt, trop tard, ou trop pub.",
      "Les chiffres du dashboard sont une démo locale. Tes vrais Analytics restent dans TikTok.",
    ],
  },
] as const;

export type AssetKind = "Marque" | "Image" | "Vidéo" | "Texte" | "Audio" | "Pack";

export const assets = [
  {
    id: "icon-app",
    title: "Icône Process — miniature",
    kind: "Marque" as const,
    format: "PNG 1024",
    weight: "240 Ko",
    group: "Logo",
    mock: "icon" as const,
    usage: "Lisible à 60 px. Une forme, une idée. À coller sur la slide CTA pour qu’on reconnaisse l’app au 2e passage.",
  },
  {
    id: "logo-noir",
    title: "Logo Process — fond clair",
    kind: "Marque" as const,
    format: "SVG · PNG",
    weight: "84 Ko",
    group: "Logo",
    mock: "logo-light" as const,
    usage: "Coin supérieur, jamais déformé, marge 16 px.",
  },
  {
    id: "logo-inv",
    title: "Logo Process — fond sombre",
    kind: "Marque" as const,
    format: "SVG · PNG",
    weight: "86 Ko",
    group: "Logo",
    mock: "logo-dark" as const,
    usage: "Slides sombres uniquement. Pas de contour blanc maison.",
  },
  {
    id: "screen-1",
    title: "Capture 1 — le bureau plein",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "4 Mo",
    group: "Histoire App Store",
    mock: "before" as const,
    usage: "Première capture de la série : le problème, lisible en miniature. C’est la « slide 1 » de la fiche, pas un tutoriel.",
  },
  {
    id: "screen-2",
    title: "Capture 2 — la grille des gestes",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "3 Mo",
    group: "Histoire App Store",
    mock: "grid" as const,
    usage: "Deuxième capture : on tease l’outil. Gros texte, une action.",
  },
  {
    id: "screen-3",
    title: "Capture 3 — le bureau calme",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "3 Mo",
    group: "Histoire App Store",
    mock: "after" as const,
    usage: "Troisième capture : le payoff visuel. Les 3 premières suffisent ; le reste est du remplissage.",
  },
  {
    id: "onboard",
    title: "Onboarding 3 écrans",
    kind: "Image" as const,
    format: "PNG ×3",
    weight: "6 Mo",
    group: "Histoire App Store",
    mock: "onboard" as const,
    usage: "À montrer dans un carrousel « comment ça s’ouvre » : une question / une action par écran, jusqu’au geste utile. Pas un mode d’emploi.",
  },
  {
    id: "store-card",
    title: "Carte App Store",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "1 Mo",
    group: "App Store",
    mock: "store" as const,
    usage: "Slide CTA : icône + nom + bouton. Personne n’agit à la 1re expo — la 2e, l’icône est déjà familière.",
  },
  {
    id: "badge-dl",
    title: "Badge Download",
    kind: "Marque" as const,
    format: "PNG",
    weight: "80 Ko",
    group: "App Store",
    mock: "badge" as const,
    usage: "Uniquement sur la slide payoff / CTA. Jamais en overlay de la slide 1.",
  },
  {
    id: "broll-desk",
    title: "B-roll bureau vide",
    kind: "Vidéo" as const,
    format: "MP4 4K",
    weight: "180 Mo",
    group: "Footage pack",
    mock: "broll" as const,
    usage: "Plans de coupe. 4 s max. Pas de visage tiers. Le pack existe pour que tu n’aies pas à demander les fichiers en DM.",
  },
  {
    id: "capture-before",
    title: "Série Windows « avant »",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "12 Mo",
    group: "Footage pack",
    mock: "before" as const,
    usage: "Slideshow avant/après setup. Recadrage 9:16 déjà fait.",
  },
  {
    id: "capture-after",
    title: "Série Windows « après »",
    kind: "Image" as const,
    format: "PNG 1080×1920",
    weight: "9 Mo",
    group: "Footage pack",
    mock: "after" as const,
    usage: "Même série que l’avant. Ne pas mélanger les builds.",
  },
  {
    id: "hooks-fr",
    title: "Angles FR — septembre",
    kind: "Texte" as const,
    format: "TXT",
    weight: "8 Ko",
    group: "Angles",
    mock: "text" as const,
    usage: "Des angles, pas des répliques. « PC qui rame à 2 h » — tu écris tes mots. Une ligne à l’écran.",
  },
  {
    id: "hooks-en",
    title: "Angles EN — pack US",
    kind: "Texte" as const,
    format: "TXT",
    weight: "8 Ko",
    group: "Angles",
    mock: "text" as const,
    usage: "Pour Poster US. Anglais naturel, pas de traduction mot à mot.",
  },
  {
    id: "sons",
    title: "Sons TikTok suggérés",
    kind: "Audio" as const,
    format: "Liste",
    weight: "1 Ko",
    group: "Angles",
    mock: "audio" as const,
    usage: "Bibliothèque TikTok uniquement. Un son triste sur une blague de widgets, ça tue le récit.",
  },
  {
    id: "safezone",
    title: "Calque safe zone UI",
    kind: "Image" as const,
    format: "PNG transparent",
    weight: "420 Ko",
    group: "Footage pack",
    mock: "safe" as const,
    usage: "À superposer dans CapCut. UI TikTok + bouton + caption.",
  },
];

export const formatSpecs = [
  {
    title: "Cadre",
    items: ["9:16 · 1080×1920", "Photo Mode ou plan réel", "Safe zone : 140 px haut, 220 px bas", "Icône Process lisible en miniature"],
  },
  {
    title: "Rythme",
    items: ["Hook texte dès la 1re frame", "15 à 35 s en vidéo", "5 à 8 slides en carrousel", "Une seule idée, une action par slide"],
  },
  {
    title: "Son & texte",
    items: ["Son tendance en sous-mix (10–15 %)", "Texte grand, 4–7 mots", "Pas de pavé, pas de watermark tiers", "Caption = 1 ligne + 3 hashtags"],
  },
  {
    title: "CTA",
    items: ["Jamais en slide 1", "Idéal : notif slide 2, ou payoff slide 4", "Carte App Store + icône sur la slide CTA", "Code clipper à l’oral, une fois — pas de prix"],
  },
];

export const formatDonts = [
  "Avant/après corporel, claims santé, « PC gaming miracle », faux témoignages.",
  "Multi-comptes, achat de vues, bots, watermarks d’autres apps, commentaires achetés.",
  "VPN, spoof GPS, faux comptes US — voir Poster US.",
  "Musique hors bibliothèque TikTok, extraits Process non fournis.",
  "Pub dès la miniature. Concurrent nommé. Prix ou promo dans le carrousel.",
];

export const formatLibrary = [
  {
    id: "notif",
    title: "Notif dans l’histoire",
    tag: "Squelette A",
    why: "L’app arrive comme un événement du récit, pas comme une pub. Le format se répète hors d’une seule niche.",
    cta: "Slide 2 — notification / écran",
    hook: "Une phrase de vie. Zéro nom d’app.",
    frames: ["Hook vie", "Notif", "Geste", "Résultat", "Calme", "Bio"],
    tone: "Soir, lumière froide, texte court.",
  },
  {
    id: "payoff",
    title: "Payoff slide 4",
    tag: "Squelette B",
    why: "Le viewer reste pour l’histoire. Le produit est la solution, pas le sujet. C’est ce qui convertit, pas ce qui « parle de l’app ».",
    cta: "Slide 4 — icône + capture",
    hook: "Un problème précis (PC qui rame, notif, bureau).",
    frames: ["Problème", "Détail", "Tentative", "App", "Preuve", "Lien"],
    tone: "Comme un pote, pas une landing.",
  },
  {
    id: "guide",
    title: "Guide 4 minutes",
    tag: "Squelette C",
    why: "Liste utile, une action par slide. L’app n’apparaît qu’une fois la grille comprise — comme les 3 premières captures d’une fiche store.",
    cta: "Avant-dernière — carte store",
    hook: "« Ton PC n’est pas lent. »",
    frames: ["Hook", "Avant", "Geste 1", "Geste 2", "Après", "Store"],
    tone: "Net, typo grande, pas de collage « IA slop ».",
  },
];

export const researchChecklist = [
  { id: "month", label: "Posts des 30 derniers jours, pas un viral d’il y a un an" },
  { id: "repeat", label: "Le même squelette revient au moins 2 fois, éventuellement hors niche" },
  { id: "hook", label: "Hook + première image notés (mécanisme, pas la phrase)" },
  { id: "cta", label: "Position du CTA : pas slide 1, pas trop enterré" },
  { id: "comments", label: "Commentaires likés : est-ce qu’on demande « c’est quoi l’app ? »" },
  { id: "music", label: "Son aligné avec l’émotion, pas juste « trending »" },
];

export const packagingRules = [
  {
    title: "Icône",
    body: "Si elle ne se lit pas en miniature, le tap n’arrive jamais — ni sur le store, ni sur ta slide CTA. Une forme, une couleur, zéro détail minuscule.",
  },
  {
    title: "Les 3 premières captures",
    body: "Elles racontent une histoire, elles n’expliquent pas l’UI. 1. Le monde d’avant. 2. L’outil. 3. Le geste. C’est aussi l’ordre de tes slides utiles.",
  },
  {
    title: "Onboarding montré",
    body: "3 ou 4 écrans, une action, jusqu’au « ah ». Pas un tutoriel. Si tu montres l’app, tu montres l’issue, pas les menus.",
  },
  {
    title: "Paywall / prix",
    body: "Le prix vit sur la fiche, pas dans le carrousel. Dans le clip, tu amènes à la valeur. Tu ne fais pas de fausse urgence ni de math douteuse.",
  },
  {
    title: "Un écran, une action",
    body: "Chaque slide = une décision. Un tap de trop, le swipe s’arrête. Pareil dans la démo de l’app.",
  },
];

export const killRules = [
  {
    id: "doubler",
    title: "Doubler",
    threshold: "> ~10–15 k vues organiques",
    body: "Même squelette, autre scénario. Hook identique / personnage différent, ou émotion identique / contexte différent. Les winners deviennent des modèles.",
  },
  {
    id: "tuer",
    title: "Tuer",
    threshold: "< ~3 k, deux fois",
    body: "Pas de troisième essai « pour voir ». Le loser est une donnée. Tu changes de mécanisme, pas de couleur de texte.",
  },
  {
    id: "cta-mort",
    title: "CTA mort",
    threshold: "Vues OK, lien à plat ~48 h",
    body: "Souvent : CTA slide 1 (ça sent la pub) ou slide 6 (personne n’y arrive) ou icône absente. Tu bouges la slide, tu ne « testes pas plus fort ».",
  },
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

export const submitChecks = [
  { id: "cta", label: "CTA après le récit (pas slide 1)" },
  { id: "icon", label: "Icône Process lisible sur la slide payoff" },
  { id: "angle", label: "Mes mots, pas un script recité" },
  { id: "one", label: "Un seul compte déclaré, vues non achetées" },
];

export const automations = [
  {
    id: "recherche",
    title: "Veille formats (job 1)",
    summary: "Un job, un outil. La recherche ne vit pas dans le même chat que les images.",
    kind: "Rituel",
    steps: [
      "2× / semaine : 20 minutes de recherche TikTok, plus aimés, 30 jours.",
      "Tu notes hook, 1re image, CTA, commentaires — dans Format, pas dans un pavé Discord.",
      "Tu ne demandes pas à un modèle « 20 idées virales ». Tu lui donnes 5 posts réels et tu extrais le mécanisme.",
    ],
  },
  {
    id: "batch",
    title: "Batch hebdo 10–15",
    summary: "Une séance de prod, pas un carrousel par soir. Assez pour une semaine.",
    kind: "Rituel",
    steps: [
      "Dimanche : 10 à 15 concepts sur UN squelette qui a déjà tourné.",
      "Style visuel stable dans un carrousel ; scènes adaptées à l’histoire.",
      "Préfère des photos « trouvées » (bureau, UI, objets) à un rendu trop lisse. Le trop parfait scrolle comme une pub.",
    ],
  },
  {
    id: "cadence",
    title: "Cadence de publication",
    summary: "2 à 4 posts / jour, espacés de 3 h. Jamais 8 dumps d’un coup.",
    kind: "Rituel",
    steps: [
      "Tu as déjà le batch. Tu étales, tu ne crées pas le matin même.",
      "Poste à 7h, 12h, 18h heure du compte.",
      "Un même moment Process = un trim différent + un hook différent.",
    ],
  },
  {
    id: "split",
    title: "Jobs séparés",
    summary: "Recherche / angles / visuels / test du hook / distribution. Empiler tout dans un chat, tu ne sais plus quelle étape a cassé.",
    kind: "Système",
    steps: [
      "Angles : 15 lignes collables, pas un essai de stratégie.",
      "Visuels : mêmes consignes de visage / bureau / lumière d’une slide à l’autre.",
      "Avant de poster : 2 ou 3 hooks, tu gardes celui qui accroche en 1 s. Tu ne « valides » pas au feeling silencieux.",
    ],
  },
  {
    id: "kill",
    title: "Tuer / doubler",
    summary: "Les winners deviennent des modèles. Les losers deviennent des données.",
    kind: "Rituel",
    steps: [
      "Tu logs le format dans le tableau ci-dessous après 48 h.",
      "> 10–15 k : variations. < 3 k : mort. Lien à plat : tu bouges le CTA, tu ne relances pas le même.",
      "Dès qu’un squelette a gagné deux fois, tout le roster le tourne — pas toi tout seul à chasser le prochain truc.",
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
    summary: "YouTube Process + footage pack du portail. Rien d’autre.",
    kind: "Veille",
    steps: [
      "Un long format = 4 à 8 clips, pas 30 clones.",
      "Note le timestamp + l’angle en une phrase avant de monter.",
      "Si le kit n’a pas le plan, filme le tien. Ne vole pas un autre clipper.",
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
      "Aucun outil tiers « auto-post unofficial », aucune ferme de téléphones.",
    ],
  },
];

export const defaultKillBoard = [
  { id: "k1", name: "Notif 2 h du matin", views: 41200, decision: "doubler" as const },
  { id: "k2", name: "Guide widgets", views: 18800, decision: "doubler" as const },
  { id: "k3", name: "Pub slide 1 « télécharge »", views: 2100, decision: "tuer" as const },
  { id: "k4", name: "Privacy 60 s", views: 9600, decision: "tester" as const },
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
    body: "Un clip FR propre bat un clip EN bâclé. Passe par Format + SlideshowLab. Quand un format FR convertit (commentaires « c’est quoi l’app », pas seulement des likes), tu testes l’EN — sans changer d’IP.",
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
    a: "Au CPM sur les vues des clips validés. Indicatif démo : 0,35 € / 1 000 vues FR, 1,20 € / 1 000 vues US. Virement dès 50 € cumulés, une fois par mois. On vérifie le lien avant de payer. Stripe n’est pas branché — le bouton Paiements simule la demande.",
  },
  {
    q: "Je dois poster aux États-Unis ?",
    a: "Non. Le FR marche. L’US paie souvent mieux si le contenu est vraiment en anglais. Poster US explique le cadre légitime. VPN et contournement géo sont interdits.",
  },
  {
    q: "Je peux utiliser plusieurs comptes ?",
    a: "Non. Un clipper, un TikTok déclaré. Le multi-compte = exclusion et gains gelés. Pas de ferme, pas de SIM, pas de proxy « pour scaler ».",
  },
  {
    q: "Mes vues sont fausses / l’API TikTok ?",
    a: "Pas d’API TikTok pour l’instant. Tu colles le lien, un modo vérifie. Les chiffres du dashboard sont des données de démonstration locales.",
  },
  {
    q: "Je peux automatiser le post ?",
    a: "Les rituels (veille, batch, preset, tuer/doubler) oui. L’auto-post unofficial, les fermes de devices et les VPN, non. La file TikTok API est prévue plus tard, en OAuth officiel.",
  },
  {
    q: "Je commence par quelles idées ?",
    a: "Par aucun brainstorm magique. Tu trouves un format qui tourne déjà, tu casses le mécanisme, tu déclines 10 scénarios dans SlideshowLab. « Donne-moi 20 idées virales » produit 20 clips interchangeables.",
  },
  {
    q: "L’app doit être dès la première slide ?",
    a: "Non. Le produit est le payoff. Slide 1 = la vie. Notif en 2, ou solution en 4. Slide 1 pub = scroll. CTA trop tard = personne n’y arrive.",
  },
  {
    q: "Les commentaires « c’est quoi l’app » ?",
    a: "C’est le signal de conversion. Tu réponds avec ton code. Tu n’achètes pas d’engagement, tu n’inventes pas de témoignages.",
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

export type SlideRole = "hook" | "story" | "payoff" | "cta";

export type SlideshowSlide = {
  text: string;
  role: SlideRole;
};

export type SlideshowTemplate = {
  id: string;
  title: string;
  lang: "FR" | "EN";
  structure: string;
  mechanism: string;
  angle: string;
  ctaSlide: number;
  caption: string;
  hashtags: string;
  slides: SlideshowSlide[];
  variants: { label: string; slides: SlideshowSlide[] }[];
};

const role = (text: string, r: SlideRole): SlideshowSlide => ({ text, role: r });

export const slideshowTemplates: SlideshowTemplate[] = [
  {
    id: "notif",
    title: "Notif · slide 2",
    lang: "FR",
    structure: "Squelette A",
    mechanism: "Une scène de vie, puis l’app entre comme une notification — pas comme une pub.",
    angle: "Il est 2 h. Ton PC n’a pas fini de respirer.",
    ctaSlide: 1,
    caption: "J’ai arrêté de subir les notifs. Process Deblloat, lien en bio.",
    hashtags: "#setup #windows #debloat #process",
    slides: [
      role("2 h 14. L’écran s’allume tout seul.", "hook"),
      role("Une notif : 47 apps que tu n’as jamais ouvertes.", "cta"),
      role("Widgets, Copilot, pubs Start.", "story"),
      role("Tu n’optimises pas. Tu enlèves.", "story"),
      role("Bureau calme. Charge en 4 s.", "payoff"),
      role("Code PROCESS-CAMILLE, lien en bio.", "story"),
    ],
    variants: [
      {
        label: "Réunion à 9 h",
        slides: [
          role("Réunion dans 12 minutes. Le PC rame.", "hook"),
          role("Une pastille : « 31 processus en trop ».", "cta"),
          role("Teams + Edge + ce que tu n’as pas lancé.", "story"),
          role("Tu coupes. Tu ne « clean » pas magique.", "story"),
          role("Le dock a trois icônes. Ça suffit.", "payoff"),
          role("Process Deblloat. Lien en bio.", "story"),
        ],
      },
      {
        label: "Le portable du collège",
        slides: [
          role("Le PC du collège met 8 min à s’ouvrir.", "hook"),
          role("Message : « bloat préinstallé, 22 apps ».", "cta"),
          role("Candy, trials, antivirus doublon.", "story"),
          role("Une liste. On décoche. On redémarre.", "story"),
          role("Même machine. Autre rythme.", "payoff"),
          role("Lien en bio — Process Deblloat.", "story"),
        ],
      },
    ],
  },
  {
    id: "payoff",
    title: "Payoff · slide 4",
    lang: "FR",
    structure: "Squelette B",
    mechanism: "Le produit est la solution, pas le sujet. L’app arrive en slide 4.",
    angle: "Tu as déjà tout essayé sauf enlever.",
    ctaSlide: 3,
    caption: "Moins de bruit, pas un OS miracle. Process Deblloat.",
    hashtags: "#pc #minimalsetup #debloat #process",
    slides: [
      role("Ton PC n’est pas lent.", "hook"),
      role("Il est plein.", "story"),
      role("J’ai testé les « boosters ». Rien.", "story"),
      role("Process : on enlève. Point.", "cta"),
      role("7 gestes. 4 minutes. Bureau calme.", "payoff"),
      role("Lien en bio, code à l’écran.", "story"),
    ],
    variants: [
      {
        label: "Privacy, pas un VPN",
        slides: [
          role("Windows n’a pas besoin de tout savoir.", "hook"),
          role("Diag tracking au plus bas.", "story"),
          role("Pubs ciblées : off. Localisation apps : non.", "story"),
          role("Process Deblloat. Pas un VPN miracle.", "cta"),
          role("Moins de bruit. Même OS.", "payoff"),
          role("Lien en bio.", "story"),
        ],
      },
      {
        label: "Le dock à 3 icônes",
        slides: [
          role("42 icônes sur le bureau.", "hook"),
          role("Aucune n’est « temporaire ».", "story"),
          role("Une barre, une icône utile.", "story"),
          role("Le geste Process : poubelle, pas un thème.", "cta"),
          role("Moins à regarder = moins à subir.", "payoff"),
          role("Code clipper en bio.", "story"),
        ],
      },
    ],
  },
  {
    id: "guide",
    title: "Guide 4 min",
    lang: "FR",
    structure: "Squelette C",
    mechanism: "Liste utile. L’app n’apparaît que quand la grille est comprise — comme 3 captures d’une fiche store.",
    angle: "Sept gestes, pas un cours.",
    ctaSlide: 6,
    caption: "Ton PC n’est pas mort. Il est juste plein. Process Deblloat, lien en bio.",
    hashtags: "#windows11 #debloat #setup #process",
    slides: [
      role("Ton PC n’est pas lent.", "hook"),
      role("Il est plein.", "story"),
      role("Widgets, Copilot, pubs Start.", "story"),
      role("Télémétrie qui tourne à vide.", "story"),
      role("Apps que tu n’as jamais ouvertes.", "story"),
      role("7 gestes. 4 minutes.", "payoff"),
      role("Process Deblloat — lien en bio.", "cta"),
    ],
    variants: [
      {
        label: "Edge / Copilot",
        slides: [
          role("Edge, Copilot, widgets : off.", "hook"),
          role("Le Start n’est pas une vitrine.", "story"),
          role("Tu décoches. Tu ne « hack » pas.", "story"),
          role("Un navigateur. Un usage.", "story"),
          role("Le reste : paramètres, pas un pack pirate.", "story"),
          role("Bureau calme en 4 minutes.", "payoff"),
          role("Carte App Store. Icône Process.", "cta"),
        ],
      },
    ],
  },
  {
    id: "us-bloat",
    title: "Your PC is full",
    lang: "EN",
    structure: "Squelette B · EN",
    mechanism: "Same payoff logic, English you would actually say.",
    angle: "It’s not slow. It’s full.",
    ctaSlide: 3,
    caption: "Your PC isn’t slow. It’s full. Process Deblloat — link in bio.",
    hashtags: "#windows11 #debloat #minimalsetup #pc",
    slides: [
      role("Your PC isn’t slow.", "hook"),
      role("It’s full.", "story"),
      role("Widgets. Ads. Apps you never asked for.", "story"),
      role("Process Deblloat. We remove, we don’t “boost”.", "cta"),
      role("No magic FPS. Just less junk.", "payoff"),
      role("Link in bio.", "story"),
    ],
    variants: [
      {
        label: "2:14 AM",
        slides: [
          role("2:14 AM. The laptop wakes itself.", "hook"),
          role("31 apps you never opened.", "story"),
          role("You don’t need a new machine.", "story"),
          role("A notification: Process Deblloat.", "cta"),
          role("Four minutes. Quiet desktop.", "payoff"),
          role("Link in bio.", "story"),
        ],
      },
    ],
  },
];

export const weekBatchSlots = [
  "Lun · matin",
  "Lun · soir",
  "Mar · midi",
  "Mer · matin",
  "Mer · soir",
  "Jeu · midi",
  "Ven · matin",
  "Ven · soir",
  "Sam · après-midi",
  "Dim · batch suivant",
];

export const storageKeys = {
  onboarding: "process-clipping.onboarding",
  slideshow: "process-clipping.slideshow.v2",
  shadowban: "process-clipping.shadowban",
  automations: "process-clipping.automations",
  payouts: "process-clipping.payouts",
  posterUs: "process-clipping.poster-us",
  submissions: "process-clipping.submissions",
  formatNotes: "process-clipping.format-notes",
  killBoard: "process-clipping.kill-board",
  weekBatch: "process-clipping.week-batch",
  research: "process-clipping.research",
} as const;
