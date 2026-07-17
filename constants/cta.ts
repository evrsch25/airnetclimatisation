import type { CtaConfig } from "@/types";
import { contactInfo } from "@/constants/contact";

export const ctaConfig: CtaConfig = {
  primary: {
    label: "Demander un devis",
    href: "/contact",
  },
  secondary: {
    label: "Appeler maintenant",
    href: `tel:${contactInfo.phone}`,
  },
};

export const reassuranceItems = [
  "Devis gratuit",
  "Sans engagement",
  "Intervention professionnelle",
];
