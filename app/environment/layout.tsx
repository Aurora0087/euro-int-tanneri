import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Sustainable Leather Manufacturing",
  description:
    "Euro International's environmental commitment — 100% wastewater treatment, 90%+ waste diversion from landfill, vegetable tanning, renewable energy and responsible sourcing. Sustainable leather manufacturing from Kolkata, India.",
  keywords: [
    "sustainable leather manufacturing India",
    "eco friendly tannery India",
    "vegetable tanned leather sustainable",
    "leather effluent treatment plant",
    "responsible leather sourcing",
    "green leather manufacturing",
    "ISO 14001 tannery India",
    "LWG sustainable leather",
    "leather waste reduction India",
    "ethical leather manufacturer India",
    "chrome free leather India",
    "sustainable leather supplier",
  ],
  alternates: { canonical: "/environment" },
  openGraph: {
    title: "Sustainable Leather Manufacturing | Euro International — India",
    description:
      "100% wastewater treatment, 90%+ waste diverted from landfill, vegetable tanning and renewable energy. Our commitment to sustainable leather production in Kolkata.",
    url: `${siteConfig.url}/environment`,
    images: [
      {
        url: "https://picsum.photos/seed/naturehero/1200/630",
        width: 1200,
        height: 630,
        alt: "Euro International sustainable leather manufacturing",
      },
    ],
  },
  twitter: {
    title: "Sustainable Leather Manufacturing | Euro International",
    description:
      "100% wastewater treated, 90%+ waste diverted from landfill. Committed to green leather manufacturing in Kolkata, India.",
    images: ["https://picsum.photos/seed/naturehero/1200/630"],
  },
}

export default function EnvironmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Environment", url: "/environment" },
        ]}
      />
      {children}
    </>
  )
}
