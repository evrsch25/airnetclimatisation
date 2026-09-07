import type { PricingRow, PricingNote, DiscountRule, PaymentMethod } from "@/types";

export const pricingRows: PricingRow[] = [
  {
    id: "mono-split",
    name: "Forfait PAC air/air mono-split",
    detail:
      "Nettoyage et désinfection d'une unité intérieure et d'une unité extérieure",
    price: "135 € puis dégressif si plusieurs équipements*",
  },
  {
    id: "multi-split",
    name: "Forfait PAC air/air multi-split",
    detail:
      "Intervention comprenant une unité intérieure, une unité extérieure, puis ajout d'unités intérieures supplémentaires selon la configuration",
    price:
      "135 € pour la base + 65 € pour le premier split supplémentaire, puis tarif dégressif de 5 € par split supplémentaire",
  },
];

export const pricingNotes: PricingNote[] = [
  {
    text: "Les tarifs ci-dessus sont susceptibles d'évoluer à la baisse comme à la hausse selon l'état de l'installation et l'accessibilité.",
  },
  {
    text: "En cas d'intervention sur plusieurs installations mono-split, un forfait dégressif est appliqué selon les modalités ci-dessous.",
  },
];

/** Forfaits appliqués lorsque plusieurs mono-split sont nettoyés lors d'une même intervention */
export const discountRules: DiscountRule[] = [
  { count: "2 mono-split", discount: "250 €" },
  { count: "3 mono-split", discount: "350 €" },
  { count: "4 mono-split", discount: "430 €" },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "carte", label: "Carte bleue", icon: "CreditCard" },
  { id: "virement", label: "Virement bancaire", icon: "Landmark" },
];

export const paymentNote =
  "Le règlement s'effectue à l'issue de l'intervention, par carte bleue ou par virement bancaire.";
