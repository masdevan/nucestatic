import { Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/data/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nucestatic - Automated Asset Management System",
  description: "Nucestatic is an automated asset management system that leverages advanced programming and algorithm-based calculation technologies.",
  robots: { index: true, follow: true },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo/favicon/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/logo/favicon/favicon-16x16.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/logo/favicon/apple-icon-180x180.png"
    },
    {
      rel: "manifest",
      url: "/logo/favicon/manifest.json"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
