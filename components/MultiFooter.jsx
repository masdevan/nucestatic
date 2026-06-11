"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MultiFooter() {
  const pathname = usePathname();

  const isLinkActive = (href) => pathname === href;

  return (
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

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link 
                  href="/about" 
                  className={`${isLinkActive('/about') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className={`${isLinkActive('/careers') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`${isLinkActive('/contact') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-6">
              Products
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link 
                  href="/infinity-bloom" 
                  className={`${isLinkActive('/infinity-bloom') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Infinity Bloom
                </Link>
              </li>
              <li>
                <Link 
                  href="/trade-alchemy" 
                  className={`${isLinkActive('/trade-alchemy') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Trade Alchemy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link 
                  href="/privacy" 
                  className={`${isLinkActive('/privacy') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className={`${isLinkActive('/terms') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/dmca" 
                  className={`${isLinkActive('/dmca') ? 'text-[#800000]' : 'text-gray-500'} hover:text-[#800000] transition-colors cursor-pointer`}
                >
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}