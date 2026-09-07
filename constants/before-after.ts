import type { BeforeAfterPair } from "@/types";

/**
 * Photos d'interventions réelles fournies par le client.
 *
 * Les visuels d'origine étaient des montages contenant déjà les deux états ;
 * ils ont été redécoupés par scripts/process-client-photos.mjs pour être
 * affichés côte à côte avec les étiquettes du site. Le ratio est celui du
 * fichier après recadrage : il pilote la hauteur de la ligne à l'écran.
 */
export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "turbine",
    title: "Turbine de soufflage",
    description:
      "La turbine accumule poussières et dépôts gras qui réduisent le débit d'air et rendent l'appareil plus bruyant.",
    ratio: 4 / 3,
    before: {
      src: "/images/gallery/avant-01-v2.webp",
      alt: "Turbine de soufflage encrassée avant nettoyage",
    },
    after: {
      src: "/images/gallery/apres-01-v2.webp",
      alt: "Turbine de soufflage propre après intervention Air Net Climatisation",
    },
  },
  {
    id: "echangeur",
    title: "Échangeur de l'unité intérieure",
    description:
      "Les ailettes colmatées bloquent les échanges thermiques : l'appareil refroidit moins et consomme davantage.",
    ratio: 983 / 388,
    before: {
      src: "/images/gallery/echangeur-avant.webp",
      alt: "Ailettes de l'échangeur couvertes de poussière et de moisissures avant nettoyage",
    },
    after: {
      src: "/images/gallery/echangeur-apres.webp",
      alt: "Ailettes de l'échangeur dégagées et propres après nettoyage",
    },
  },
  {
    id: "volets",
    title: "Volets de soufflage",
    description:
      "Les volets et le bord de l'échangeur concentrent les dépôts noirs à l'origine des odeurs à la mise en marche.",
    ratio: 907 / 380,
    before: {
      src: "/images/gallery/volets-avant.webp",
      alt: "Volets de soufflage et échangeur noircis par les dépôts avant nettoyage",
    },
    after: {
      src: "/images/gallery/volets-apres.webp",
      alt: "Volets de soufflage et échangeur nettoyés après intervention",
    },
  },
  {
    id: "grille",
    title: "Grille et filtre",
    description:
      "Un filtre saturé étouffe la ventilation. Après lavage, l'air circule de nouveau librement.",
    ratio: 585 / 763,
    before: {
      src: "/images/gallery/filtres-avant.webp",
      alt: "Grille et filtre de climatisation saturés d'encrassement avant nettoyage",
    },
    after: {
      src: "/images/gallery/filtres-apres.webp",
      alt: "Grille et filtre de climatisation propres après nettoyage",
    },
  },
];
