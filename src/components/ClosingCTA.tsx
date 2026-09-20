"use client";

import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import { useLogin } from "@/context/LoginContext";

export function ClosingCTA() {
  const { open: openLogin } = useLogin();

  return (
    <section className="relative overflow-hidden bg-fg" id="cta">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/8 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-landing section-padding relative">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-headline text-white mb-6">
            Start billing today.
          </h2>
          <p className="text-body-lg text-white/60 mb-10">
            Free forever for solo shops. No credit card required.
          </p>
          <motion.button
            onClick={openLogin}
            className="btn-primary text-base px-10 py-4 shadow-xl shadow-accent/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {SITE.cta.primary}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
