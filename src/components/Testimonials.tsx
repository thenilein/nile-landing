"use client";

import { TESTIMONIALS } from "@/content/site";
import { RevealSection } from "./RevealSection";

export function Testimonials() {
  return (
    <RevealSection className="section-padding" id="testimonials">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-headline mb-4">From shop owners.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F59E0B"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-body text-fg leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">{t.author}</p>
                    <p className="text-xs text-muted">{t.business}</p>
                  </div>
                </div>

                {t.placeholder && (
                  <p className="text-[10px] text-muted/50 mt-3 italic">
                    {/* Placeholder testimonial */}
                  </p>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
