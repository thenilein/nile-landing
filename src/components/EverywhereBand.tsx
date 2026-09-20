"use client";

import { EVERYWHERE } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function EverywhereBand() {
  return (
    <RevealSection className="section-padding bg-fg" id="platform">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow !text-accent/80 mb-4">Platform</p>
          <h2 className="font-display text-headline text-white mb-4">
            Works everywhere you do.
          </h2>
          <p className="text-body text-white/60 max-w-xl mx-auto">
            Desktop app, web dashboard, offline mode — all synced in real-time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {EVERYWHERE.map((item, i) => (
            <RevealSection key={item.title} delay={i * 80}>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white/80 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Icon name={item.icon} size={24} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
