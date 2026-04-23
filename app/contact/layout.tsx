import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Euro International for leather product inquiries, custom orders and trade partnerships. Plot: 98, Zone - 10A, Kolkata - 700039, West Bengal, India. +91 33 2345 6789. Open Monday–Saturday 9 AM–6 PM IST.",
  keywords: [
    "contact leather manufacturer India",
    "Euro International contact",
    "leather supplier inquiry India",
    "leather order inquiry Kolkata",
    "leather manufacturer Kolkata address",
    "leather exporter contact India",
    "buy leather from India",
    "leather trade partner India",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Euro International | Leather Manufacturer — Kolkata 700039",
    description:
      "Get in touch for leather product inquiries, custom orders and partnerships. Plot: 98, Zone - 10A, Kolkata - 700039, India. +91 33 2345 6789.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Euro International — leather manufacturer Kolkata",
      },
    ],
  },
  twitter: {
    title: "Contact Euro International | Leather Manufacturer",
    description:
      "Inquiries for leather products, custom orders and partnerships. Kolkata - 700039, India. +91 33 2345 6789.",
    images: [siteConfig.ogImage],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]}
      />
      {children}
    </>
  )
}
