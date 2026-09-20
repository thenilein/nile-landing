"use client";

import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "@/content/site";
import { Icon } from "./Icon";
import { useLogin } from "@/context/LoginContext";

export function Header() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { open: openLogin } = useLogin();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-fg text-white text-center text-sm py-2.5 px-4">
          <a href="#pricing" className="hover:underline underline-offset-4 transition-all">
            {SITE.announcement}
          </a>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
        style={{ top: announcementVisible ? "40px" : "0px" }}
      >
        <div className="container-landing flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-fg">
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">
              N
            </span>
            {SITE.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setMegaOpen(link.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <a
                  href={link.href}
                  className="btn-ghost flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <Icon
                      name="chevronDown"
                      size={14}
                      className={`transition-transform duration-300 ${
                        megaOpen === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Mega menu */}
                {link.children && megaOpen === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                    <div className="glass-card p-4 min-w-[320px] grid grid-cols-2 gap-1 shadow-xl">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-elevated transition-colors"
                        >
                          <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                            <Icon name={child.icon} size={18} />
                          </span>
                          <span className="text-sm font-medium text-fg">
                            {child.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={openLogin} className="btn-ghost text-muted">
              Login
            </button>
            <button onClick={openLogin} className="btn-primary text-sm !py-2">
              {SITE.cta.primary}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
            <div className="container-landing py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-fg font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-muted hover:text-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Icon name={child.icon} size={16} />
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileOpen(false); openLogin(); }}
                  className="btn-secondary w-full text-center"
                >
                  Login
                </button>
                <button
                  onClick={() => { setMobileOpen(false); openLogin(); }}
                  className="btn-primary w-full text-center"
                >
                  {SITE.cta.primary}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
