import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Premium Leather Collection",
  description:
    "Browse Euro International's premium leather collection — full grain calfskin, vegetable tanned buffalo, nubuck, patent glaze, split suede, embossed grain, water repellent and metallic finish leathers for luxury fashion and accessories.",
  keywords: [
    "buy leather India",
    "full grain leather supplier India",
    "nubuck leather manufacturer",
    "patent leather India",
    "vegetable tanned leather supplier",
    "split suede leather India",
    "embossed leather manufacturer",
    "metallic leather India",
    "chrome tanned cowhide supplier",
    "premium calf leather India",
    "leather for fashion industry",
    "leather for footwear",
    "leather for automotive",
    "wholesale leather India",
  ],
  alternates: { canonical: "/our-leathers" },
  openGraph: {
    title: "Premium Leather Collection | Euro International — India",
    description:
      "Full grain, nubuck, patent, suede, embossed and specialty leathers. Premium hides crafted for fashion, footwear, automotive and luxury goods. Manufacturer in Kolkata, India.",
    url: `${siteConfig.url}/our-leathers`,
    images: [
      {
        url: "https://picsum.photos/seed/leatherhero/1200/630",
        width: 1200,
        height: 630,
        alt: "Euro International premium leather collection",
      },
    ],
  },
  twitter: {
    title: "Premium Leather Collection | Euro International",
    description:
      "Full grain, nubuck, patent, suede & specialty leathers. Premium hides for fashion, footwear & luxury goods from Kolkata, India.",
    images: ["https://picsum.photos/seed/leatherhero/1200/630"],
  },
}

export default function OurLeathersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Our Leathers", url: "/our-leathers" },
        ]}
      />
      {children}
    </>
  )
}
