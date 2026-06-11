"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
    );
    
    tl.fromTo(logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4"
    );

    tl.fromTo(navLinksRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        display: "block"
      });
      
      gsap.fromTo(".mobile-link", 
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        display: "none"
      });
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Infinity Bloom", href: "/infinity-bloom" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div ref={logoRef} className="flex items-center">
            <Link href="/" className="group flex items-center cursor-pointer">
              <div className="relative">
                <img 
                  src="/logo/logo.png" 
                  alt="NuceStatic Logo" 
                  className="h-12 w-auto transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={el => navLinksRef.current[index] = el}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-[#800000] cursor-pointer ${
                  pathname === link.href ? "text-[#800000]" : "text-gray-600"
                } group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#800000] transition-transform duration-300 origin-left ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
            
            <Link 
              href="/trade-alchemy"
              className="px-5 py-2.5 bg-[#800000] text-white text-sm font-semibold rounded-full hover:bg-[#6b0000] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#800000] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6 space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={menuRef}
        className="hidden md:hidden bg-white border-b border-gray-100 overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`mobile-link block px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                pathname === link.href 
                  ? "bg-[#800000]/10 text-[#800000]" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#800000]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mobile-link">
            <Link
              href="/trade-alchemy"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-4 py-4 bg-[#800000] text-white text-center font-bold rounded-xl hover:bg-[#6b0000] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}