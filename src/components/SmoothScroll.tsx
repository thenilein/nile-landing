"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    const onClick = (e: Event) => {
      const anchor = (e.currentTarget as HTMLAnchorElement);
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.1 });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", onClick));

    return () => {
      cancelAnimationFrame(id);
      anchors.forEach((a) => a.removeEventListener("click", onClick));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
