"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import { Reveal } from "./Reveal";

export function ClosingCTA() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to book a demo of Nile POS."
  )}`;

  return (
    <section id="contact" className="section-padding">
      <div className="container-landing">
        <Reveal>
          <div className="relative overflow-hidden rounded-section border border-border bg-surface px-6 py-14 sm:px-12 sm:py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, var(--hero-glow), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="section-headline mb-3">{SITE.cta.demo}</h2>
              <p className="text-muted text-body-lg max-w-lg mx-auto mb-8">
                We show your real shop flow—billing, offline counter, and Zoho or your stock system. Thirty minutes. Straight talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`mailto:${SITE.email}?subject=Demo%20request`} className="btn-primary w-full sm:w-auto">
                  Book a Free Demo
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Phone size={16} />
                  {SITE.phone}
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
