import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Euro Intl",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f9f5ef",
    theme_color: "#1c0d06",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
