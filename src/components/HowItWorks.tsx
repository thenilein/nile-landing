"use client";

import { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS } from "@/content/site";
import { ProductUI } from "./ProductUI";
import { Reveal } from "./Reveal";

function StepMock({ type }: { type: string }) {
  if (type === "bill") {
    return <ProductUI variant="pos" className="!rounded-xl !shadow-none" />;
  }
  if (type === "train") {
    return <ProductUI variant="invoices" className="!rounded-xl !shadow-none" />;
  }

  const frames: Record<string, React.ReactNode> = {
    import: (
      <div className="space-y-3 p-5">
        <p className="nile-label">CSV import</p>
        <div className="rounded border border-dashed border-emerald-400/60 bg-emerald-50/50 p-8 text-center">
          <p className="text-sm font-bold text-slate-900">Drop products.csv</p>
          <p className="text-xs font-semibold text-slate-500 mt-1">1,248 rows ready</p>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-3/4 bg-emerald-600 rounded-full" />
        </div>
      </div>
    ),
    setup: (
      <div className="space-y-3 p-5 text-sm">
        <p className="nile-label">GST profile</p>
        {[
          ["GSTIN", "33AAAAA0000A1Z5"],
          ["State", "Tamil Nadu"],
          ["Default rate", "18%"],
          ["Outlets", "3 shops"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-slate-200 py-2 font-semibold">
            <span className="text-slate-500">{k}</span>
            <span className="text-slate-900 font-mono text-xs">{v}</span>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="h-full min-h-[320px] overflow-hidden rounded-xl border border-slate-300 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 bg-slate-50">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
      </div>
      {frames[type] || null}
    </div>
  );
}

export function HowItWorks() {
  const { steps, eyebrow, headline } = HOW_IT_WORKS;
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-headline">{headline}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {steps.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`lg:min-h-[50vh] lg:flex lg:flex-col lg:justify-center py-4 lg:py-8 transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-45 lg:opacity-35"
                }`}
              >
                <p className="text-xs font-mono text-accent mb-3">
                  {String(step.step).padStart(2, "0")}
                </p>
                <h3 className="text-title text-fg mb-2">{step.title}</h3>
                <p className="text-muted text-body max-w-md">{step.description}</p>
                <div className="mt-6 lg:hidden">
                  <StepMock type={step.mock} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <StepMock type={steps[active]?.mock || "import"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
