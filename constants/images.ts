/**
 * Référence centralisée de toutes les images du site.
 * Déposer les fichiers aux chemins indiqués (format WebP recommandé, JPG accepté).
 */
export const images = {
  logo: {
    path: "/logos/logo.png",
    alt: "Logo Air Net Climatisation — Nettoyage, entretien et performance",
  },

  hero: {
    home: {
      path: "/images/hero/accueil.webp",
      alt: "Technicien nettoyant une climatisation — Air Net Climatisation",
      fallback: "/images/placeholders/hero-climatisation.svg",
    },
    prestations: {
      path: "/images/hero/prestations.webp",
      alt: "Intervention de nettoyage et désinfection de climatisation",
      fallback: "/images/placeholders/prestations.svg",
    },
    whyUs: {
      path: "/images/hero/pourquoi-nous.webp",
      alt: "Professionnel Air Net Climatisation lors d'une intervention",
      fallback: "/images/placeholders/pourquoi-nous.svg",
    },
    zone: {
      path: "/images/hero/zone-intervention.webp",
      alt: "Zone d'intervention Air Net Climatisation — Bouches-du-Rhône",
      fallback: "/images/placeholders/zone.svg",
    },
    contact: {
      path: "/images/hero/contact.webp",
      alt: "Contactez Air Net Climatisation pour un devis gratuit",
      fallback: "/images/placeholders/contact.svg",
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

  og: {
    path: "/images/og/default.jpg",
    alt: "Air Net Climatisation — Nettoyage & désinfection de climatisation",
    fallback: "/images/og/default.svg",
  },
} as const;

/** Retourne le chemin image ou le placeholder si la photo n'est pas encore déposée */
export function getImagePath(
  primary: string,
  fallback?: string | null,
): string {
  return fallback ?? primary;
}
