import type { Review } from "@/types";

/**
 * Avis laissés par les clients sur la fiche Google de l'entreprise.
 *
 * Les captures d'écran ne sont volontairement pas affichées : le texte est
 * repris dans les composants du site. Les noms d'auteurs ne sont indiqués
 * que lorsqu'ils figurent sur une capture fournie. Aucun balisage
 * Review / AggregateRating n'est ajouté pour l'instant.
 *
 * Les dates relatives des captures (« il y a une semaine ») ne sont pas
 * reprises : elles deviendraient fausses au fil du temps.
 */
export const reviews: Review[] = [
  {
    id: "avis-estelle",
    rating: 5,
    author: "Estelle Chalet",
    headline: "Excellent prix",
    text: "Je suis vraiment ravie de l'intervention d'Emmanuel pour le nettoyage de ma climatisation ! Il a fait un travail absolument remarquable, avec beaucoup de sérieux, de soin et de professionnalisme. La clim est impeccable, on voit vraiment la différence avant/après ! Emmanuel est très consciencieux, sympathique et prend le temps de faire les choses correctement. Il a un équipement vraiment pro, ne salit rien, et fait plus que nettoyer à l'eau, il désinfecte et nettoie tout ! Je suis plus que satisfaite du résultat et je recommande Emmanuel à 100 % ! Vous pouvez faire appel à lui les yeux fermés. Un grand merci pour ce super travail !",
  },
  {
    id: "avis-marion",
    rating: 5,
    author: "Marion Sediki",
    text: "Je recommande à 100 % Emmanuel ! Son travail est sérieux, efficace et soigné. Merci pour votre travail, nous referons appel à vous.",
  },
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
