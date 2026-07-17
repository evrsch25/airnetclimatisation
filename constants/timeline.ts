import type { TimelineStep } from "@/types";

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Mise en sécurité de l'installation",
    description: [
      "Avant toute intervention, nous sécurisons l'installation pour garantir une intervention propre et sécurisée.",
    ],
    listItems: [
      "Coupure de l'alimentation électrique",
      "Protection des surfaces et du mobilier",
      "Contrôle visuel général des unités intérieures et extérieures",
      "Vérification de bon fonctionnement",
    ],
  },
  {
    id: 2,
    title: "Nettoyage des filtres",
    description: [
      "Les filtres sont retirés, aspirés, lavés à l'eau tiède, séchés et remontés, afin d'améliorer la qualité de l'air, le débit de ventilation et les performances énergétiques.",
    ],
  },
  {
    id: 3,
    title: "Nettoyage de l'évaporateur",
    description: [
      "L'évaporateur est nettoyé avec un produit spécifique, afin d'éliminer poussières, bactéries, moisissures et résidus accumulés.",
      "Cette opération améliore les échanges thermiques et limite les odeurs.",
    ],
  },
  {
    id: 4,
    title: "Nettoyage de la turbine de soufflage",
    description: [
      "La turbine de ventilation peut s'encrasser avec des poussières, de l'humidité et des dépôts gras.",
      "Le nettoyage permet une meilleure circulation de l'air, un fonctionnement plus silencieux et une réduction de consommation.",
    ],
  },
  {
    id: 5,
    title: "Contrôle et nettoyage des condensats",
    description: [
      "Le technicien vérifie le bac à condensats, l'évacuation des eaux et la pompe de relevage si présente.",
      "Cette étape évite les fuites d'eau, les débordements et les risques de moisissures.",
    ],
  },
  {
    id: 6,
    title: "Nettoyage de l'unité extérieure",
    description: [
      "L'unité extérieure est également nettoyée pour garantir un fonctionnement optimal.",
    ],
    listItems: [
      "Retrait des feuilles et poussières",
      "Nettoyage de l'échangeur",
      "Contrôle de la ventilation",
      "Dégagement des obstacles autour du groupe extérieur",
    ],
  },
  {
    id: 7,
    title: "Remise en service et vérifications",
    description: ["Après remontage, nous effectuons les vérifications finales."],
    listItems: [
      "Remise sous tension",
      "Test du mode chauffage et climatisation",
      "Vérification du débit d'air",
      "Contrôle du bon écoulement des condensats",
      "Vérification du fonctionnement général",
    ],
  },
];
