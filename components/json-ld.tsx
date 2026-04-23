import { siteConfig } from "@/lib/seo"

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "France" },
          { "@type": "Country", name: "Italy" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
        knowsAbout: [
          "Leather Manufacturing",
          "Leather Tanning",
          "Full Grain Leather",
          "Vegetable Tanned Leather",
          "Leather Finishing",
          "Leather Printing",
          "Embossed Leather",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Premium Leather Collection",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Full Grain Calf Leather" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vegetable Tanned Buffalo Leather" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Nubuck Calf Leather" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Patent Glaze Leather" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Embossed Grain Leather" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Printed Leather" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: `${siteConfig.name} — ${siteConfig.tagline}`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
