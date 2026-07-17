import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Air Net Climatisation",
  legalName: "AIR NET CLIMATISATION",
  slogan: "Votre air mérite plus qu'un simple coup d'aspirateur.",
  description:
    "Nettoyage, entretien et désinfection de climatisation dans les Bouches-du-Rhône. Devis gratuit, intervention professionnelle autour de l'étang de Berre.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
};

export const heroContent = {
  title: "Nettoyage & désinfection de climatisation",
  subtitle:
    "Respirez un air plus sain, retrouvez les performances de votre installation et réduisez votre consommation d'énergie.",
  intro:
    "Chez Air Net Climatisation, nous proposons un nettoyage en profondeur et une désinfection complète de votre installation pour améliorer durablement votre confort, préserver votre matériel et assainir l'air que vous respirez au quotidien.",
  closing:
    "Faites confiance à Air Net Climatisation pour redonner à votre installation toute sa propreté, ses performances et la qualité d'air que vous attendez !",
};

export const pricingIntro =
  "Chez Air Net Climatisation, nous jouons la carte de la transparence en matière de tarifs. Nos prix sont clairement annoncés dès le départ, afin que vous sachiez exactement à quoi vous attendre. Pas de mauvaises surprises : nous privilégions une relation de confiance avec nos clients grâce à une politique tarifaire simple, claire et honnête.";

export const devisGratuitMention = "Devis gratuit sur demande";
