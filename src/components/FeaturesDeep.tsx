"use client";

import { FEATURES_DEEP } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function FeaturesDeep() {
  return (
    <div>
      {FEATURES_DEEP.map((feature, i) => (
        <section
          key={feature.id}
          id={`feature-${feature.id}`}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-surface-elevated"}`}
        >
          <div className="container-landing">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Text side */}
              <RevealSection className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="eyebrow mb-4">{feature.eyebrow}</p>
                <h2 className="font-display text-headline mb-4">
                  {feature.headline}
                </h2>
                <p className="text-body-lg text-muted mb-8">
                  {feature.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {feature.points.map((point, j) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                      style={{ animationDelay: `${j * 80}ms` }}
                    >
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 shrink-0">
                        <Icon name="check" size={14} />
                      </span>
                      <span className="text-sm text-fg">{point}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              {/* Visual side */}
              <RevealSection
                delay={200}
                className={i % 2 !== 0 ? "lg:order-1" : ""}
              >
                <FeatureVisual id={feature.id} />
              </RevealSection>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function FeatureVisual({ id }: { id: string }) {
  const visuals: Record<string, React.ReactNode> = {
    invoicing: (
      <div className="glass-card p-6 rounded-2xl">
        <div className="text-sm font-semibold text-fg mb-4 pb-3 border-b border-border/30">
          Tax Invoice #INV-001247
        </div>
        <div className="space-y-2 mb-4">
          {[
            { item: "Organic Ghee 1L", hsn: "0405", qty: 5, rate: "₹580", cgst: "₹72.50", sgst: "₹72.50", total: "₹3,045" },
            { item: "Basmati Rice 5kg", hsn: "1006", qty: 10, rate: "₹420", cgst: "₹26.25", sgst: "₹26.25", total: "₹4,252.50" },
          ].map((row) => (
            <div key={row.item} className="grid grid-cols-7 text-xs gap-2 py-1.5 border-b border-border/10">
              <span className="col-span-2 text-fg font-medium">{row.item}</span>
              <span className="text-muted text-center">{row.hsn}</span>
              <span className="text-center">{row.qty}</span>
              <span className="text-right">{row.rate}</span>
              <span className="text-right text-emerald-600">{row.cgst}</span>
              <span className="text-right font-medium">{row.total}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-xs gap-2">
          <span className="col-span-4" />
          <span className="text-right text-muted">Subtotal</span>
          <span className="col-span-2 text-right font-medium">₹7,100.00</span>
        </div>
        <div className="grid grid-cols-7 text-xs gap-2 text-emerald-600">
          <span className="col-span-4" />
          <span className="text-right">CGST</span>
          <span className="col-span-2 text-right">₹98.75</span>
        </div>
        <div className="grid grid-cols-7 text-xs gap-2 text-emerald-600">
          <span className="col-span-4" />
          <span className="text-right">SGST</span>
          <span className="col-span-2 text-right">₹98.75</span>
        </div>
        <div className="grid grid-cols-7 text-xs gap-2 font-bold mt-2 pt-2 border-t border-border/30">
          <span className="col-span-4" />
          <span className="text-right">Total</span>
          <span className="col-span-2 text-right text-accent">₹7,297.50</span>
        </div>
      </div>
    ),
    inventory: (
      <div className="glass-card p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-fg">Stock Dashboard</span>
          <div className="flex gap-1">
            {["Outlet A", "Outlet B", "All"].map((o) => (
              <span key={o} className={`text-xs px-2 py-1 rounded-md ${o === "All" ? "bg-accent text-white" : "bg-surface-elevated text-muted"}`}>{o}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total SKUs", value: "1,247" },
            { label: "Low Stock", value: "23" },
            { label: "Expiring Soon", value: "8" },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 rounded-xl bg-surface-elevated">
              <p className="text-lg font-display font-semibold text-fg">{s.value}</p>
              <p className="text-[10px] text-muted mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-700">
          ⚠️ <strong>Transfer pending:</strong> 50 units of &quot;Toor Dal 1kg&quot; from Outlet A → Outlet B
        </div>
      </div>
    ),
    purchases: (
      <div className="glass-card p-6 rounded-2xl">
        <div className="text-sm font-semibold text-fg mb-4">Purchase Cycle</div>
        <div className="space-y-3">
          {[
            { stage: "PO Created", status: "done", detail: "PO-0087 → Metro Wholesale" },
            { stage: "Received", status: "done", detail: "45 of 50 items received" },
            { stage: "Bill Created", status: "done", detail: "BILL-0156 ₹24,500" },
            { stage: "Payment Made", status: "current", detail: "₹20,000 paid — ₹4,500 pending" },
            { stage: "Credit Note", status: "pending", detail: "5 items returned" },
          ].map((s) => (
            <div key={s.stage} className="flex items-start gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                s.status === "done" ? "bg-emerald-100 text-emerald-600" :
                s.status === "current" ? "bg-accent text-white" :
                "bg-surface-elevated text-muted"
              }`}>
                {s.status === "done" ? <Icon name="check" size={12} /> : 
                 s.status === "current" ? <span className="w-2 h-2 rounded-full bg-white" /> :
                 <span className="w-2 h-2 rounded-full bg-border" />}
              </div>
              <div>
                <p className={`text-sm font-medium ${s.status === "pending" ? "text-muted" : "text-fg"}`}>{s.stage}</p>
                <p className="text-xs text-muted">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    payments: (
      <div className="glass-card p-6 rounded-2xl space-y-4">
        <div className="text-sm font-semibold text-fg mb-2">Payment Receipt #PMT-412</div>
        <div className="p-4 rounded-xl bg-surface-elevated">
          <div className="text-xs text-muted mb-1">Amount Received</div>
          <div className="text-2xl font-display font-bold text-fg">₹12,500.00</div>
          <div className="text-xs text-muted mt-1">From: Ravi Traders · UPI</div>
        </div>
        <div className="text-xs font-medium text-muted mb-2">Applied to Invoices:</div>
        <div className="space-y-2">
          {[
            { inv: "INV-1241", amount: "₹8,500", applied: "₹8,500", balance: "₹0" },
            { inv: "INV-1238", amount: "₹6,200", applied: "₹4,000", balance: "₹2,200" },
          ].map((row) => (
            <div key={row.inv} className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface-elevated">
              <span className="text-accent font-medium">{row.inv}</span>
              <span className="text-muted">₹{row.amount}</span>
              <span className="text-emerald-600 font-medium">{row.applied}</span>
              <span className="text-muted">Bal: {row.balance}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    reports: (
      <div className="glass-card p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-fg">Sales Analytics</span>
          <span className="text-xs text-muted">Sep 2026</span>
        </div>
        <div className="h-36 flex items-end gap-2">
          {[
            { h: 60, d: "W1" }, { h: 75, d: "W2" }, { h: 45, d: "W3" }, { h: 90, d: "W4" },
          ].map((bar) => (
            <div key={bar.d} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-gradient-to-t from-accent to-accent/40 rounded-t-md transition-all hover:from-accent hover:to-accent/60" style={{ height: `${bar.h}%` }} />
              <span className="text-[10px] text-muted">{bar.d}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Total Revenue", value: "₹12.4L" },
            { label: "Total Orders", value: "3,241" },
            { label: "Top Item", value: "Masala Dosa" },
            { label: "Top Category", value: "Beverages" },
          ].map((s) => (
            <div key={s.label} className="p-2 rounded-lg bg-surface-elevated">
              <p className="text-[10px] text-muted">{s.label}</p>
              <p className="text-sm font-semibold text-fg">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    multioutlet: (
      <div className="glass-card p-6 rounded-2xl space-y-4">
        <div className="text-sm font-semibold text-fg">Outlet Network</div>
        {/* Map-like display */}
        <div className="relative h-40 rounded-xl bg-surface-elevated overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10" />
          {[
            { name: "Main Store", x: "25%", y: "30%", status: "online" },
            { name: "Branch 2", x: "60%", y: "20%", status: "online" },
            { name: "Branch 3", x: "45%", y: "65%", status: "offline" },
            { name: "Warehouse", x: "75%", y: "55%", status: "online" },
          ].map((outlet) => (
            <div key={outlet.name} className="absolute" style={{ left: outlet.x, top: outlet.y }}>
              <div className="relative group">
                <div className={`w-4 h-4 rounded-full ${outlet.status === "online" ? "bg-accent" : "bg-muted"} ring-4 ${outlet.status === "online" ? "ring-accent/20" : "ring-muted/20"}`} />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-fg text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {outlet.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Active Outlets", value: "3/4" },
            { label: "Pending Transfers", value: "2" },
            { label: "Staff Assigned", value: "12" },
            { label: "Today's Orders", value: "156" },
          ].map((s) => (
            <div key={s.label} className="text-center p-2 rounded-lg bg-surface-elevated">
              <p className="text-sm font-semibold text-fg">{s.value}</p>
              <p className="text-[10px] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return visuals[id] || null;
}
