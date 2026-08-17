export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  slogan: string;
  description: string;
  url: string;
  locale: string;
};

export type ContactInfo = {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    full: string;
  };
  hours: {
    label: string;
    value: string;
  };
};

export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin";
  href: string;
  enabled: boolean;
};

export type City = {
  name: string;
  slug: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  includes: string[];
  benefits: string[];
  audience: string;
  icon: string;
};

export type PricingRow = {
  id: string;
  name: string;
  detail: string;
  price: string;
};

export type PricingNote = {
  text: string;
};

export type DiscountRule = {
  count: string;
  discount: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type CityPage = {
  slug: string;
  name: string;
  postalCode: string;
  /** Distance routière approximative depuis Port-de-Bouc, en kilomètres */
  distanceKm: number;
  intro: string;
  context: string[];
  areas: string[];
  localAngle: { title: string; text: string };
};

export type WhyMaintainSection = {
  id: string;
  title: string;
  icon: string;
  content: string[];
  listItems?: string[];
};

export type TimelineStep = {
  id: string | number;
  title: string;
  description: string[];
  listItems?: string[];
  /** false = sous-étape (sans numéro), affichée sous un titre de groupe */
  numbered?: boolean;
  /** Titre de regroupement affiché juste au-dessus de cette étape */
  groupTitle?: string;
};

export type WhyUsItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CtaConfig = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type LegalSection = {
  id: string;
  title: string;
  content: string[];
  listItems?: string[];
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};
