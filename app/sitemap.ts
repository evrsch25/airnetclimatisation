import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/prestations",
    "/pourquoi-nous",
    "/zone-intervention",
    "/contact",
    "/mentions-legales",
    "/cgu",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
