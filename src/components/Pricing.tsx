"use client";

import { useState } from "react";
import { PRICING } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";
import { useLogin } from "@/context/LoginContext";

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const { open: openLogin } = useLogin();

  return (
    <RevealSection className="section-padding" id="pricing">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="section-headline mb-4">Simple pricing.</h2>
          <p className="text-body text-muted max-w-xl mx-auto mb-8">
            Start free. Upgrade when you grow.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-surface-elevated rounded-pill p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-300 ${
                !yearly ? "bg-white shadow-sm text-fg" : "text-muted"
              }`}
            >
              {PRICING.toggle.monthly}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-300 ${
                yearly ? "bg-white shadow-sm text-fg" : "text-muted"
              }`}
            >
              {PRICING.toggle.yearly}
              <span className="ml-1.5 text-xs text-accent font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRICING.plans.map((plan, i) => (
            <RevealSection key={plan.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-fg text-white ring-2 ring-accent shadow-2xl shadow-accent/20"
                    : "glass-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-pill">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-lg font-display font-semibold mb-2 ${
                      plan.highlighted ? "text-white" : "text-fg"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-display font-bold ${
                        plan.highlighted ? "text-white" : "text-fg"
                      }`}
                    >
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white/50" : "text-muted"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "bg-accent/30 text-accent"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon name="check" size={12} />
                      </span>
                      <span
                        className={
                          plan.highlighted ? "text-white/80" : "text-fg"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.name === "Enterprise" ? (
                  <a
                    href="#demo"
                    className={`block w-full text-center py-3 rounded-pill text-sm font-semibold transition-all duration-300 bg-accent/10 text-accent hover:bg-accent hover:text-white`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    onClick={openLogin}
                    className={`w-full text-center py-3 rounded-pill text-sm font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/30"
                        : "bg-accent/10 text-accent hover:bg-accent hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
