"use client";

import { ONBOARDING_STEPS } from "@/content/site";
import { RevealSection } from "./RevealSection";

export function Onboarding() {
  return (
    <RevealSection className="section-padding bg-surface-elevated" id="onboarding">
      <div className="container-landing">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Getting Started</p>
          <h2 className="section-headline mb-4">Live in four steps.</h2>
          <p className="text-body text-muted max-w-xl mx-auto">
            From data import to your first bill — we&apos;ll guide you through every step.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50 hidden md:block" />

            <div className="space-y-8">
              {ONBOARDING_STEPS.map((step, i) => (
                <RevealSection key={step.step} delay={i * 120}>
                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-display font-bold text-lg relative z-10">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="glass-card p-6 flex-1">
                      <h3 className="text-lg font-display font-semibold text-fg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
