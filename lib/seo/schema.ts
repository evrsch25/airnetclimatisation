import { contactInfo } from "@/constants/contact";
import { cities, interventionZone } from "@/constants/cities";
import { siteConfig } from "@/constants/site";
import { images } from "@/constants/images";
import type { FaqItem } from "@/types";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      postalCode: contactInfo.address.postalCode,
      addressRegion: interventionZone.department,
      addressCountry: "FR",
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${images.logo.path}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      contactType: "customer service",
      email: contactInfo.email,
      availableLanguage: "French",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function getFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact — ${siteConfig.name}`,
    url: `${siteConfig.url}/contact`,
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nettoyage et désinfection de climatisation",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    areaServed: interventionZone.department,
    description: siteConfig.description,
  };
}
