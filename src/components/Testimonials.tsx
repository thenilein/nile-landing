"use client";

import { TESTIMONIALS } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function Testimonials() {
  return (
    <section id="customers" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Customers</p>
          <h2 className="section-headline mb-4">
            Trusted by owners who left spreadsheets behind.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.author}>
              <figure className="h-full flex flex-col rounded-card border border-border bg-surface p-6">
                <blockquote className="text-sm text-fg/90 leading-relaxed flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent text-xs font-semibold"
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-fg">{t.author}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.company} · {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
