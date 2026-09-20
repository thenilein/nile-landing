"use client";

import { useState } from "react";
import { RevealSection } from "./RevealSection";

interface FormData {
  name: string;
  business: string;
  phone: string;
  city: string;
  businessType: string;
  interest: string;
}

export function DemoForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    business: "",
    phone: "",
    city: "",
    businessType: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    "Retail",
    "Wholesale",
    "Distribution",
    "Restaurant",
    "Pharmacy",
    "Hardware",
    "Apparel",
    "Other",
  ];

  const interests = [
    "POS Billing",
    "Inventory Management",
    "Full Suite",
    "Just Exploring",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to backend
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-border/50 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all";

  if (submitted) {
    return (
      <RevealSection className="section-padding" id="demo">
        <div className="container-landing">
          <div className="max-w-lg mx-auto text-center glass-card p-12 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-fg mb-3">
              Demo request received!
            </h3>
            <p className="text-sm text-muted">
              We&apos;ll reach out to you within 24 hours to schedule your personalised demo.
            </p>
          </div>
        </div>
      </RevealSection>
    );
  }

  return (
    <RevealSection className="section-padding" id="demo">
      <div className="container-landing">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow mb-4">Demo</p>
            <h2 className="section-headline mb-4">Book a demo.</h2>
            <p className="text-body text-muted">
              See Nile POS in action with a personalised walkthrough.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Praveen Kumar"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) =>
                    setForm({ ...form, business: e.target.value })
                  }
                  placeholder="Kumar Stores"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  Phone (+91) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="98765 43210"
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Bangalore"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  Business Type
                </label>
                <select
                  value={form.businessType}
                  onChange={(e) =>
                    setForm({ ...form, businessType: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="">Select type</option>
                  {businessTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-fg mb-1.5">
                  Interested In
                </label>
                <select
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="">Select interest</option>
                  {interests.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-3.5">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>

            <p className="text-xs text-muted text-center">
              No credit card required. We&apos;ll call you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </RevealSection>
  );
}
