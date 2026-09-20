"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT_TABS } from "@/content/site";
import { Icon } from "./Icon";

const TAB_ICONS: Record<string, string> = {
  pos: "receipt",
  inventory: "package",
  purchases: "truck",
  accounting: "wallet",
  reports: "chart",
};

export function ProductSwitcher() {
  const [active, setActive] = useState(0);
  const tab = PRODUCT_TABS[active];

  return (
    <section className="section-padding" id="features">
      <div className="container-landing">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">Product Overview</p>
          <h2 className="section-headline mb-4">
            Everything your business needs.
          </h2>
          <p className="text-body text-muted max-w-xl mx-auto">
            Five modules that work together seamlessly. One login, one dashboard, one source of truth.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {PRODUCT_TABS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-medium transition-colors duration-300 ${
                active === i
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-surface-elevated text-muted hover:text-fg hover:bg-border/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon name={TAB_ICONS[t.id]} size={16} />
              {t.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-title mb-4">{tab.headline}</h3>
              <p className="text-body text-muted mb-8">{tab.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {tab.features.map((f, fi) => (
                  <motion.div
                    key={f}
                    className="flex items-start gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.05, duration: 0.3 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 shrink-0">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-fg">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: illustration with 3D */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${tab.id}`}
              initial={{ opacity: 0, x: 30, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -30, rotateY: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "800px" }}
            >
              <motion.div
                className="glass-card p-6 rounded-2xl"
                whileHover={{ rotateX: -3, rotateY: 3, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {tab.id === "pos" && <POSMockup />}
                {tab.id === "inventory" && <InventoryMockup />}
                {tab.id === "purchases" && <PurchaseMockup />}
                {tab.id === "accounting" && <AccountingMockup />}
                {tab.id === "reports" && <ReportsMockup />}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─── Mini Mockups ──────────────────────── */

function POSMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <span className="text-sm font-semibold text-fg">POS Register</span>
        <span className="badge">Table 4</span>
      </div>
      {[
        { name: "Masala Dosa", qty: 2, price: "₹160" },
        { name: "Filter Coffee", qty: 3, price: "₹150" },
        { name: "Vada (2pc)", qty: 1, price: "₹80" },
      ].map((item) => (
        <div key={item.name} className="flex items-center justify-between py-2 text-sm">
          <div>
            <span className="text-fg font-medium">{item.name}</span>
            <span className="text-muted ml-2">×{item.qty}</span>
          </div>
          <span className="font-medium text-fg">{item.price}</span>
        </div>
      ))}
      <div className="border-t border-border/30 pt-3 mt-2">
        <div className="flex justify-between text-xs text-muted mb-1"><span>CGST (2.5%)</span><span>₹9.75</span></div>
        <div className="flex justify-between text-xs text-muted mb-2"><span>SGST (2.5%)</span><span>₹9.75</span></div>
        <div className="flex justify-between text-base font-bold text-fg"><span>Total</span><span>₹409.50</span></div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2">
        {["Cash", "UPI", "Card"].map((m) => (
          <button key={m} className="py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors">{m}</button>
        ))}
      </div>
    </div>
  );
}

function InventoryMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <span className="text-sm font-semibold text-fg">Stock Overview</span>
        <span className="text-xs text-muted">3 outlets</span>
      </div>
      {[
        { name: "Basmati Rice 5kg", sku: "GRC-001", stock: 245, status: "In Stock" },
        { name: "Toor Dal 1kg", sku: "GRC-042", stock: 18, status: "Low Stock" },
        { name: "Sugar 1kg", sku: "GRC-015", stock: 156, status: "In Stock" },
        { name: "Cooking Oil 1L", sku: "GRC-028", stock: 0, status: "Out" },
      ].map((item) => (
        <div key={item.sku} className="flex items-center justify-between py-2 text-sm">
          <div><span className="text-fg font-medium">{item.name}</span><span className="text-muted text-xs ml-2">{item.sku}</span></div>
          <div className="flex items-center gap-3">
            <span className="text-fg font-medium">{item.stock}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === "In Stock" ? "bg-emerald-50 text-emerald-600" : item.status === "Low Stock" ? "bg-amber-50 text-amber-600" : "bg-red-50 text-red-600"}`}>{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PurchaseMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <span className="text-sm font-semibold text-fg">Purchase Orders</span>
        <button className="text-xs text-accent font-medium">+ New PO</button>
      </div>
      {[
        { id: "PO-0087", vendor: "Metro Wholesale", amount: "₹24,500", status: "Received" },
        { id: "PO-0086", vendor: "Reliance Retail", amount: "₹18,200", status: "Billed" },
        { id: "PO-0085", vendor: "D-Mart Supply", amount: "₹31,800", status: "Pending" },
      ].map((po) => (
        <div key={po.id} className="flex items-center justify-between py-2 text-sm">
          <div><span className="text-accent font-medium">{po.id}</span><span className="text-muted ml-2">{po.vendor}</span></div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-fg">{po.amount}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${po.status === "Received" ? "bg-emerald-50 text-emerald-600" : po.status === "Billed" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"}`}>{po.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AccountingMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <span className="text-sm font-semibold text-fg">Payment Receipts</span>
        <span className="badge">Zoho Synced</span>
      </div>
      {[
        { id: "PMT-412", customer: "Ravi Traders", amount: "₹12,500", invoices: "INV-1241, INV-1238" },
        { id: "PMT-411", customer: "Kumar Stores", amount: "₹8,900", invoices: "INV-1235" },
        { id: "PMT-410", customer: "Priya Mart", amount: "₹22,100", invoices: "INV-1230, INV-1229, INV-1225" },
      ].map((pmt) => (
        <div key={pmt.id} className="py-2 text-sm">
          <div className="flex items-center justify-between"><span className="text-accent font-medium">{pmt.id}</span><span className="font-medium text-fg">{pmt.amount}</span></div>
          <div className="flex items-center justify-between mt-0.5"><span className="text-muted text-xs">{pmt.customer}</span><span className="text-muted text-xs">Applied: {pmt.invoices}</span></div>
        </div>
      ))}
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <span className="text-sm font-semibold text-fg">Sales Analytics</span>
        <span className="text-xs text-muted">Last 7 days</span>
      </div>
      <div className="h-32 flex items-end gap-1.5">
        {[45, 62, 38, 75, 55, 88, 70].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full bg-accent/20 rounded-t-sm hover:bg-accent/40 transition-colors" style={{ height: `${h}%` }} />
            <span className="text-[10px] text-muted">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 pt-2">
        {[{ label: "Revenue", value: "₹3.2L" },{ label: "Orders", value: "847" },{ label: "Avg Order", value: "₹378" }].map((s) => (
          <div key={s.label} className="text-center p-2 rounded-lg bg-surface-elevated">
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-sm font-semibold text-fg">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
