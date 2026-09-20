"use client";

import { useState } from "react";
import { REPORTS_GALLERY } from "@/content/site";
import { RevealSection } from "./RevealSection";

export function ReportsGallery() {
  const [search, setSearch] = useState("");

  const filtered = REPORTS_GALLERY.map((cat) => ({
    ...cat,
    reports: cat.reports.filter(
      (r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.reports.length > 0);

  return (
    <RevealSection className="section-padding bg-surface-elevated" id="reports-gallery">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Analytics</p>
          <h2 className="section-headline mb-4">Every report you need.</h2>
          <p className="text-body text-muted max-w-xl mx-auto mb-8">
            15+ reports across transactions, inventory, activity, and POS shifts.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search reports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-xl bg-white border border-border/50 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        <div className="space-y-8">
          {filtered.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
                {category.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.reports.map((report) => (
                  <div
                    key={report.name}
                    className="glass-card p-5 group hover:shadow-lg hover:border-accent/20 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                  >
                    <h4 className="text-sm font-semibold text-fg mb-1 group-hover:text-accent transition-colors">
                      {report.name}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
