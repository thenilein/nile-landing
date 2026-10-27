"use client";

export function FeatureSnippet({ type }: { type: string }) {
  switch (type) {
    case "gst":
      return (
        <div className="rounded border border-slate-300 bg-white p-3 font-mono text-[11px] space-y-1.5">
          <div className="flex justify-between text-slate-500">
            <span>INV-2048 · Interstate</span>
            <span className="text-emerald-700 font-bold">IGST 18%</span>
          </div>
          <div className="flex justify-between text-slate-900 font-semibold">
            <span>Taxable</span>
            <span>₹50,000.00</span>
          </div>
          <div className="flex justify-between text-slate-900 font-semibold">
            <span>IGST</span>
            <span>₹9,000.00</span>
          </div>
          <div className="border-t border-slate-200 pt-1.5 flex justify-between font-bold text-slate-900">
            <span>Total</span>
            <span>₹59,000.00</span>
          </div>
          <div className="text-slate-500">E-way · Part A ready</div>
        </div>
      );
    case "billing":
      return (
        <div className="rounded border border-slate-300 bg-slate-50 p-3 space-y-2 text-[11px]">
          {[
            ["Scan", "Item added"],
            ["UPI", "Paid"],
            ["Print", "Receipt out"],
          ].map(([a, b]) => (
            <div key={a} className="flex justify-between font-semibold">
              <span className="text-slate-500">{a}</span>
              <span className="text-emerald-700">{b}</span>
            </div>
          ))}
        </div>
      );
    case "branch":
      return (
        <div className="rounded border border-slate-300 bg-white p-3 space-y-2 text-[11px]">
          {["Madurai Main", "Tiruppur", "Coimbatore"].map((b, i) => (
            <div key={b} className="flex items-center gap-2 font-semibold">
              <span
                className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-emerald-600" : "bg-slate-400"}`}
              />
              <span className="text-slate-900 flex-1">{b}</span>
              <span className="text-slate-500">{i === 2 ? "Syncing" : "Live"}</span>
            </div>
          ))}
        </div>
      );
    case "reports":
      return (
        <div className="rounded border border-slate-300 bg-white p-3">
          <div className="flex items-end gap-1 h-14">
            {[35, 52, 44, 70, 62, 88, 76].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? "#16a34a" : "rgba(22,163,74,0.25)",
                }}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Sales · last 7 days
          </p>
        </div>
      );
    case "rbac":
      return (
        <div className="rounded border border-slate-300 bg-white p-3 text-[11px] space-y-2">
          {[
            ["Cashier", "Bill · Pay"],
            ["Manager", "Discount · Refund"],
            ["Owner", "Full access"],
          ].map(([role, perms]) => (
            <div key={role} className="flex justify-between gap-3 font-semibold">
              <span className="text-slate-900">{role}</span>
              <span className="text-slate-500 truncate">{perms}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}
