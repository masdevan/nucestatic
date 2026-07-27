import { siteUrl, siteName } from "@/data/seo"
import { contactDetails } from "@/data/contact"

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: contactDetails.phone,
          email: contactDetails.email,
          contactType: "sales",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Raya Ampel",
          addressLocality: "Ampel, Boyolali",
          addressRegion: "Jawa Tengah",
          postalCode: "57352",
          addressCountry: "ID",
        },
      },
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: "Automated asset management system leveraging advanced programming and algorithm-based calculation technologies.",
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
