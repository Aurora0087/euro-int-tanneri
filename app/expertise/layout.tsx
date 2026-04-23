import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Leather Tanning Expertise",
  description:
    "Discover Euro International's leather tanning expertise — a six-stage process from hide selection to quality control. ISO 9001:2015 certified, REACH compliant, and LWG protocol-aligned tannery in Kolkata.",
  keywords: [
    "leather tanning process India",
    "ISO certified tannery",
    "leather quality control",
    "chrome tanning India",
    "vegetable tanning process",
    "leather beam house",
    "LWG certified leather",
    "REACH compliant leather",
    "leather finishing Kolkata",
    "leather retanning dyeing",
  ],
  alternates: { canonical: "/expertise" },
  openGraph: {
    title: "Leather Tanning Expertise | Euro International — Kolkata",
    description:
      "Six-stage precision tanning process — hide selection, beam house operations, chrome & vegetable tanning, retanning, finishing, and rigorous quality control. ISO certified tannery, Kolkata.",
    url: `${siteConfig.url}/expertise`,
    images: [
      {
        url: "https://picsum.photos/seed/expertisehero/1200/630",
        width: 1200,
        height: 630,
        alt: "Euro International leather tanning expertise",
      },
    ],
  },
  twitter: {
    title: "Leather Tanning Expertise | Euro International",
    description:
      "Six-stage precision tanning. ISO 9001:2015 certified, REACH compliant, LWG protocol-aligned tannery in Kolkata, India.",
    images: ["https://picsum.photos/seed/expertisehero/1200/630"],
  },
}

export default function ExpertiseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Expertise", url: "/expertise" },
        ]}
      />
      {children}
    </>
  )
}
