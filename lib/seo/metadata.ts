import type { Metadata } from "next";
import type { PageSeo } from "@/types";
import { siteConfig } from "@/constants/site";

type GenerateMetadataOptions = PageSeo & {
  ogImage?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = "/images/og/default.svg",
}: GenerateMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const defaultMetadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} — Nettoyage & désinfection de climatisation`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "nettoyage climatisation",
    "entretien climatisation",
    "désinfection climatisation",
    "Port-de-Bouc",
    "Martigues",
    "Bouches-du-Rhône",
  ],
});
