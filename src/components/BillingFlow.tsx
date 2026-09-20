"use client";

import { BILLING_STEPS } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function BillingFlow() {
  return (
    <section className="section-padding bg-fg relative overflow-hidden" id="billing-flow">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="container-landing relative">
        <RevealSection className="text-center mb-16">
          <p className="eyebrow !text-accent/80 mb-4">Speed Matters</p>
          <h2 className="font-display text-headline text-white mb-4">
            8 seconds to a bill.
          </h2>
          <p className="text-body text-white/60 max-w-xl mx-auto">
            From barcode scan to printed receipt. No clicks wasted.
          </p>
        </RevealSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          {BILLING_STEPS.map((step, i) => (
            <RevealSection key={step.step} delay={i * 100}>
              <div className="relative group">
                {/* Connector line */}
                {i < BILLING_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+30px)] right-[-50%] h-px bg-white/10" />
                )}

                <div className="glass-card-dark p-6 text-center hover:border-accent/40 transition-all duration-500 group-hover:translate-y-[-4px]">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Icon name={step.icon} size={20} />
                  </div>

                  <div className="text-xs text-white/30 mb-2 font-medium">
                    Step {step.step}
                  </div>

                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Receipt preview */}
        <RevealSection delay={600} className="mt-16 max-w-sm mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-2xl font-mono text-xs text-fg">
            <div className="text-center mb-3 pb-3 border-b border-dashed border-border">
              <p className="font-bold text-sm">NILE STORE</p>
              <p className="text-muted text-[10px]">123 MG Road, Bangalore - 560001</p>
              <p className="text-muted text-[10px]">GSTIN: 29ABCDE1234F1ZK</p>
            </div>
            <div className="space-y-1 mb-3 pb-3 border-b border-dashed border-border">
              <div className="flex justify-between"><span>Masala Dosa ×2</span><span>₹160.00</span></div>
              <div className="flex justify-between"><span>Filter Coffee ×3</span><span>₹150.00</span></div>
              <div className="flex justify-between"><span>Vada (2pc) ×1</span><span>₹80.00</span></div>
            </div>
            <div className="space-y-0.5 mb-3 pb-3 border-b border-dashed border-border text-muted">
              <div className="flex justify-between"><span>Subtotal</span><span>₹390.00</span></div>
              <div className="flex justify-between"><span>CGST @2.5%</span><span>₹9.75</span></div>
              <div className="flex justify-between"><span>SGST @2.5%</span><span>₹9.75</span></div>
            </div>
            <div className="flex justify-between font-bold text-sm">
              <span>TOTAL</span><span>₹409.50</span>
            </div>
            <div className="flex justify-between mt-1 text-muted">
              <span>Cash</span><span>₹500.00</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Change</span><span>₹90.50</span>
            </div>
            <div className="text-center mt-3 pt-3 border-t border-dashed border-border text-muted text-[10px]">
              <p>Thank you! Visit again.</p>
              <p className="mt-1">Powered by Nile POS</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
