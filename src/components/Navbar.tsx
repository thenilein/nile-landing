"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="container-landing flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent border border-accent/25">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect
                x="4"
                y="3"
                width="16"
                height="14"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 21h8M12 17v4M8 8h8M8 12h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-fg">
            {SITE.name}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="btn-ghost">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Book a Demo
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden btn-ghost !px-2.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-bg/95 backdrop-blur-xl">
          <div className="container-landing py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 text-fg font-medium border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
