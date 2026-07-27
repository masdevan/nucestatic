import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nucestatic - Automated Asset Management System",
  description: "Nucestatic is an automated asset management system that leverages advanced programming and algorithm-based calculation technologies.",
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
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
