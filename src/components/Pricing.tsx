"use client";

import { Check } from "lucide-react";
import { PRICING } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="eyebrow mb-3">Pricing</p>
          <h2 className="section-headline mb-4">
            Clear plans. Prices in rupees.
          </h2>
          <p className="text-sm text-muted">{PRICING.note}</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-4 items-stretch mb-4">
          {PRICING.plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative h-full flex flex-col rounded-card border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-accent/50 bg-surface shadow-glow-sm"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent text-accent-fg text-[11px] font-semibold px-3 py-1">
                    Most popular
                  </span>
                )}
                <h3 className="text-sm font-semibold text-fg">{plan.name}</h3>
                <p className="mt-1 text-xs text-muted">{plan.description}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-fg">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </p>
                <p className="text-[11px] text-muted-soft mt-1">+ GST</p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 w-full text-center ${
                    plan.highlighted ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="rounded-card border border-border bg-bg-elevated p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-title text-fg">{PRICING.enterprise.name}</h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                {PRICING.enterprise.description}
              </p>
            </div>
            <a href="#contact" className="btn-secondary shrink-0">
              {PRICING.enterprise.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
