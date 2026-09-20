"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/content/site";
import { RevealSection } from "./RevealSection";

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <RevealSection className="section-padding" id="industries">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Industries</p>
          <h2 className="section-headline mb-4">Built for your business.</h2>
          <p className="text-body text-muted max-w-xl mx-auto">
            Whether you run a single shop or a multi-outlet chain — Nile POS adapts to your industry.
          </p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-accent text-white shadow-lg shadow-accent/20 scale-105"
                  : "bg-surface-elevated text-muted hover:text-fg hover:bg-border/30"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center" key={active}>
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-xl font-display font-semibold text-fg mb-3">
              {INDUSTRIES[active].name}
            </h3>
            <p className="text-body text-muted leading-relaxed">
              {INDUSTRIES[active].description}
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
