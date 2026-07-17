import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    id: "frequency",
    question: "À quelle fréquence faut-il faire nettoyer sa climatisation ?",
    answer:
      "Il est conseillé de faire un entretien complet au moins une fois par an. Pour les logements avec animaux, allergies ou usage intensif, deux interventions par an peuvent être recommandées.",
  },
  {
    id: "signs",
    question: "Quels sont les signes qu'une climatisation a besoin d'être nettoyée ?",
    answer:
      "Les signes les plus courants sont : mauvaises odeurs, baisse de performance, air moins frais, bruits inhabituels, apparition de poussières ou moisissures, et augmentation de la consommation électrique.",
  },
  {
    id: "air-quality",
    question: "Le nettoyage de climatisation améliore-t-il la qualité de l'air ?",
    answer:
      "Oui. Le nettoyage élimine les bactéries, poussières, pollens et moisissures présents dans l'unité intérieure, ce qui améliore nettement la qualité de l'air respiré.",
  },
  {
    id: "difference",
    question: "Quelle est la différence entre nettoyage et désinfection ?",
    answer:
      "Le nettoyage retire les saletés visibles et les dépôts. La désinfection élimine les bactéries, germes et micro-organismes grâce à des produits spécifiques.",
  },
  {
    id: "duration",
    question: "Combien de temps dure une intervention ?",
    answer:
      "Selon le type d'installation, une intervention dure généralement environ 2 heures.",
  },
  {
    id: "brands",
    question: "Intervenez-vous sur toutes les marques de climatisation ?",
    answer:
      "Oui, nous intervenons sur la majorité des marques et modèles : split, multi-split et pompe à chaleur air/air.",
  },
  {
    id: "consumption",
    question: "Le nettoyage permet-il de réduire la consommation électrique ?",
    answer:
      "Oui. Une climatisation encrassée fonctionne plus difficilement et consomme davantage d'énergie. Un appareil propre est plus performant et plus économique.",
  },
  {
    id: "safe-products",
    question: "Utilisez-vous des produits sans danger ?",
    answer:
      "Oui, nous utilisons des produits professionnels adaptés à la désinfection des climatisations, respectueux des occupants et conformes aux normes en vigueur.",
  },
  {
    id: "after-use",
    question: "Peut-on utiliser la climatisation immédiatement après l'intervention ?",
    answer:
      "Oui, dans la plupart des cas l'utilisation peut reprendre rapidement après notre passage.",
  },
  {
    id: "professionals",
    question: "Faites-vous l'entretien des climatisations pour les professionnels ?",
    answer:
      "Oui, nous intervenons aussi bien chez les particuliers que dans les bureaux, commerces, restaurants, cabinets médicaux et locaux professionnels.",
  },
  {
    id: "price",
    question: "Quel est le prix d'un nettoyage de climatisation ?",
    answer:
      "Le tarif dépend du nombre d'unités, du type d'appareil et du niveau d'encrassement. Un devis personnalisé peut être réalisé gratuitement.",
  },
  {
    id: "mandatory",
    question: "Est-ce obligatoire d'entretenir une climatisation ?",
    answer:
      "L'entretien est fortement recommandé pour des raisons sanitaires, énergétiques et pour préserver les performances de l'appareil. Certaines installations professionnelles ont également des obligations réglementaires.",
  },
  {
    id: "free-quote",
    question: "Travaillez-vous avec des devis gratuits ?",
    answer: "Oui, nous proposons des devis gratuits et sans engagement.",
  },
];

/** 6 premières questions affichées sur l'accueil */
export const homeFaqIds = [
  "frequency",
  "signs",
  "air-quality",
  "difference",
  "duration",
  "brands",
];

/** Questions restantes affichées sur la page Prestations */
export const prestationsFaqIds = [
  "consumption",
  "safe-products",
  "after-use",
  "professionals",
  "price",
  "mandatory",
  "free-quote",
];

export function getFaqByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => faqItems.find((item) => item.id === id))
    .filter((item): item is FaqItem => item !== undefined);
}
