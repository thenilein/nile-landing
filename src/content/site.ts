// ─── Nile POS Landing — All Content ───────────────────

export const SITE = {
  name: "Nile POS",
  tagline: "Bill fast. Keep stock. Stay GST ready.",
  description:
    "A billing counter that works even when internet is down. Built for shop owners and factory founders across Tamil Nadu and India.",
  url: "https://nilepos.in",
  cta: {
    primary: "Book a Free Demo",
    secondary: "See Pricing",
    demo: "Book a 30-minute demo",
  },
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@nilepos.in",
  address: "Chennai / Coimbatore, Tamil Nadu, India",
  gstin: "33AAAAA0000A1Z5",
};

export const NAV_LINKS = [
  { label: "Product", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Offline", href: "#offline" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const TRUST = {
  line: "Used by shops, distributors, and factories across Tamil Nadu and India.",
  logos: [
    "Metro Retail",
    "Coastal Distributors",
    "GreenLeaf Pharmacy",
    "Urban Kitchen",
    "Apex Hardware",
    "Silk Route Apparel",
    "Nova Electronics",
    "Summit Wholesale",
  ],
};

export const STATS: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  decimals?: number;
}[] = [
  { value: 12, suffix: "M+", label: "Bills made", prefix: "" },
  { value: 480, suffix: "Cr+", label: "Money handled", prefix: "₹" },
  { value: 99.9, suffix: "%", label: "System uptime", prefix: "", decimals: 1 },
  { value: 2000, suffix: "+", label: "Businesses", prefix: "" },
];

export const BENTO_FEATURES = [
  {
    id: "gst",
    title: "GST on every bill",
    description:
      "Tax calculates itself. CGST, SGST, IGST. HSN codes. E-way bill when you need it. Your CA gets clean numbers.",
    span: "lg:col-span-2",
    snippet: "gst",
  },
  {
    id: "billing",
    title: "Counter billing that is fast",
    description:
      "Scan barcode. Add item. Take UPI or cash. Print receipt. Your staff learns it in one morning.",
    span: "",
    snippet: "billing",
  },
  {
    id: "branch",
    title: "Many shops, one view",
    description:
      "See every outlet from one screen. Move stock between shops. Give each staff the right access.",
    span: "",
    snippet: "branch",
  },
  {
    id: "reports",
    title: "Reports that make sense",
    description:
      "Today’s sales. What is pending. What is overdue. Numbers you can trust before you talk to your CA.",
    span: "",
    snippet: "reports",
  },
  {
    id: "rbac",
    title: "Staff roles, not shared passwords",
    description:
      "Cashier bills. Manager discounts. Owner sees everything. Every action is saved.",
    span: "lg:col-span-2",
    snippet: "rbac",
  },
];

export const INTEGRATIONS = {
  eyebrow: "Works with what you already use",
  headline: "Keep your inventory. Use Nile for billing.",
  description:
    "You do not have to move stock into Nile. Run the Nile POS counter for fast billing. Connect it to Zoho Books, Zoho Inventory, or the stock system you already trust.",
  points: [
    {
      title: "Zoho Books",
      description: "Sales and journals reach your books. Your CA stays happy.",
      icon: "BookOpen",
    },
    {
      title: "Zoho Inventory",
      description: "Stock lives in Zoho. Nile bills from it at the counter.",
      icon: "Boxes",
    },
    {
      title: "Your own inventory system",
      description: "API and sync options so Nile becomes the billing front desk—not a forced stock move.",
      icon: "Cable",
    },
    {
      title: "Tally / Excel start",
      description: "Bring products and customers once. Keep billing on Nile while stock stays where you want.",
      icon: "FileSpreadsheet",
    },
  ],
};

export const OFFLINE = {
  eyebrow: "No internet? Still bill.",
  headline: "The counter keeps working. The shop does not wait for Wi‑Fi.",
  description:
    "Nile runs on a small computer at your shop. Bills are made right there—even with zero network. When the line comes back, sales sync to your office and integrations.",
  points: [
    {
      title: "Zero network needed to sell",
      description:
        "Power on. Open Nile. Bill customers. Internet can be off. The counter still works.",
    },
    {
      title: "Runs on a small shop PC",
      description:
        "Not a heavy server. A normal desktop or mini PC at the counter is enough. Low power. Low fuss.",
    },
    {
      title: "Syncs when the line returns",
      description:
        "Sales wait safely on the machine. When Wi‑Fi or mobile data is back, everything updates on its own.",
    },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  headline: "Start in a few days. Not months.",
  steps: [
    {
      step: 1,
      title: "Bring your list",
      description: "Products and customers from Excel or Tally. Keep your bill numbers.",
      mock: "import",
    },
    {
      step: 2,
      title: "Set GST once",
      description: "GSTIN, tax rates, and your shop details. Done.",
      mock: "setup",
    },
    {
      step: 3,
      title: "Connect stock if you want",
      description: "Use Nile stock—or keep Zoho / your system and only bill on Nile.",
      mock: "train",
    },
    {
      step: 4,
      title: "Bill at the counter",
      description: "Scan, pay, print. Works offline. Syncs later.",
      mock: "bill",
    },
  ],
};

export const BUILT_FOR_INDIA = [
  {
    title: "GST ready",
    description: "Tax on every line. Place of supply. HSN. E-way when needed.",
    icon: "Receipt",
  },
  {
    title: "From Tally / Excel",
    description: "Move your lists once. Keep going from the same bill number.",
    icon: "ArrowRightLeft",
  },
  {
    title: "UPI at the counter",
    description: "UPI, cash, card—or split on one bill.",
    icon: "Smartphone",
  },
  {
    title: "Data in India",
    description: "Your business data stays in Indian data centres.",
    icon: "Server",
  },
  {
    title: "Tamil Nadu first",
    description: "Support that understands local shops, factories, and GST practice.",
    icon: "Languages",
  },
  {
    title: "WhatsApp help",
    description: "Message a person when something breaks. Fast reply.",
    icon: "MessageCircle",
  },
];

export const SECURITY = [
  {
    title: "Safe data",
    description: "Encrypted while moving and while stored.",
    icon: "Lock",
  },
  {
    title: "Daily backups",
    description: "Copies saved every day so you do not lose the books.",
    icon: "HardDrive",
  },
  {
    title: "Staff permissions",
    description: "Control who can discount, refund, or export.",
    icon: "KeyRound",
  },
  {
    title: "99.9% uptime",
    description: "Enterprise plans include a written uptime promise.",
    icon: "Activity",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Internet went off during rush. We still billed. Later everything came into Zoho. No lost sales.",
    author: "Murugan R.",
    role: "Owner",
    company: "Murugan Hardwares",
    city: "Madurai",
    initials: "MR",
  },
  {
    quote:
      "We kept Zoho for stock. Nile is only the billing counter. Staff learned it the same day.",
    author: "Lakshmi V.",
    role: "Partner",
    company: "Sri Devi Distributors",
    city: "Coimbatore",
    initials: "LV",
  },
  {
    quote:
      "GST numbers are ready when the CA asks. No weekend Excel work.",
    author: "Suresh K.",
    role: "Founder",
    company: "Kaveri Traders",
    city: "Tiruppur",
    initials: "SK",
  },
];

export const INDUSTRIES = [
  {
    name: "Retail shops",
    description: "Barcode billing. Fast counter. Many outlets if you grow.",
    icon: "Store",
  },
  {
    name: "Wholesale & distribution",
    description: "Bulk rates. Purchase bills. E-way for movement.",
    icon: "Truck",
  },
  {
    name: "Manufacturing",
    description: "Bill finished goods. Keep stock in your system or Nile.",
    icon: "Factory",
  },
  {
    name: "Pharmacy",
    description: "Batch and expiry friendly flow. GST that accountants trust.",
    icon: "Pill",
  },
  {
    name: "Textiles & apparel",
    description: "Variants, barcodes, and multi-shop stock views.",
    icon: "Package",
  },
  {
    name: "Restaurants & QSR",
    description: "Fast tickets. Kitchen print. Works when Wi‑Fi drops.",
    icon: "UtensilsCrossed",
  },
];

export const PRICING = {
  note: "All prices in ₹. GST extra.",
  plans: [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "One shop. Start simple.",
      features: [
        "1 outlet",
        "1 user",
        "POS billing",
        "GST invoices",
        "Basic reports",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/outlet/month",
      description: "For growing shops.",
      features: [
        "Unlimited outlets",
        "Unlimited users",
        "Integrations (Zoho & more)",
        "Offline counter",
        "Role-based access",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Business",
      price: "₹2,499",
      period: "/outlet/month",
      description: "For bigger teams.",
      features: [
        "Everything in Pro",
        "Scheduled reports",
        "API access",
        "Onboarding help",
        "WhatsApp priority",
      ],
      cta: "Talk to Sales",
      highlighted: false,
    },
  ],
  enterprise: {
    name: "Enterprise",
    description:
      "Custom setup, training at your place, and connections to the systems you already run.",
    cta: "Contact Sales",
  },
};

export const FAQS = [
  {
    question: "Do I need to move my stock into Nile?",
    answer:
      "No. Many customers keep Zoho Inventory or another stock system and use Nile only as the billing counter. Nile can connect and sync.",
  },
  {
    question: "Does it work without internet?",
    answer:
      "Yes. The counter software runs on a PC in your shop. You can bill with zero network. When internet returns, sales sync automatically.",
  },
  {
    question: "Is GST included?",
    answer:
      "Yes. CGST, SGST, IGST, HSN, and e-way support. E-invoice (IRP) is on the roadmap.",
  },
  {
    question: "Can my staff learn it easily?",
    answer:
      "Yes. Most cashiers learn the main flow in one morning—scan, pay, print.",
  },
  {
    question: "Do you support Tamil Nadu businesses?",
    answer:
      "Yes. We work with shops and factories across Tamil Nadu. WhatsApp support when you need a person.",
  },
];

export const FOOTER = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Offline counter", href: "#offline" },
    { label: "Pricing", href: "#pricing" },
  ],
  solutions: [
    { label: "Retail", href: "#industries" },
    { label: "Wholesale", href: "#industries" },
    { label: "Manufacturing", href: "#industries" },
    { label: "Pharmacy", href: "#industries" },
  ],
  company: [
    { label: "Customers", href: "#customers" },
    { label: "Contact", href: "#contact" },
    { label: "Book a demo", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
