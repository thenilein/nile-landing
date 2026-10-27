"use client";

import {
  ArrowRightLeft,
  Languages,
  MessageCircle,
  Receipt,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { BUILT_FOR_INDIA } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Receipt,
  ArrowRightLeft,
  Smartphone,
  Server,
  Languages,
  MessageCircle,
};

export function BuiltForIndia() {
  return (
    <section id="india" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Built for India</p>
          <h2 className="section-headline mb-4">
            Made for how Tamil Nadu shops and factories actually work.
          </h2>
          <p className="text-body-lg text-muted">
            GST, UPI, WhatsApp help, and data in India. Plain tools for sharp business owners.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BUILT_FOR_INDIA.map((item) => {
            const Icon = ICONS[item.icon] || Receipt;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-card border border-border bg-surface p-5 sm:p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-fg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
