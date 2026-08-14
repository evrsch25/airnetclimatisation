import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { cityPages } from "@/constants/city-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const mainRoutes = ["", "/prestations", "/pourquoi-nous", "/zone-intervention", "/contact"];
  const cityRoutes = cityPages.map((city) => `/nettoyage-climatisation/${city.slug}`);
  const legalRoutes = ["/mentions-legales", "/cgu"];

  return [
    ...mainRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...cityRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
