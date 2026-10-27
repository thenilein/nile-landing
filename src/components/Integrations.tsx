"use client";

import { BookOpen, Boxes, Cable, FileSpreadsheet, type LucideIcon } from "lucide-react";
import { INTEGRATIONS } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Boxes,
  Cable,
  FileSpreadsheet,
};

export function Integrations() {
  return (
    <section id="integrations" className="section-padding border-b border-border bg-bg-elevated">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">{INTEGRATIONS.eyebrow}</p>
          <h2 className="section-headline mb-4">{INTEGRATIONS.headline}</h2>
          <p className="text-body-lg text-muted">{INTEGRATIONS.description}</p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-4 mb-10">
          {INTEGRATIONS.points.map((item) => {
            const Icon = ICONS[item.icon] || Cable;
            return (
              <StaggerItem key={item.title}>
                <SpotlightCard className="h-full p-5 sm:p-6">
                  <div className="relative z-[1] flex gap-4">
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-fg mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm font-semibold text-fg mb-4">
              Simple picture: Nile at the counter. Your stock system behind it.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 text-center text-sm">
              <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50/70 px-4 py-5">
                <p className="font-semibold text-emerald-900">Nile POS Terminal</p>
                <p className="mt-1 text-xs text-emerald-800/80">Bill · UPI · Print · Offline</p>
              </div>
              <div className="flex items-center justify-center text-muted font-medium px-2">
                connects to
              </div>
              <div className="flex-1 rounded-lg border border-border bg-surface-elevated px-4 py-5">
                <p className="font-semibold text-fg">Zoho / your inventory</p>
                <p className="mt-1 text-xs text-muted">Stock · Books · Reports you already use</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
