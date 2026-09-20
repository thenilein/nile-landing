"use client";

import { RevealSection } from "./RevealSection";

const PARTNERS = [
  { name: "Reliance Retail", color: "#0056A4" },
  { name: "BigBasket", color: "#84C225" },
  { name: "Swiggy", color: "#FC8019" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Jio Mart", color: "#0078AD" },
  { name: "D-Mart", color: "#E31E24" },
  { name: "Spencer's", color: "#D4213D" },
  { name: "Metro Cash", color: "#003D7C" },
  { name: "Vishal Mega", color: "#1B3C87" },
  { name: "More Retail", color: "#E4002B" },
  { name: "Star Bazaar", color: "#009A44" },
  { name: "Spar India", color: "#E30613" },
];

export function TrustMarquee() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <RevealSection className="py-16 border-y border-border/30 overflow-hidden" id="trust">
      <div className="container-landing mb-8">
        <p className="text-center text-caption text-muted tracking-wide uppercase">
          Trusted by businesses across India
        </p>
      </div>

      {/* Marquee row 1 */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-slide-left">
          {doubled.map((partner, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center mx-6 shrink-0 group cursor-default"
            >
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/20 bg-white/50 hover:bg-white hover:shadow-md hover:border-border/40 hover:scale-105 transition-all duration-500">
                {/* Logo mark */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                {/* Name */}
                <span className="text-sm font-medium text-muted/60 group-hover:text-fg whitespace-nowrap transition-colors duration-500">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex" style={{ animation: "slide-left 40s linear infinite reverse" }}>
          {[...doubled].reverse().map((partner, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center mx-6 shrink-0 group cursor-default"
            >
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/20 bg-white/50 hover:bg-white hover:shadow-md hover:border-border/40 hover:scale-105 transition-all duration-500">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <span className="text-sm font-medium text-muted/60 group-hover:text-fg whitespace-nowrap transition-colors duration-500">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
