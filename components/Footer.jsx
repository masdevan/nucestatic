"use client";

import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import { footerSections } from "@/data/footer";

export default function Footer() {
  return (
    <>
      <footer className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block cursor-pointer">
                <img
                  src="/logo/logo.png"
                  alt="Nucestatic Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-xs font-medium">
                Quantitative research and systematic trading infrastructure built from Boyolali, Indonesia.
              </p>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4 text-sm font-medium">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <ActiveLink href={link.href}>
                        {link.name}
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <footer className="bg-white pt-8 pb-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} NuceStatic. Independently Engineered.
          </p>
        </div>
      </footer>
    </>
  );
}
