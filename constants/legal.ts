import type { LegalSection } from "@/types";
import { contactInfo } from "@/constants/contact";
import { siteConfig } from "@/constants/site";

export const legalInfo = {
  editor: siteConfig.legalName,
  legalForm: "Micro-entreprise",
  siret: "107 080 640 00017",
  rcs: "Aix-en-Provence",
  tva: "FR48107080640",
  director: "Emmanuel De Pasquale",
  hosting: {
    name: "OVHcloud",
    address: "2 rue Kellermann, 59100 Roubaix – France",
    phone: "1007",
  },
  insurance: {
    name: "MATMUT Assurances",
    address: "6 bis quai Kléber, 13500 Martigues",
  },
  mediator: {
    name: "MEDIMMOCONSO",
    website: "https://www.medimmoconso.fr",
  },
};

export const mentionsLegalesSections: LegalSection[] = [
  {
    id: "editor",
    title: "Éditeur du site",
    content: [
      `Éditeur : ${legalInfo.editor}`,
      `Forme juridique : ${legalInfo.legalForm}`,
      `SIRET : ${legalInfo.siret}`,
      `Ville RCS : ${legalInfo.rcs}`,
      `TVA intracommunautaire : ${legalInfo.tva}`,
      `Téléphone : ${contactInfo.phoneDisplay}`,
      `Courriel : ${contactInfo.email}`,
      `Adresse du siège : ${contactInfo.address.full}`,
      `Directeur de la publication : ${legalInfo.director}`,
    ],
  },
  {
    id: "hosting",
    title: "Hébergement",
    content: [
      legalInfo.hosting.name,
      legalInfo.hosting.address,
      `Téléphone : ${legalInfo.hosting.phone}`,
    ],
  },
  {
    id: "activity",
    title: "Activité",
    content: ["Le site a pour objet la présentation des services de :"],
    listItems: [
      "Nettoyage de climatisation (unités intérieures et extérieures)",
      "Nettoyage de pompe à chaleur air/air",
    ],
  },
  {
    id: "intellectual-property",
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, images, logos, photos, éléments graphiques, structure du site, etc.) est protégé par le code de la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, totale ou partielle, de tout ou partie du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.",
    ],
  },
  {
    id: "liability",
    title: "Responsabilité",
    content: [
      "L'éditeur du site s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour.",
      "L'utilisateur du site reconnaît utiliser les informations disponibles sous sa responsabilité exclusive.",
    ],
  },
  {
    id: "personal-data",
    title: "Données personnelles",
    content: [
      "Les informations recueillies via le formulaire de contact sont utilisées uniquement afin de répondre aux demandes des utilisateurs.",
      "Ces données ne sont ni vendues, ni cédées à des tiers.",
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données.",
      `Pour toute demande : ${contactInfo.email}`,
    ],
    listItems: [
      "Nom",
      "Numéro de téléphone",
      "Adresse électronique",
      "Adresse d'intervention",
      "Message de demande",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      "Le site peut utiliser des cookies à des fins de mesure d'audience, d'amélioration de l'expérience utilisateur et de fonctionnement technique.",
      "L'utilisateur peut configurer son navigateur afin de refuser les cookies.",
    ],
  },
  {
    id: "insurance",
    title: "Assurance professionnelle",
    content: [
      "L'entreprise dispose d'une assurance Responsabilité Civile Professionnelle.",
      `Assureur : ${legalInfo.insurance.name}`,
      legalInfo.insurance.address,
    ],
  },
  {
    id: "mediation",
    title: "Médiation de la consommation",
    content: [
      "Conformément aux articles L.611-1 et suivants du code de la consommation, le client a la possibilité de recourir gratuitement à un médiateur de la consommation en cas de litige.",
      `Médiateur : ${legalInfo.mediator.name}`,
      `Site internet du médiateur : ${legalInfo.mediator.website}`,
    ],
  },
  {
    id: "applicable-law",
    title: "Droit applicable",
    content: [
      "Le présent site est soumis au droit français.",
      "En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
];

export const cguSections: LegalSection[] = [
  {
    id: "object",
    title: "Objet",
    content: [
      "Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site internet d'Air Net Climatisation.",
      "L'accès au site implique l'acceptation pleine et entière des présentes conditions.",
    ],
  },
  {
    id: "services",
    title: "Services présentés",
    content: [
      "Le site a pour objet de présenter les services de nettoyage, d'entretien et de désinfection de systèmes de climatisation proposés par Air Net Climatisation.",
      "Les informations présentées sur le site sont données à titre indicatif et ne constituent pas une offre contractuelle.",
    ],
  },
  {
    id: "quotes",
    title: "Demandes de devis",
    content: [
      "Toute demande de devis effectuée via le formulaire de contact ne constitue pas un engagement contractuel.",
      "Un devis personnalisé sera établi suite à l'analyse de votre demande.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des éléments du site (textes, images, logos, structure) sont la propriété exclusive d'Air Net Climatisation ou de ses partenaires.",
      "Toute reproduction est interdite sans autorisation préalable.",
    ],
  },
  {
    id: "liability",
    title: "Limitation de responsabilité",
    content: [
      "Air Net Climatisation s'efforce d'assurer l'exactitude des informations diffusées sur le site.",
      "Toutefois, l'entreprise ne saurait être tenue responsable des erreurs, omissions ou indisponibilités du site.",
    ],
  },
  {
    id: "personal-data",
    title: "Protection des données",
    content: [
      "Les données personnelles collectées via le site sont traitées conformément au RGPD.",
      `Pour toute question : ${contactInfo.email}`,
    ],
  },
  {
    id: "applicable-law",
    title: "Droit applicable",
    content: [
      "Les présentes CGU sont soumises au droit français.",
      "En cas de litige, les tribunaux français seront seuls compétents.",
    ],
  },
];
