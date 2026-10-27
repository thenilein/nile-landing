"use client";

import {
  Factory,
  Package,
  Pill,
  Store,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRIES } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const ICONS: Record<string, LucideIcon> = {
  Factory,
  Truck,
  Store,
  Package,
  Pill,
  UtensilsCrossed,
};

export function Industries() {
  return (
    <section id="industries" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Industries</p>
          <h2 className="section-headline mb-4">
            One system across the industries you serve.
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon] || Store;
            return (
              <StaggerItem key={ind.name}>
                <SpotlightCard className="h-full p-5 sm:p-6">
                  <div className="relative z-[1]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-sm font-semibold text-fg mb-1.5">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
