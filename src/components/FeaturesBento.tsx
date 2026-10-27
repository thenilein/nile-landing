"use client";

import { BENTO_FEATURES } from "@/content/site";
import { FeatureSnippet } from "./FeatureSnippets";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

export function FeaturesBento() {
  return (
    <section id="features" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Product</p>
          <h2 className="section-headline mb-4">
            Clear tools for the work you do every day.
          </h2>
          <p className="text-body-lg text-muted">
            Faster bills. Clean GST. Less Excel. Your staff can learn it without a long training class.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENTO_FEATURES.map((f) => (
            <StaggerItem key={f.id} className={f.span || "lg:col-span-1"}>
              <SpotlightCard className="h-full p-5 sm:p-6">
                <div className="relative z-[1] flex flex-col h-full gap-4">
                  <div>
                    <h3 className="text-title text-fg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <FeatureSnippet type={f.snippet} />
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
