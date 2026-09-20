// ─── Nile POS Landing Page — All Content ──────────────────────────
// Single source of truth for every string on the page.
// Edit here, never in JSX.

export const SITE = {
  name: "Nile POS",
  tagline: "Billing, sorted.",
  description:
    "GST invoicing, inventory, and purchasing in one place. From ₹0.",
  url: "https://nilepos.in",
  cta: { primary: "Start Free", secondary: "Book a Demo" },
  announcement: "Free for solo shops. Book a demo →",
  port: 3001,
};

export const NAV_LINKS = [
  {
    label: "Features",
    href: "#features",
    children: [
      { label: "POS Billing", href: "#billing-flow", icon: "receipt" },
      { label: "Inventory", href: "#feature-inventory", icon: "package" },
      { label: "Purchases", href: "#feature-purchases", icon: "truck" },
      { label: "GST Compliance", href: "#gst", icon: "shield" },
      { label: "Reports", href: "#reports-gallery", icon: "chart" },
      { label: "Multi-outlet", href: "#feature-multioutlet", icon: "store" },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export const HERO_STATS = [
  { value: "15+", label: "Report types" },
  { value: "5", label: "Document types" },
  { value: "∞", label: "Unlimited outlets" },
];

export const TRUST_LOGOS = [
  { name: "Partner 1", placeholder: true },
  { name: "Partner 2", placeholder: true },
  { name: "Partner 3", placeholder: true },
  { name: "Partner 4", placeholder: true },
  { name: "Partner 5", placeholder: true },
  { name: "Partner 6", placeholder: true },
];

export const PRODUCT_TABS = [
  {
    id: "pos",
    label: "POS Billing",
    headline: "8-second bills.",
    description:
      "Scan, add, pay, print. Split tender, held tickets, floor maps, and KOT — all in one screen.",
    features: [
      "Barcode scanner support",
      "Split tender payments",
      "Thermal receipt printing",
      "Held tickets & recall",
      "Floor map & table management",
      "KOT kitchen routing",
      "Shift management & Z-reports",
      "Offline mode with sync",
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    headline: "Stock, always current.",
    description:
      "Real-time stock across every outlet. Batch tracking, barcodes, expiry dates, and inter-outlet transfers.",
    features: [
      "Real-time per-outlet stock",
      "Batch & expiry tracking",
      "Serial number tracking",
      "Inter-outlet transfers",
      "Barcode generation",
      "Price lists & customer groups",
      "Repack rules",
      "Product variants",
    ],
  },
  {
    id: "purchases",
    label: "Purchases",
    headline: "PO to payment, covered.",
    description:
      "The full purchase cycle: orders, receives, bills, payments, returns, and vendor credits.",
    features: [
      "Purchase orders",
      "Partial & full receives",
      "Vendor bills & payments",
      "Purchase returns",
      "Vendor credits",
      "Vendor management",
    ],
  },
  {
    id: "accounting",
    label: "Accounting",
    headline: "Books that balance.",
    description:
      "Customer payments, vendor payments, receivables — all automatically reconciled. Zoho Books sync included.",
    features: [
      "Customer payment receipts",
      "Vendor payment tracking",
      "Multi-invoice apply",
      "Zoho Books journal sync",
      "Accounting CSV export",
      "Receivables tracking",
    ],
  },
  {
    id: "reports",
    label: "Reports",
    headline: "Every number, one click.",
    description:
      "15+ reports: sales analytics, inventory valuation, aging, movement, receivables, purchases, and audit trail.",
    features: [
      "Sales analytics & breakdown",
      "Inventory valuation",
      "Inventory aging & movement",
      "Receivables report",
      "Purchase reports",
      "Activity audit trail",
      "Scheduled email reports",
      "Shift Z-reports",
    ],
  },
];

export const BILLING_STEPS = [
  {
    step: 1,
    title: "Scan",
    description: "Barcode scanned, item added instantly.",
    icon: "scan",
  },
  {
    step: 2,
    title: "Line added",
    description: "Quantity, customisations, notes — all inline.",
    icon: "plus",
  },
  {
    step: 3,
    title: "Tax auto-applied",
    description: "CGST + SGST or IGST computed per line by place of supply.",
    icon: "calculator",
  },
  {
    step: 4,
    title: "Payment",
    description: "Cash, UPI, card — or split across methods.",
    icon: "wallet",
  },
  {
    step: 5,
    title: "Print",
    description: "Thermal receipt printed. Cash drawer opens.",
    icon: "printer",
  },
];

export const FEATURES_DEEP = [
  {
    id: "invoicing",
    eyebrow: "01 · Tax Compliance",
    headline: "GST, handled.",
    description:
      "CGST, SGST, IGST — computed per line, split by place of supply. HSN/SAC codes, tax exemptions, and e-way bills built in.",
    points: [
      "Per-line GST computation",
      "Interstate IGST detection",
      "HSN/SAC codes",
      "E-way bill generation",
      "Tax exemptions",
      "GSTIN management",
    ],
  },
  {
    id: "inventory",
    eyebrow: "02 · Inventory",
    headline: "Stock that counts itself.",
    description:
      "Real-time across every outlet. Batch tracking, barcodes, expiry dates, serial numbers, and repack rules.",
    points: [
      "Multi-outlet real-time stock",
      "Batch & serial tracking",
      "Expiry date management",
      "Barcode generation",
      "Inter-outlet transfers",
      "Repack rules (1kg → 10×100g)",
    ],
  },
  {
    id: "purchases",
    eyebrow: "03 · Purchasing",
    headline: "Buy to bill to credit.",
    description:
      "Purchase orders, vendor bills, receives, returns, vendor credits — the full cycle.",
    points: [
      "Purchase orders",
      "Partial/full receives",
      "Vendor bills",
      "Vendor payments",
      "Purchase returns",
      "Vendor credits",
    ],
  },
  {
    id: "payments",
    eyebrow: "04 · Payments",
    headline: "Money in. Money out.",
    description:
      "Customer payments against invoices. Vendor payments against bills. Always reconciled.",
    points: [
      "Multi-invoice payment application",
      "Customer payment receipts",
      "Vendor payment tracking",
      "Unpaid invoice/bill lists",
      "Payment terms & due dates",
      "Zoho Books sync",
    ],
  },
  {
    id: "reports",
    eyebrow: "05 · Reports",
    headline: "Fifteen reports. Zero guesswork.",
    description:
      "Sales, inventory valuation, aging, movement, receivables, purchases, audit trail — all in one place.",
    points: [
      "Sales analytics & breakdown",
      "Inventory valuation & aging",
      "Inventory movement",
      "Receivables report",
      "Purchase reports",
      "Audit trail with entity tracking",
    ],
  },
  {
    id: "multioutlet",
    eyebrow: "06 · Multi-outlet",
    headline: "Every outlet. One dashboard.",
    description:
      "Inter-outlet transfers, outlet-scoped stock, staff assignments, per-outlet billing.",
    points: [
      "Unlimited outlets",
      "Outlet-scoped inventory",
      "Inter-outlet transfers",
      "Staff assignment per outlet",
      "Location map view",
      "Per-outlet billing profiles",
    ],
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Offline Desktop POS",
    description: "Bills go through even when the internet doesn't. Syncs when you're back.",
    icon: "wifi-off",
  },
  {
    title: "Multi-outlet + Transfers",
    description: "Real-time stock across locations. Transfer between outlets with approval flows.",
    icon: "building",
  },
  {
    title: "Product Variants",
    description: "Size, colour, weight — tracked per variant with unique SKU and barcode.",
    icon: "layers",
  },
  {
    title: "Full Purchase Cycle",
    description: "PO → Receive → Bill → Payment → Return → Vendor Credit. End to end.",
    icon: "refresh",
  },
  {
    title: "Roles & Audit Trail",
    description: "Cashier to admin with capability-based access. Every action logged.",
    icon: "shield",
  },
  {
    title: "Zoho Books Sync",
    description: "Journal entries synced to Zoho Books automatically. Your CA will love it.",
    icon: "link",
  },
  {
    title: "Partner API",
    description: "API keys, rate limiting, scoped access. Build on top of Nile POS.",
    icon: "code",
  },
];

export const COMPARISON = {
  headers: ["Feature", "Nile POS", "Typical Cloud Billing", "Legacy Desktop"],
  rows: [
    ["POS Billing", true, true, false],
    ["Inventory Management", true, "Basic", true],
    ["Full Purchase Cycle", true, false, "Partial"],
    ["Vendor Credits", true, false, false],
    ["Multi-outlet + Transfers", true, false, false],
    ["Offline Mode", true, false, true],
    ["Barcode Scanning", true, true, "Partial"],
    ["GST Compliance", true, true, true],
    ["Role-based Access", true, "Partial", false],
    ["API Access", true, "Partial", false],
  ],
};

export const GST_TABS = [
  {
    id: "rates",
    label: "GST Rates & HSN",
    content:
      "Configure custom GST rates, map HSN/SAC codes per item, and toggle tax-inclusive or exclusive pricing. Nile POS computes CGST, SGST, IGST, and Cess automatically on every line item.",
  },
  {
    id: "pos",
    label: "Place of Supply",
    content:
      "Interstate transactions automatically apply IGST instead of CGST+SGST. Place-of-supply logic is built into every sales order and invoice.",
  },
  {
    id: "eway",
    label: "E-Way Bills",
    content:
      "Generate e-way bills directly from sales invoices. Part A and Part B details, vehicle number, transporter ID — all captured in one flow.",
  },
  {
    id: "gstin",
    label: "GSTIN Management",
    content:
      "Store and validate GSTINs for your business and your customers. Automatic state code extraction for interstate detection.",
  },
];

export const REPORTS_GALLERY = [
  {
    category: "Transaction",
    reports: [
      { name: "Sales Report", description: "Revenue by period, item, category, outlet" },
      { name: "Purchase Report", description: "Purchase orders, bills, and payments summary" },
      { name: "Payments Report", description: "All customer and vendor payments with reconciliation" },
      { name: "Receivables", description: "Outstanding customer balances and aging" },
    ],
  },
  {
    category: "Inventory",
    reports: [
      { name: "Inventory Valuation", description: "Current stock value across all outlets" },
      { name: "Inventory Aging", description: "Stock age analysis for expiry management" },
      { name: "Inventory Movement", description: "In/out flow of stock over time" },
    ],
  },
  {
    category: "Activity",
    reports: [
      { name: "Audit Trail", description: "Every action logged with user, entity, and timestamp" },
      { name: "Saved Reports", description: "Save custom report configurations for quick access" },
      { name: "Scheduled Reports", description: "Automated email delivery on a cron schedule" },
    ],
  },
  {
    category: "POS",
    reports: [
      { name: "Z-Report", description: "Shift-end summary: sales, payments, cash movements" },
      { name: "Sales Analytics", description: "Real-time charts of orders, revenue, and trends" },
    ],
  },
];

export const INDUSTRIES = [
  { name: "Retail", description: "Multi-outlet retail with barcode billing, stock tracking, and customer loyalty." },
  { name: "Wholesale", description: "Bulk pricing, purchase cycles, vendor credits, and inter-warehouse transfers." },
  { name: "Distribution", description: "Purchase orders, delivery challans, e-way bills, and rider management." },
  { name: "Restaurant", description: "Table management, KOT routing, floor maps, and dine-in/takeaway/delivery." },
  { name: "Pharmacy", description: "Batch tracking, expiry management, serial numbers, and GST compliance." },
  { name: "Hardware", description: "Product variants, barcode generation, and multi-outlet inventory." },
  { name: "Apparel", description: "Size/colour variants, barcode per SKU, and price list management." },
  { name: "Mobile & Electronics", description: "Serial number tracking, warranty management, and IMEI records." },
];

export const EVERYWHERE = [
  { title: "Desktop App", description: "Electron-based POS for Windows, Mac, and Linux.", icon: "monitor" },
  { title: "Web Dashboard", description: "Admin dashboard accessible from any browser.", icon: "globe" },
  { title: "Offline Mode", description: "Queue sales offline. Auto-sync when back online.", icon: "wifi-off" },
  { title: "Real-time Sync", description: "SSE-powered live updates across all terminals.", icon: "zap" },
  { title: "Multi-user", description: "Role-based access for your entire team.", icon: "users" },
];

export const METRICS = [
  { value: "15+", label: "Report Types", note: "" },
  { value: "5", label: "Document Types", note: "SO · Invoice · Credit Note · Challan · E-Way Bill" },
  { value: "40+", label: "POS Features", note: "" },
  { value: "100%", label: "GST Compliant", note: "" },
];

export const TESTIMONIALS = [
  {
    quote: "We moved from Tally to Nile POS and our billing time went from minutes to seconds. The POS is incredibly fast.",
    author: "Retail Store Owner",
    business: "Multi-outlet retail chain",
    placeholder: true,
  },
  {
    quote: "The purchase cycle — from PO to vendor credit — is something I've never seen in a billing app this affordable.",
    author: "Wholesale Distributor",
    business: "FMCG distribution",
    placeholder: true,
  },
  {
    quote: "Table management and KOT routing made our kitchen chaos disappear. And it works offline during peak hours.",
    author: "Restaurant Owner",
    business: "Quick-service restaurant",
    placeholder: true,
  },
];

export const ONBOARDING_STEPS = [
  { step: 1, title: "Data Import", description: "Import your products, customers, and vendors via CSV." },
  { step: 2, title: "Invoice Setup", description: "Configure your invoice template, GST details, and number series." },
  { step: 3, title: "Staff Training", description: "Set up roles, assign staff to outlets, and run a test bill." },
  { step: 4, title: "Go Live", description: "Start billing. We're a call away if you need help." },
];

export const PRICING = {
  toggle: { monthly: "Monthly", yearly: "Yearly" },
  plans: [
    {
      name: "Free",
      price: { monthly: "₹0", yearly: "₹0" },
      period: "forever",
      description: "For solo shops getting started.",
      features: [
        "1 outlet",
        "1 user",
        "POS billing",
        "Inventory management",
        "GST invoicing",
        "Thermal printing",
        "Basic reports",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: { monthly: "₹999", yearly: "₹799" },
      period: "/outlet/month",
      description: "For growing businesses.",
      features: [
        "Unlimited outlets",
        "Unlimited users",
        "All POS features",
        "Full purchase cycle",
        "Advanced reports",
        "Scheduled reports",
        "Zoho Books sync",
        "Role-based access",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      period: "",
      description: "For chains and franchises.",
      features: [
        "Everything in Pro",
        "Partner API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "On-site training",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
};

export const FAQS = [
  {
    question: "Is Nile POS really free?",
    answer: "Yes. The Free plan includes 1 outlet, 1 user, POS billing, inventory, GST invoicing, and basic reports. No credit card required.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes. The desktop POS app queues sales locally when offline and syncs automatically when the internet is restored.",
  },
  {
    question: "What about GST compliance?",
    answer: "Nile POS handles CGST, SGST, IGST, and Cess computation per line item. HSN/SAC codes, place-of-supply logic, tax exemptions, GSTIN management, and e-way bill generation are all built in.",
  },
  {
    question: "Can I manage multiple outlets?",
    answer: "Yes. Create unlimited outlets, assign staff, track inventory per location, and transfer stock between outlets with approval flows.",
  },
  {
    question: "Does it support barcode scanning?",
    answer: "Yes. Any USB or Bluetooth barcode scanner that works as a keyboard input device (HID) is supported. You can also generate and print barcode labels from within the app.",
  },
  {
    question: "What printers are supported?",
    answer: "Thermal receipt printers (58mm/80mm) via USB, network TCP, or serial port. ESC/POS commands for receipt printing and cash drawer control.",
  },
  {
    question: "Can I import my existing data?",
    answer: "Yes. Products, customers, and vendors can be imported via CSV. Transaction number series can be configured to continue from your existing sequence.",
  },
  {
    question: "Is there a mobile app?",
    answer: "The admin dashboard is accessible from any mobile browser. The POS billing app is a desktop application optimized for counter use with barcode scanners and receipt printers.",
  },
  {
    question: "What integrations are available?",
    answer: "Zoho Books for accounting journal sync, WhatsApp Cloud API for order notifications, MSG91 for SMS, and a Partner API for custom integrations.",
  },
  {
    question: "How is my data secured?",
    answer: "Role-based access control with capability-level permissions. Complete audit trail of every action. API keys with rate limiting and scoped access for Partner API.",
  },
  {
    question: "Can I manage recipes and BOMs?",
    answer: "Yes. Create recipes with bill-of-materials for finished goods. Raw material consumption is tracked automatically when the finished product is sold.",
  },
  {
    question: "Do you support e-invoicing?",
    answer: "E-invoicing (NIC/IRP portal integration) is on our roadmap but not yet available. GST tax computation, HSN codes, and e-way bills are fully shipped.",
  },
];

export const FOOTER = {
  product: [
    { label: "POS Billing", href: "#billing-flow" },
    { label: "Inventory", href: "#feature-inventory" },
    { label: "Purchases", href: "#feature-purchases" },
    { label: "Reports", href: "#reports-gallery" },
    { label: "GST Compliance", href: "#gst" },
  ],
  solutions: [
    { label: "Retail", href: "#industries" },
    { label: "Restaurant", href: "#industries" },
    { label: "Wholesale", href: "#industries" },
    { label: "Pharmacy", href: "#industries" },
    { label: "Distribution", href: "#industries" },
  ],
  resources: [
    { label: "Invoice Formats", href: "#" },
    { label: "Purchase Order Templates", href: "#" },
    { label: "Credit Note Formats", href: "#" },
    { label: "GST Guide", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#demo" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};
