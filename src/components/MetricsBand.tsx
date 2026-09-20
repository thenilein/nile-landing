"use client";

import { useEffect, useState, useRef } from "react";
import { METRICS } from "@/content/site";
import { RevealSection } from "./RevealSection";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = target.replace(/[^0-9.]/g, "");
          const num = parseFloat(numericPart);
          const nonNumeric = target.replace(/[0-9.]/g, "");

          if (isNaN(num)) {
            setDisplay(target);
            return;
          }

          const duration = 1500;
          const steps = 40;
          const increment = num / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, num);
            const eased = num * (1 - Math.pow(1 - step / steps, 3));
            setDisplay(
              (Number.isInteger(num) ? Math.round(eased) : eased.toFixed(1)) +
                nonNumeric +
                suffix
            );
            if (step >= steps) {
              clearInterval(timer);
              setDisplay(target + suffix);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function MetricsBand() {
  return (
    <RevealSection className="section-padding border-y border-border/30" id="metrics">
      <div className="container-landing">
        <div className="text-center mb-12">
          <h2 className="section-headline">The numbers.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                <CountUp target={metric.value} />
              </div>
              <p className="text-sm font-medium text-fg mb-1">{metric.label}</p>
              {metric.note && (
                <p className="text-xs text-muted">{metric.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
