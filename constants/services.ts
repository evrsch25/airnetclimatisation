import type { Service } from "@/types";

export const servicesIntro =
  "Chaque intervention est adaptée à votre installation pour garantir un nettoyage rigoureux, une désinfection efficace et une remise en service dans les meilleures conditions. Nous intervenons sur les splits, multi-splits et pompes à chaleur air/air.";

export const services: Service[] = [
  {
    id: "split",
    title: "Split",
    description:
      "Nettoyage et désinfection complet de votre installation split, unité intérieure et extérieure.",
    includes: [
      "Nettoyage de l'unité intérieure",
      "Nettoyage de l'unité extérieure",
      "Désinfection complète",
      "Contrôle des condensats",
      "Remise en service et vérifications",
    ],
    benefits: [
      "Air plus sain",
      "Performances retrouvées",
      "Réduction de la consommation",
    ],
    audience: "Particuliers et professionnels",
    icon: "AirVent",
  },
  {
    id: "multi-split",
    title: "Multi-split",
    description:
      "Intervention adaptée aux installations multi-split avec plusieurs unités intérieures connectées à une unité extérieure.",
    includes: [
      "Nettoyage de chaque unité intérieure",
      "Nettoyage de l'unité extérieure",
      "Désinfection complète",
      "Contrôle du bon fonctionnement",
    ],
    benefits: [
      "Entretien complet de l'ensemble",
      "Tarif dégressif selon le nombre d'unités",
    ],
    audience: "Logements et locaux avec plusieurs pièces climatisées",
    icon: "Layers",
  },
  {
    id: "pac-air-air",
    title: "Pompe à chaleur air/air",
    description:
      "Entretien complet de votre pompe à chaleur air/air pour un fonctionnement optimal toute l'année.",
    includes: [
      "Nettoyage unité intérieure",
      "Nettoyage unité extérieure",
      "Désinfection",
      "Contrôle chauffage et climatisation",
    ],
    benefits: [
      "Performances énergétiques optimisées",
      "Durée de vie prolongée",
    ],
    audience: "Particuliers et professionnels",
    icon: "Thermometer",
  },
];
