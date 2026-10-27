"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/content/site";
import { Reveal } from "./Reveal";

function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section-padding pt-14 pb-14 border-b border-border">
      <div className="container-landing">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg tabular-nums">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
