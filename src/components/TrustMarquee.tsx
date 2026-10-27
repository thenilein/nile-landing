"use client";

import { TRUST } from "@/content/site";
import { Reveal } from "./Reveal";

export function TrustMarquee() {
  const logos = [...TRUST.logos, ...TRUST.logos];

  return (
    <section className="border-y border-border py-10 overflow-hidden" aria-label="Trusted by">
      <div className="container-landing">
        <Reveal>
          <p className="text-center text-sm text-muted mb-8">{TRUST.line}</p>
        </Reveal>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-bg to-transparent" />
        <div className="marquee-track gap-10 sm:gap-14 px-6">
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 shrink-0 opacity-50 hover:opacity-80 transition-opacity"
            >
              <span className="h-7 w-7 rounded-md border border-border bg-surface flex items-center justify-center text-[10px] font-semibold text-muted">
                {name.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-muted whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
