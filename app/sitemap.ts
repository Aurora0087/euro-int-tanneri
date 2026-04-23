import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  return [
    {
      url: base,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/our-leathers`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/our-prints`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/expertise`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/environment`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/legal-notices`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/personal-data`,
      lastModified: new Date("2025-04-23"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
