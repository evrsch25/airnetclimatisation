import type { City } from "@/types";

export const interventionZone = {
  department: "Bouches-du-Rhône",
  area: "Autour de l'étang de Berre",
  description:
    "Nous intervenons rapidement dans les Bouches-du-Rhône pour le nettoyage et la désinfection de votre climatisation.",
  extendedDescription:
    "Zones desservies : Bouches-du-Rhône, essentiellement tout autour de l'étang de Berre. Nous couvrons Port-de-Bouc, Martigues, Fos-sur-Mer, Istres, Marignane, Salon-de-Provence, Châteauneuf-les-Martigues, Vitrolles et les communes voisines.",
};

export const cities: City[] = [
  { name: "Martigues", slug: "martigues" },
  { name: "Fos-sur-Mer", slug: "fos-sur-mer" },
  { name: "Istres", slug: "istres" },
  { name: "Port-de-Bouc", slug: "port-de-bouc" },
  { name: "Salon-de-Provence", slug: "salon-de-provence" },
  { name: "Marignane", slug: "marignane" },
  { name: "Châteauneuf-les-Martigues", slug: "chateauneuf-les-martigues" },
  { name: "Vitrolles", slug: "vitrolles" },
];
