import type { PricingRow, PricingNote, DiscountRule } from "@/types";

export const pricingRows: PricingRow[] = [
  {
    id: "mono-split",
    name: "Forfait PAC air/air mono-split",
    detail:
      "Nettoyage et désinfection d'une unité intérieure et d'une unité extérieure",
    price: "150 € puis dégressif si plusieurs équipements*",
  },
  {
    id: "multi-split",
    name: "Forfait PAC air/air multi-split",
    detail:
      "Intervention comprenant une unité intérieure, une unité extérieure, puis ajout d'unités intérieures supplémentaires selon la configuration",
    price:
      "150 € pour la base + 65 € pour le premier split supplémentaire, puis tarif dégressif de 5 € par split supplémentaire",
  },
  {
    id: "deplacement",
    name: "Déplacement au-delà de 20 km",
    detail: "Majoration forfaitaire appliquée pour les interventions situées à plus de 20 km",
    price: "20 €",
  },
];

export const pricingNotes: PricingNote[] = [
  {
    text: "Les tarifs ci-dessus sont susceptibles d'évoluer à la baisse comme à la hausse selon l'état de l'installation et l'accessibilité.",
  },
  {
    text: "En cas d'intervention sur plusieurs installations mono-split, une remise dégressive est appliquée selon les modalités ci-dessous.",
  },
];

export const discountRules: DiscountRule[] = [
  { count: "2 mono-split", discount: "10 % de remise sur le deuxième forfait PAC air/air mono-split" },
  {
    count: "3 mono-split",
    discount: "15 % de remise sur le deuxième et troisième forfait PAC air/air mono-split",
  },
  {
    count: "4 mono-split et plus",
    discount:
      "15 % de remise sur le deuxième et troisième forfait, puis 20 % sur les forfaits suivants",
  },
];
