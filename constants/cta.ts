import type { CtaConfig } from "@/types";
import { contactInfo } from "@/constants/contact";

export const ctaConfig: CtaConfig = {
  primary: {
    label: "Demander un devis",
    href: "/contact",
  },
  secondary: {
    label: "Appeler maintenant",
    href: `tel:${contactInfo.phone}`,
  },
};

export const reassuranceItems = [
  "Devis gratuit",
  "Sans engagement",
  "Intervention professionnelle",
];

/** Bandeau de réassurance affiché sous le hero de la page d'accueil */
export const heroReassurance = [
  { icon: "ShieldCheck", title: "Travail soigné", subtitle: "Intervention propre et sécurisée" },
  { icon: "SprayCan", title: "Produits professionnels", subtitle: "Adaptés et conformes aux normes" },
  { icon: "MapPin", title: "Secteur local", subtitle: "Bouches-du-Rhône, autour de l'étang de Berre" },
  { icon: "BadgeEuro", title: "Tarifs transparents", subtitle: "Annoncés dès le départ" },
] as const;

export const audienceBanner = {
  audience: "Particuliers & professionnels",
  claim: "Au service de votre confort, toute l'année",
};
