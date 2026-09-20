"use client";

import { SITE, FOOTER } from "@/content/site";

export function Footer() {
  const columns = [
    { title: "Product", links: FOOTER.product },
    { title: "Solutions", links: FOOTER.solutions },
    { title: "Resources", links: FOOTER.resources },
    { title: "Company", links: FOOTER.company },
  ];

  return (
    <footer className="bg-fg border-t border-border-dark/30" id="footer">
      <div className="container-landing section-padding">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">
                N
              </span>
              {SITE.name}
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              The complete business stack for Indian retail. POS billing, inventory, purchases, GST — all in one place.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 text-white/50 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-xs font-medium"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
