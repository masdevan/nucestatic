"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, activeClass = "text-[#800000]", inactiveClass = "text-gray-500", className = "", children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? activeClass : inactiveClass} hover:text-[#800000] transition-colors cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
