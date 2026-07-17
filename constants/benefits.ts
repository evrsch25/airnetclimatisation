import type { Benefit, WhyMaintainSection } from "@/types";

export const heroBenefits: Benefit[] = [
  {
    id: "performance",
    title: "Une meilleure performance",
    description: "Retrouvez l'efficacité optimale de votre appareil.",
    icon: "Gauge",
  },
  {
    id: "consumption",
    title: "Baisse de consommation",
    description: "Réduisez votre facture d'électricité.",
    icon: "Zap",
  },
  {
    id: "lifespan",
    title: "Durée de vie prolongée",
    description: "Préservez votre installation dans le temps.",
    icon: "Clock",
  },
  {
    id: "healthy-air",
    title: "Un air plus sain",
    description: "Respirez un air assaini au quotidien.",
    icon: "Wind",
  },
  {
    id: "breathing",
    title: "Meilleure qualité de respiration",
    description: "Un confort respiratoire amélioré pour toute la famille.",
    icon: "Heart",
  },
  {
    id: "allergies",
    title: "Réduction des allergies",
    description: "Limitez les odeurs, bactéries et moisissures.",
    icon: "ShieldCheck",
  },
];

export const whyMaintainSections: WhyMaintainSection[] = [
  {
    id: "air-quality",
    title: "Qualité de l'air",
    content: [
      "Avec le temps, les filtres et l'unité intérieure accumulent poussières, bactéries, moisissures, mauvaises odeurs, graisses et impuretés.",
      "Une climatisation encrassée peut diffuser des particules et des odeurs désagréables dans tout votre logement ou votre local professionnel. Un nettoyage complet permet de retrouver un air plus sain et un meilleur confort au quotidien.",
    ],
    listItems: ["Poussières", "Bactéries", "Moisissures", "Mauvaises odeurs", "Graisses et impuretés"],
  },
  {
    id: "odors",
    title: "Éviter les mauvaises odeurs",
    content: [
      "L'humidité et les dépôts présents dans votre installation favorisent le développement des bactéries et des champignons. Résultat : des odeurs de renfermé ou d'humidité apparaissent dès la mise en marche.",
      "Une désinfection adaptée permet d'y remédier efficacement.",
    ],
  },
  {
    id: "consumption",
    title: "Réduire la consommation électrique",
    content: [
      "Une climatisation encrassée force davantage le ventilateur, le compresseur et les échangeurs.",
      "En retrouvant un fonctionnement plus fluide, votre installation peut gagner en efficacité et limiter les surconsommations inutiles. C'est un entretien utile pour votre confort comme pour votre budget.",
    ],
    listItems: [
      "Une consommation plus élevée",
      "Une facture d'électricité plus importante",
      "Une baisse des performances",
      "Moins de froid ou moins de chaleur selon le mode utilisé",
    ],
  },
  {
    id: "breakdowns",
    title: "Éviter les pannes coûteuses",
    content: [
      "L'encrassement peut provoquer des fuites d'eau, du gel de l'unité, une surchauffe, une baisse de puissance ou une panne du compresseur.",
      "Un entretien régulier aide à prévenir l'encrassement excessif et peut éviter des réparations lourdes et coûteuses. Mieux vaut entretenir que subir une panne au mauvais moment.",
    ],
    listItems: [
      "Fuite d'eau",
      "Gel de l'unité",
      "Surchauffe",
      "Baisse de puissance",
      "Panne du compresseur",
    ],
  },
  {
    id: "lifespan",
    title: "Allonger la durée de vie",
    content: [
      "Comme tout équipement, une climatisation bien entretenue dure plus longtemps, fonctionne mieux et conserve de meilleures performances au fil du temps.",
    ],
  },
];
