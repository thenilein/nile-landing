"use client";

import { ProductUI } from "./ProductUI";
import { OFFLINE } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function OfflineEdge() {
  return (
    <section id="offline" className="section-padding border-b border-border">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-3">{OFFLINE.eyebrow}</p>
              <h2 className="section-headline mb-4">{OFFLINE.headline}</h2>
              <p className="text-body-lg text-muted mb-8">{OFFLINE.description}</p>
            </Reveal>

            <Stagger className="space-y-4">
              {OFFLINE.points.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-fg mb-1">{p.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <ProductUI variant="pos" />
            <p className="mt-3 text-center text-xs text-muted">
              Same register screen your cashier uses—works with no internet.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
