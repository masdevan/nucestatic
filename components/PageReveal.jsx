"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageReveal({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = containerRef.current.querySelectorAll("section");

      sections.forEach((section, i) => {
        if (i === 0) {
          const badge = section.querySelector(".reveal-badge");
          const title = section.querySelector(".reveal-title");
          const desc = section.querySelector(".reveal-desc");
          const extra = section.querySelectorAll(".reveal-item");

          const tl = gsap.timeline();

          if (badge) {
            tl.fromTo(badge, { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
          }
          if (title) {
            tl.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.3");
          }
          if (desc) {
            tl.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4");
          }
          if (extra.length) {
            tl.fromTo(extra, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.3");
          }
        } else {
          const items = section.querySelectorAll(".reveal-item, .reveal-title, .reveal-desc, .reveal-badge");
          
          gsap.fromTo(items,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}