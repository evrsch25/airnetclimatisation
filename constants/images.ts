/**
 * Référence centralisée de toutes les images du site.
 * Déposer les fichiers aux chemins indiqués (format WebP recommandé, JPG accepté).
 */
export const images = {
  logo: {
    /** Version carrée d'origine — utilisée pour les données structurées */
    path: "/logos/logo.png",
    /** Reconstruit à partir du logo carré par scripts/build-assets.mjs */
    horizontalPath: "/logos/logo-horizontal.png",
    /** Pictogramme seul, détouré en cercle — lisible sur fond sombre */
    emblemPath: "/logos/logo-emblem.png",
    alt: "Logo Air Net Climatisation — Nettoyage, entretien et performance",
  },

  hero: {
    home: {
      path: "/images/hero/accueil.webp",
      alt: "Technicien Air Net Climatisation nettoyant une climatisation murale",
      fallback: null,
    },
    prestations: {
      path: "/images/hero/prestations.webp",
      alt: "Filtre encrassé et produits professionnels de désinfection de climatisation",
      fallback: null,
    },
    whyUs: {
      path: "/images/hero/pourquoi-nous.webp",
      alt: "Professionnel Air Net Climatisation lors d'une intervention",
      fallback: "/images/placeholders/pourquoi-nous.svg",
    },
    zone: {
      path: "/images/hero/zone-intervention.webp",
      alt: "Technicien Air Net Climatisation arrivant chez un client dans les Bouches-du-Rhône",
      fallback: null,
    },
    contact: {
      path: "/images/hero/contact.webp",
      alt: "Technicien Air Net Climatisation conseillant une cliente à son domicile",
      fallback: null,
    },
  },

  beforeAfter: {
    before: {
      path: "/images/gallery/avant-01.webp",
      alt: "Climatisation encrassée avant nettoyage",
      fallback: null,
    },
    after: {
      path: "/images/gallery/apres-01.webp",
      alt: "Climatisation propre après intervention Air Net Climatisation",
      fallback: null,
    },
  },

  /** Visuels de marque fournis par le client */
  brand: {
    slogan: {
      path: "/images/brand/slogan-aspirateur.png",
      alt: "Votre air mérite plus qu'un simple coup d'aspirateur",
      fallback: null,
    },
    airPlusPur: {
      path: "/images/brand/air-plus-pur.png",
      alt: "Air Net Climatisation — Un air plus pur, un confort au quotidien",
      fallback: null,
    },
  },

  og: {
    /** 1200x630 imposé par Facebook, LinkedIn et WhatsApp — généré par scripts/build-assets.mjs */
    path: "/images/og/default.jpg",
    alt: "Air Net Climatisation — Nettoyage & désinfection de climatisation",
    fallback: null,
  },
} as const;

/** Retourne le chemin image ou le placeholder si la photo n'est pas encore déposée */
export function getImagePath(
  primary: string,
  fallback?: string | null,
): string {
  return fallback ?? primary;
}
