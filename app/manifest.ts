import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Air Net",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0084ff",
    lang: "fr",
  };
}
