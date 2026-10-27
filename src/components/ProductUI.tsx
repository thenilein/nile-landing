"use client";

/**
 * Faithful UI recreation of nile-client (Home + shell)
 * and the POS desktop Register counter.
 * Styled to match: slate borders, emerald accent, bold uppercase labels, dark sidebar.
 */

type Variant = "dashboard" | "pos" | "invoices";

const NAV = ["Home", "Customers", "Invoices", "GST / GSTR-1"];

const METRICS: [string, string][] = [
  ["Invoices this week", "186"],
  ["Invoiced this week", "₹2,48,640.00"],
  ["Payments this week", "₹2,11,200.00"],
  ["Outstanding", "₹4,22,800.00"],
  ["Overdue", "7"],
  ["WhatsApp failures", "2"],
];

const ACTIVITY = [
  ["Invoice Issued", "INV-1842 · Shah Traders · just now"],
  ["Payment Received", "UPI · ₹24,800.00 · 2 min ago"],
  ["Customer Created", "GreenLeaf Pharmacy · 18 min ago"],
  ["GSTR-1 Export Generated", "Sep 2026 · ready"],
];

const ALERTS = [
  { title: "Overdue invoice", detail: "INV-1791 · ₹18,400", severity: "High" },
  { title: "Failed WhatsApp delivery", detail: "INV-1838", severity: "High" },
  { title: "Payment not matched", detail: "₹9,420 · review", severity: "Medium" },
];

const INVOICES = [
  ["INV-1842", "Shah Traders", "Issued", "₹24,800.00"],
  ["INV-1841", "GreenLeaf", "Paid", "₹9,420.00"],
  ["INV-1840", "Metro Retail", "Issued", "₹61,200.00"],
  ["INV-1839", "Apex Hardware", "Overdue", "₹12,050.00"],
];

const POS_ITEMS = [
  ["Rice 25kg", "₹1,250"],
  ["Sunflower oil 1L", "₹168"],
  ["Toor dal 1kg", "₹142"],
  ["Sugar 1kg", "₹48"],
  ["Tea dust 500g", "₹210"],
  ["Atta 5kg", "₹265"],
];

function Shell({
  children,
  active = "Home",
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className="flex h-full min-h-[320px] sm:min-h-[400px] overflow-hidden bg-[#FDFDFD] text-slate-900">
      <aside className="hidden sm:flex w-[132px] shrink-0 flex-col bg-slate-900 text-slate-200">
        <div className="px-3 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-400">
          Nilesoft
        </div>
        <nav className="flex-1 py-1">
          {NAV.map((item) => (
            <div
              key={item}
              className={`my-0.5 px-3 py-2.5 text-[13px] font-bold ${
                item === active
                  ? "bg-[#FDFDFD] text-slate-900"
                  : "text-slate-300"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="mx-3 my-2 border-t border-slate-700" />
          <div className="px-3 py-2.5 text-[13px] font-bold text-slate-300">
            POS Terminal
          </div>
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-h-10 items-center border-b border-slate-200 bg-white px-3 gap-3">
          <span className="sm:hidden text-[13px] font-bold uppercase text-emerald-700">
            Nilesoft
          </span>
          <div className="hidden sm:flex flex-1 max-w-md h-8 items-center rounded border border-slate-300 bg-slate-50 px-2 text-[12px] font-semibold text-slate-500">
            Search invoices, customers…
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden sm:inline-flex h-8 items-center rounded border border-slate-300 bg-white px-2.5 text-[12px] font-bold text-slate-700">
              + New
            </span>
            <span className="h-8 w-8 rounded border border-slate-300 bg-white" />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden bg-slate-100 p-2.5 sm:p-3">
          {children}
        </div>
      </div>
    </div>
  );
}

function DashboardUI() {
  return (
    <Shell active="Home">
      <div className="flex h-full flex-col gap-2.5 overflow-hidden">
        <div className="grid grid-cols-2 gap-2 xl:grid-cols-6">
          {METRICS.map(([label, value]) => (
            <div key={label} className="border border-slate-300 bg-white p-2.5">
              <p className="nile-label !text-[9px] !tracking-[0.1em] text-slate-600 line-clamp-1">
                {label}
              </p>
              <p className="mt-1.5 text-base sm:text-lg font-bold text-slate-900 tabular-nums">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2.5 lg:grid-cols-[1fr_280px]">
          <section className="min-h-0 overflow-hidden border border-slate-300 bg-white">
            <div className="border-b border-slate-300 bg-slate-50 px-3 py-1.5">
              <h3 className="nile-label !text-[10px] text-slate-800">Recent activity</h3>
            </div>
            <div className="space-y-1.5 bg-slate-100 p-2">
              {ACTIVITY.map(([title, detail]) => (
                <div key={title} className="border border-slate-200 bg-white p-2.5">
                  <p className="text-[12px] font-bold text-slate-900">{title}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="min-h-0 overflow-hidden border border-slate-300 bg-white hidden lg:block">
            <div className="border-b border-slate-300 bg-slate-50 px-3 py-1.5">
              <h3 className="nile-label !text-[10px] text-slate-800">Actionable alerts</h3>
            </div>
            <div className="space-y-1.5 bg-slate-100 p-2">
              {ALERTS.map((a) => (
                <div key={a.title} className="border border-slate-200 bg-white p-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[12px] font-bold text-slate-900">{a.title}</p>
                      <p className="mt-0.5 text-[11px] font-semibold text-slate-700">{a.detail}</p>
                    </div>
                    <span className="border border-rose-200 bg-rose-50 px-1.5 py-0.5 text-[10px] font-bold text-rose-700">
                      {a.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}

function InvoicesUI() {
  return (
    <Shell active="Invoices">
      <div className="flex h-full flex-col overflow-hidden border border-slate-300 bg-white">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
          <span className="nile-label !text-[10px]">Invoices</span>
          <div className="ml-auto flex gap-1.5">
            {["All", "Issued", "Paid", "Overdue"].map((f, i) => (
              <span
                key={f}
                className={`rounded border px-2 py-0.5 text-[10px] font-bold ${
                  i === 0
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-slate-300 bg-white text-slate-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 border-b border-slate-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
          <span>Invoice</span>
          <span>Customer</span>
          <span>Status</span>
          <span className="text-right">Amount</span>
        </div>
        {INVOICES.map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-4 gap-2 border-b border-slate-200 px-3 py-2.5 text-[12px] font-semibold last:border-0"
          >
            <span className="font-mono text-slate-600">{row[0]}</span>
            <span className="truncate text-slate-900">{row[1]}</span>
            <span
              className={
                row[2] === "Paid"
                  ? "text-emerald-700"
                  : row[2] === "Overdue"
                    ? "text-rose-700"
                    : "text-slate-700"
              }
            >
              {row[2]}
            </span>
            <span className="text-right tabular-nums text-slate-900">{row[3]}</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function PosUI() {
  return (
    <div className="flex h-full min-h-[320px] sm:min-h-[400px] overflow-hidden bg-slate-100 text-slate-900">
      <div className="flex min-w-0 flex-1 flex-col border-r border-slate-300 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
          <div>
            <p className="text-[13px] font-bold text-slate-900">Register</p>
            <p className="text-[10px] font-semibold text-emerald-700">Offline ready · counter PC</p>
          </div>
          <span className="rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800">
            No network · still billing
          </span>
        </div>
        <div className="flex gap-1.5 border-b border-slate-200 px-3 py-2 overflow-x-auto">
          {["All", "Grocery", "Oils", "Grains"].map((c, i) => (
            <span
              key={c}
              className={`shrink-0 rounded px-2.5 py-1 text-[11px] font-bold ${
                i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2.5 flex-1 content-start">
          {POS_ITEMS.map(([name, price]) => (
            <div
              key={name}
              className="rounded border border-slate-200 bg-slate-50 p-2.5 hover:border-emerald-300"
            >
              <p className="text-[12px] font-bold text-slate-900 leading-snug">{name}</p>
              <p className="mt-1 text-[12px] font-bold text-emerald-700">{price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex w-[240px] shrink-0 flex-col bg-white">
        <div className="border-b border-slate-200 px-3 py-2">
          <p className="text-[12px] font-bold text-slate-900">Current bill</p>
          <p className="text-[10px] font-semibold text-slate-500">Walk-in · Cash / UPI</p>
        </div>
        <div className="flex-1 space-y-2 p-3 text-[12px]">
          {[
            ["Rice 25kg × 1", "₹1,250"],
            ["Sunflower oil × 2", "₹336"],
            ["Toor dal × 1", "₹142"],
          ].map(([l, p]) => (
            <div key={l} className="flex justify-between font-semibold text-slate-800">
              <span>{l}</span>
              <span className="tabular-nums">{p}</span>
            </div>
          ))}
          <div className="border-t border-slate-200 pt-2 flex justify-between text-slate-600">
            <span>GST</span>
            <span>₹311.04</span>
          </div>
          <div className="flex justify-between text-[14px] font-bold text-slate-900">
            <span>Total</span>
            <span>₹2,039.04</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-slate-200 p-3">
          <button type="button" className="rounded border border-slate-300 py-2 text-[12px] font-bold">
            Hold
          </button>
          <button type="button" className="rounded bg-emerald-600 py-2 text-[12px] font-bold text-white">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductUI({
  variant = "dashboard",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-300 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        <div className="ml-1 flex-1 truncate rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-slate-500">
          {variant === "pos" ? "pos.thenile.in/register" : "app.thenile.in"}
        </div>
      </div>
      {variant === "dashboard" && <DashboardUI />}
      {variant === "invoices" && <InvoicesUI />}
      {variant === "pos" && <PosUI />}
    </div>
  );
}
