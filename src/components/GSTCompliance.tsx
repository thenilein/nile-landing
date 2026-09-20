"use client";

import { useState } from "react";
import { GST_TABS } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function GSTCompliance() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <RevealSection className="section-padding" id="gst">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Tax Compliance</p>
          <h2 className="section-headline mb-4">GST, top to bottom.</h2>
          <p className="text-body text-muted max-w-xl mx-auto">
            Every aspect of GST compliance is built into the system — not bolted on.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {GST_TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-surface-elevated text-muted hover:text-fg"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in" key={activeTab}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Icon name="shield" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-fg mb-3">
                  {GST_TABS[activeTab].label}
                </h3>
                <p className="text-body text-muted leading-relaxed">
                  {GST_TABS[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
