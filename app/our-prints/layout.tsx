import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Custom Leather Prints & Embossing",
  description:
    "Custom leather embossing, digital printing, foil finishes and exotic grain patterns from Euro International. Crocodile, python, ostrich, lizard, woven textile and fully bespoke print solutions for luxury brands.",
  keywords: [
    "leather embossing India",
    "custom leather printing",
    "crocodile embossed leather India",
    "python print leather",
    "ostrich grain leather",
    "foil leather manufacturer",
    "digital print leather India",
    "lizard pattern leather",
    "bespoke leather design",
    "leather printing Kolkata",
    "exotic leather print India",
    "custom leather finish",
    "leather pattern manufacturer",
  ],
  alternates: { canonical: "/our-prints" },
  openGraph: {
    title: "Custom Leather Prints & Embossing | Euro International — India",
    description:
      "Crocodile, python, ostrich embossing, digital printing, foil metallic and bespoke design patterns. Custom leather print solutions for luxury fashion brands from Kolkata, India.",
    url: `${siteConfig.url}/our-prints`,
    images: [
      {
        url: "https://picsum.photos/seed/printhero/1200/630",
        width: 1200,
        height: 630,
        alt: "Euro International custom leather prints and embossing",
      },
    ],
  },
  twitter: {
    title: "Custom Leather Prints & Embossing | Euro International",
    description:
      "Crocodile, python, ostrich embossing, digital prints, foil finishes and bespoke designs. Custom leather solutions from Kolkata, India.",
    images: ["https://picsum.photos/seed/printhero/1200/630"],
  },
}

export default function OurPrintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Our Prints", url: "/our-prints" },
        ]}
      />
      {children}
    </>
  )
}
