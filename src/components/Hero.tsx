"use client";

import { ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";
import { ProductUI } from "./ProductUI";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 hero-dotgrid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grain" aria-hidden />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] blur-3xl opacity-50"
        style={{ background: "radial-gradient(ellipse, var(--hero-glow), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-landing relative">
        <Reveal className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
          <p className="eyebrow mb-5">For shop owners & founders · Tamil Nadu & India</p>
          <h1 className="text-display text-fg mb-5">
            <span className="block text-accent">{SITE.name}</span>
            <span className="block mt-2 text-fg font-semibold text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-[-0.02em] leading-snug">
              {SITE.tagline}
            </span>
          </h1>
          <p className="text-body-lg text-muted max-w-xl mx-auto mb-8">
            {SITE.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="btn-primary w-full sm:w-auto group">
              {SITE.cta.primary}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto">
              {SITE.cta.secondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="max-w-5xl mx-auto">
          <ProductUI variant="dashboard" />
          <p className="mt-3 text-center text-xs text-muted">
            Real Nile desktop look—Home dashboard from the product your team uses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
