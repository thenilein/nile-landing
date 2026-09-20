"use client";

import { useState } from "react";
import { FAQS } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <RevealSection className="section-padding bg-surface-elevated" id="faq">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="section-headline mb-4">Questions, answered.</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-elevated/50 transition-colors"
              >
                <span className="text-sm font-medium text-fg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <Icon name="chevronDown" size={18} />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-smooth ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-border/20 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </RevealSection>
  );
}
