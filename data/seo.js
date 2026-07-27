export const siteUrl = "https://nucestatic.com"
export const siteName = "Nucestatic"

const defaultOgImage = { url: "/logo/logo.png", width: 737, height: 212 }

const pages = {
  "/": {
    title: "Nucestatic - Automated Asset Management System",
    description: "Nucestatic is an automated asset management system that leverages advanced programming and algorithm-based calculation technologies.",
  },
  "/about": {
    title: "About | Nucestatic",
    description: "Building the future of asset management with machine learning, statistical modeling, and high-performance computing.",
  },
  "/careers": {
    title: "Careers | Nucestatic",
    description: "Join Nucestatic in building the future of quantitative trading infrastructure.",
  },
  "/contact": {
    title: "Contact | Nucestatic",
    description: "Get in touch with Nucestatic for inquiries about our quantitative research and trading infrastructure.",
  },
  "/infinity-bloom": {
    title: "Infinity Bloom | Nucestatic",
    description: "An open-source experimental terminal platform built on the Python ecosystem for quantitative trading.",
  },
  "/trade-alchemy": {
    title: "Trade Alchemy | Nucestatic",
    description: "Advanced research platform for quantitative trading with high-performance architecture and dynamic algorithm management.",
  },
  "/privacy": {
    title: "Privacy Policy | Nucestatic",
    description: "Nucestatic Privacy Policy - how we collect, use, and safeguard your information.",
  },
  "/terms": {
    title: "Terms of Service | Nucestatic",
    description: "Nucestatic Terms of Service - terms and conditions for using our website and services.",
  },
  "/dmca": {
    title: "DMCA Policy | Nucestatic",
    description: "Nucestatic DMCA Policy - copyright infringement notification and counter-notification procedures.",
  },
}

export function buildMetadata(path) {
  const info = pages[path]
  if (!info) return {}

  const url = `${siteUrl}${path}`
  return {
    title: info.title,
    description: info.description,
    alternates: { canonical: url },
    openGraph: {
      title: info.title,
      description: info.description,
      url,
      siteName,
      images: [defaultOgImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: info.title,
      description: info.description,
    },
  }
}

export const sitemapPages = Object.keys(pages).map((path) => ({
  url: `${siteUrl}${path}`,
  lastModified: new Date(),
}))
