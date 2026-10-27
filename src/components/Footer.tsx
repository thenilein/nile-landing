import { SITE, FOOTER } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-10">
      <div className="container-landing">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="text-sm font-semibold text-fg">
              {SITE.name}
            </a>
            <p className="mt-3 text-xs text-muted leading-relaxed max-w-[200px]">
              Billing-first ERP for Indian SMEs.
            </p>
            <div className="mt-4 space-y-1 text-xs text-muted">
              <p>{SITE.address}</p>
              <p>GSTIN: {SITE.gstin}</p>
              <p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-fg">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-fg">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          {[
            { title: "Product", links: FOOTER.product },
            { title: "Solutions", links: FOOTER.solutions },
            { title: "Company", links: FOOTER.company },
            { title: "Legal", links: FOOTER.legal },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-fg transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-fg transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
