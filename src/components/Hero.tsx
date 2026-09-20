"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SITE, HERO_STATS } from "@/content/site";
import { useLogin } from "@/context/LoginContext";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { open: openLogin } = useLogin();

  // Lightweight mouse tracking with RAF throttle
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        setTilt({ x: -y, y: x });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen" id="hero">
      {/* Animated background orbs — CSS animations for zero jank */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/6 blur-[100px] animate-float-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-landing pt-32 pb-20 lg:pt-44 lg:pb-28 relative">
        {/* Hero text */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          {/* Badge */}
          <motion.div
            className="badge mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now with Zoho Books sync
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease }}
          >
            <span className="gradient-text">{SITE.tagline}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-body-lg text-muted max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {SITE.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={openLogin}
              className="btn-primary text-base px-8 py-3.5 group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {SITE.cta.primary}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </motion.button>
            <motion.a
              href="#demo"
              className="btn-secondary text-base px-8 py-3.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {SITE.cta.secondary}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D Product screenshot — mouse-tracking tilt via CSS transform */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 1, ease }}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 border border-border/50 transition-transform duration-700 ease-out gpu-accel"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg)`,
            }}
          >
            {/* Glow ring */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-accent/10 pointer-events-none z-10" />

            {/* Browser chrome */}
            <div className="bg-surface-elevated flex items-center gap-2 px-4 py-3 border-b border-border/50 relative z-20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-muted text-center border border-border/50 flex items-center justify-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  app.nilepos.in
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-white p-6 lg:p-8 min-h-[400px] lg:min-h-[500px] relative z-20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-fg">Dashboard</h3>
                  <p className="text-xs text-muted">Today, 20 Sep 2026</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-lg bg-accent/10 text-accent font-medium">Main Store</span>
                  <span className="text-xs px-3 py-1.5 rounded-lg bg-surface-elevated text-muted">All Outlets</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Today's Sales", value: "₹47,820", change: "+12.5%", color: "text-accent", bg: "bg-accent/10" },
                  { label: "Orders", value: "156", change: "+8.3%", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { label: "Items Sold", value: "423", change: "+15.1%", color: "text-violet-600", bg: "bg-violet-50" },
                  { label: "Avg. Order", value: "₹306", change: "+4.2%", color: "text-amber-600", bg: "bg-amber-50" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-xl bg-surface-elevated border border-border/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  >
                    <p className="text-xs text-muted mb-1">{stat.label}</p>
                    <p className="text-xl font-display font-semibold text-fg">{stat.value}</p>
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${stat.bg} ${stat.color}`}>{stat.change}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl bg-surface-elevated border border-border/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-fg">Revenue (Last 30 days)</span>
                    <span className="text-xs text-muted">₹14.2L total</span>
                  </div>
                  <div className="h-40 flex items-end gap-[3px]">
                    {[40,65,45,80,55,90,70,95,60,85,75,100,50,70,88,62,78,92,68,82,55,75,90,65,80,72,95,58,85,76].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-accent/20 rounded-t-sm hover:bg-accent/40 transition-colors cursor-pointer"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${h}%` } : {}}
                        transition={{ delay: 1.2 + i * 0.02, duration: 0.6, ease }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-surface-elevated border border-border/30 p-4">
                  <span className="text-xs font-medium text-fg">Top Items</span>
                  <div className="mt-3 space-y-2.5">
                    {[
                      { name: "Masala Dosa", count: "42", pct: 85 },
                      { name: "Filter Coffee", count: "38", pct: 76 },
                      { name: "Vada (2pc)", count: "31", pct: 62 },
                      { name: "Idli Set", count: "27", pct: 54 },
                      { name: "Poori Masala", count: "22", pct: 44 },
                    ].map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-fg">{item.name}</span>
                          <span className="text-muted">{item.count}</span>
                        </div>
                        <div className="h-1.5 bg-border/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent/40 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${item.pct}%` } : {}}
                            transition={{ delay: 1.4, duration: 0.8, ease }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow underneath */}
          <div className="absolute -bottom-8 left-[10%] right-[10%] h-16 bg-accent/15 blur-[50px] rounded-full animate-pulse-slow" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="text-2xl lg:text-3xl font-display font-bold text-fg group-hover:gradient-text transition-all">
                  {stat.value}
                </span>
                <p className="text-caption text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
