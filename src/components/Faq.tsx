"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/content/site";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding border-b border-border">
      <div className="container-landing max-w-3xl">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="section-headline">Questions, answered.</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-border border border-border rounded-card overflow-hidden">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="bg-surface">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-fg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
