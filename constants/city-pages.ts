import type { CityPage } from "@/types";

/**
 * Contenu propre à chaque commune. Chaque page doit avoir un texte réellement
 * différent : dupliquer un même paragraphe en changeant le nom de la ville est
 * pénalisé par Google.
 *
 * Les distances sont des estimations routières depuis Port-de-Bouc, à faire
 * valider par le client. Elles déterminent l'affichage de la majoration
 * déplacement de 20 € prévue dans la grille tarifaire (au-delà de 20 km).
 */
export const cityPages: CityPage[] = [
  {
    slug: "port-de-bouc",
    name: "Port-de-Bouc",
    postalCode: "13110",
    distanceKm: 0,
    intro:
      "Port-de-Bouc est notre commune d'implantation. Nous y intervenons dans les délais les plus courts, sans majoration de déplacement.",
    context: [
      "Située entre le golfe de Fos et l'étang de Berre, Port-de-Bouc combine un habitat pavillonnaire, des immeubles collectifs et des locaux professionnels le long du port. Les installations que nous y rencontrons vont du mono-split de studio au multi-split de maison familiale.",
      "La proximité immédiate de la mer expose les unités extérieures aux embruns salins, qui accélèrent l'encrassement des ailettes de l'échangeur et favorisent la corrosion. C'est l'une des raisons pour lesquelles un nettoyage annuel du groupe extérieur est particulièrement utile ici.",
    ],
    areas: ["Centre-ville", "Les Aigues Douces", "La Lèque", "Saint-Jean", "Les Comtes"],
    localAngle: {
      title: "Notre base d'intervention",
      text: "Notre siège est installé à Port-de-Bouc. Pour les habitants de la commune, aucun frais de déplacement n'est appliqué et nous pouvons souvent proposer un créneau très rapidement.",
    },
  },
  {
    slug: "martigues",
    name: "Martigues",
    postalCode: "13500",
    distanceKm: 6,
    intro:
      "Nous intervenons dans tous les quartiers de Martigues, du centre historique aux secteurs résidentiels de la côte bleue.",
    context: [
      "Martigues présente une grande variété d'habitat : maisons de ville anciennes autour des canaux de L'Île et de Jonquières, lotissements récents à Croix-Sainte et Saint-Jean, villas en bord de mer à Carro et La Couronne. Chaque configuration demande une approche différente, notamment pour l'accès au groupe extérieur.",
      "Les logements proches du littoral subissent l'air salin, tandis que les secteurs situés sous les vents de la zone industrielle de Lavéra reçoivent davantage de poussières en suspension. Dans les deux cas, les filtres et l'échangeur s'encrassent plus vite que la moyenne.",
    ],
    areas: ["L'Île", "Jonquières", "Ferrières", "Croix-Sainte", "Carro", "La Couronne", "Saint-Pierre"],
    localAngle: {
      title: "Habitat ancien et accès contraints",
      text: "Dans les maisons de ville du centre historique, les groupes extérieurs sont souvent installés en cour intérieure ou en façade sur rue. Nous adaptons notre protection des surfaces et notre matériel à ces accès étroits.",
    },
  },
  {
    slug: "fos-sur-mer",
    name: "Fos-sur-Mer",
    postalCode: "13270",
    distanceKm: 10,
    intro:
      "Nettoyage et désinfection de climatisation à Fos-sur-Mer, pour les particuliers comme pour les locaux professionnels de la zone portuaire.",
    context: [
      "Fos-sur-Mer associe un village perché, de vastes secteurs pavillonnaires et l'une des plus grandes zones industrialo-portuaires d'Europe. Cette double réalité se retrouve dans les installations : climatisation résidentielle classique d'un côté, équipements de bureaux et de locaux techniques de l'autre.",
      "L'environnement industriel et la proximité du golfe génèrent un empoussièrement supérieur à la moyenne. Les unités extérieures exposées plein sud accumulent poussières et dépôts salins, ce qui dégrade les échanges thermiques et fait grimper la consommation.",
    ],
    areas: ["Le village", "Les Carabins", "Saint-Gervais", "La Cavaresse"],
    localAngle: {
      title: "Particuliers et professionnels",
      text: "Nous intervenons aussi bien à domicile que dans les bureaux, commerces et locaux professionnels du secteur. Un devis adapté au nombre d'unités est établi gratuitement.",
    },
  },
  {
    slug: "istres",
    name: "Istres",
    postalCode: "13800",
    distanceKm: 17,
    intro:
      "Entretien de climatisation à Istres, des quartiers autour de l'étang de l'Olivier aux lotissements récents.",
    context: [
      "Istres s'est fortement développée ces dernières décennies, avec de nombreux lotissements équipés dès la construction de systèmes multi-splits. Ces installations récentes sont souvent négligées : parce qu'elles sont neuves, on suppose à tort qu'elles n'ont pas besoin d'entretien avant plusieurs années.",
      "Dans les faits, un multi-split accumule les dépôts dans chacune de ses unités intérieures. Notre forfait multi-split est justement conçu pour ces configurations, avec un tarif dégressif à partir du deuxième split.",
    ],
    areas: ["Centre-ville", "Le Prépaou", "Entressen", "Rassuen", "Trigance"],
    localAngle: {
      title: "Beaucoup de multi-splits",
      text: "Les maisons récentes du secteur sont fréquemment équipées de trois à cinq unités intérieures. Le tarif dégressif s'applique dès le deuxième split, ce qui rend l'entretien complet nettement plus abordable qu'on ne l'imagine.",
    },
  },
  {
    slug: "chateauneuf-les-martigues",
    name: "Châteauneuf-les-Martigues",
    postalCode: "13220",
    distanceKm: 20,
    intro:
      "Nous intervenons à Châteauneuf-les-Martigues et à La Mède pour le nettoyage complet de votre climatisation.",
    context: [
      "Coincée entre l'étang de Berre et la chaîne de la Nerthe, la commune bénéficie d'un ensoleillement important et d'étés marqués, ce qui se traduit par un usage intensif de la climatisation de juin à septembre.",
      "Le secteur de La Mède, en bordure d'étang, cumule humidité ambiante et proximité industrielle. L'humidité favorise le développement de bactéries et de moisissures dans le bac à condensats et sur l'échangeur, ce qui explique les odeurs de renfermé à la mise en marche.",
    ],
    areas: ["Centre du village", "La Mède", "Les Ventrons", "Notre-Dame"],
    localAngle: {
      title: "Humidité et mauvaises odeurs",
      text: "Les logements proches de l'étang sont particulièrement concernés par les odeurs à la remise en route. Notre désinfection cible précisément l'échangeur, la turbine et le circuit de condensats, à l'origine de ces odeurs.",
    },
  },
  {
    slug: "marignane",
    name: "Marignane",
    postalCode: "13700",
    distanceKm: 28,
    intro:
      "Nettoyage de climatisation à Marignane, pour les logements comme pour les bureaux du secteur aéroportuaire.",
    context: [
      "Marignane concentre une importante activité tertiaire autour de l'aéroport Marseille-Provence et de ses zones d'activités. Bureaux, commerces et cabinets y sont massivement climatisés, souvent avec plusieurs unités intérieures raccordées à un même groupe.",
      "Côté résidentiel, la commune compte de nombreux pavillons et copropriétés des années 1970 à 1990, dont les climatisations installées après coup demandent une attention particulière à l'évacuation des condensats.",
    ],
    areas: ["Centre-ville", "Les Florides", "Saint-Pierre", "Estaque-Pinède", "Les Cadeneaux"],
    localAngle: {
      title: "Locaux professionnels",
      text: "Pour les bureaux, commerces, cabinets médicaux et restaurants, la qualité de l'air est un enjeu vis-à-vis des clients comme des salariés. Nous pouvons intervenir en dehors des heures d'affluence après accord.",
    },
  },
  {
    slug: "vitrolles",
    name: "Vitrolles",
    postalCode: "13127",
    distanceKm: 33,
    intro:
      "Entretien et désinfection de climatisation à Vitrolles, du plateau résidentiel aux zones d'activités.",
    context: [
      "Vitrolles est bâtie sur un plateau exposé au mistral, avec d'un côté de vastes quartiers résidentiels et de l'autre l'une des plus grandes zones commerciales du département. Le vent transporte poussières et pollens qui se déposent en continu sur les groupes extérieurs.",
      "Cette exposition explique des filtres qui se colmatent vite. Un appareil qui souffle moins fort ou qui met plus longtemps à rafraîchir une pièce est presque toujours le signe d'un encrassement du filtre et de l'échangeur.",
    ],
    areas: ["Le Village", "Les Pins", "La Frescoule", "La Petite Garrigue", "Les Cadesteaux"],
    localAngle: {
      title: "Mistral, poussières et pollens",
      text: "Sur le plateau, les groupes extérieurs captent en permanence poussières et pollens. Pour les foyers avec allergies ou animaux, deux interventions par an sont souvent plus adaptées qu'une seule.",
    },
  },
  {
    slug: "salon-de-provence",
    name: "Salon-de-Provence",
    postalCode: "13300",
    distanceKm: 42,
    intro:
      "Nous intervenons à Salon-de-Provence pour le nettoyage complet et la désinfection de votre climatisation.",
    context: [
      "Plus éloignée du littoral, Salon-de-Provence connaît des étés nettement plus chauds et plus secs que les communes du bord de mer. La climatisation y fonctionne longuement, parfois en continu pendant les épisodes de forte chaleur.",
      "Cet usage intensif accélère l'encrassement et sollicite fortement le compresseur. À l'inverse, en hiver, beaucoup d'habitants utilisent leur pompe à chaleur air/air en mode chauffage, ce qui fait de l'appareil un équipement utilisé toute l'année.",
    ],
    areas: ["Centre historique", "Les Canourgues", "Bel Air", "La Monaque", "Le Talagard"],
    localAngle: {
      title: "Un appareil sollicité toute l'année",
      text: "Utilisée en froid l'été et en chaud l'hiver, une pompe à chaleur air/air ne connaît quasiment pas de repos. L'entretien annuel prend ici tout son sens pour préserver la performance et éviter la panne en pleine canicule.",
    },
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((city) => city.slug === slug);
}

/** Seuil de la majoration déplacement défini dans la grille tarifaire */
export const TRAVEL_SURCHARGE_KM = 20;
export const TRAVEL_SURCHARGE_LABEL = "20 €";
