import type { Review } from "@/types";

/**
 * Avis laissés par les clients sur la fiche Google de l'entreprise.
 *
 * Les captures d'écran ne sont volontairement pas affichées : le texte est
 * repris tel quel dans les composants du site. Les captures transmises ne
 * mentionnent pas les auteurs, aucun nom n'est donc inventé ni affiché — et
 * pour la même raison aucun balisage Review / AggregateRating n'est ajouté,
 * Google imposant un auteur identifiable et vérifiable.
 *
 * Les dates relatives des captures (« il y a 5 jours ») ne sont pas reprises :
 * elles deviendraient fausses au fil du temps.
 */
export const reviews: Review[] = [
  {
    id: "avis-1",
    rating: 5,
    headline: "Excellent prix",
    text: "Travail nickel et très pro ! Travail soigné et propre ! Je recommande !",
  },
  {
    id: "avis-2",
    rating: 5,
    text: "Travail consciencieux et pro ! Vous pouvez y aller en toute confiance ! Merci pour votre prestation, surtout pour une climatisation qui n'avait jamais été nettoyée jusqu'à présent !",
  },
  {
    id: "avis-3",
    rating: 5,
    text: "Très satisfaite de l'intervention d'Air Net Climatisation pour le nettoyage de ma climatisation. Un travail minutieux et soigné, effectué avec sérieux. Technicien ponctuel, sympathique et respectueux des lieux. Résultat impeccable, je recommande sans hésitation !",
  },
  {
    id: "avis-4",
    rating: 5,
    text: "Je recommande à 100 % Emmanuel ! Son travail est sérieux, efficace et soigné. Merci pour votre travail, nous referons appel à vous.",
  },
  {
    id: "avis-5",
    rating: 5,
    headline: "Excellent prix",
    text: "Super ! Professionnel, travail consciencieux, propre et net. Je recommande vivement !",
  },
  {
    id: "avis-6",
    rating: 5,
    text: "Très satisfaite de l'entretien et du nettoyage de mon climatiseur, travail propre et soigné, je recommande vivement ce professionnel.",
  },
  {
    id: "avis-7",
    rating: 5,
    text: "Un professionnel consciencieux, propre et très appliqué. Je recommande les yeux fermés !",
  },
];

export const reviewsSummary = {
  average: "5,0",
  count: reviews.length,
  source: "avis Google",
};
