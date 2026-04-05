import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MultiFooter from "../components/MultiFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <MultiFooter />
        <Footer />
      </body>
    </html>
  );
}
