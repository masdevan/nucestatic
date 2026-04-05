"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="shrink-0">
              <img src="/logo/logo.png" alt="NuceStatic Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link href="/infinity-bloom" className="text-gray-500 hover:text-gray-900 px-1 py-0.5 text-[13px]">
              Infinity Bloom
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 px-1 py-0.5 text-[13px]">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 px-1 py-0.5 text-[13px]">
              Contact
            </Link>
            <Link href="/quant-lab" className="text-gray-500 hover:text-gray-900 px-1 py-0.5 text-[13px]">
              Quant Lab
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-1"
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="border-t border-gray-200">
              <div className="px-2 pt-3 pb-4 space-y-1">
                <Link
                  href="/infinity-bloom"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Infinity Bloom
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <Link
                  href="/quant-lab"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Quant Lab
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}