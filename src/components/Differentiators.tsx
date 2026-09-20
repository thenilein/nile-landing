"use client";

import { motion } from "framer-motion";
import { DIFFERENTIATORS } from "@/content/site";
import { Icon } from "./Icon";

export function Differentiators() {
  return (
    <section className="section-padding" id="differentiators">
      <div className="container-landing">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">Why Nile POS</p>
          <h2 className="font-display text-display mb-4">
            What sets us apart.
          </h2>
          <p className="text-body-lg text-muted max-w-xl mx-auto">
            Not just billing. A complete business stack built for Indian retail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "800px" }}
            >
              <motion.div
                className="glass-card p-8 group hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-shadow duration-500 h-full cursor-default"
                whileHover={{
                  rotateX: -4,
                  rotateY: 4,
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-500"
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                >
                  <Icon name={d.icon} size={22} />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-fg mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
