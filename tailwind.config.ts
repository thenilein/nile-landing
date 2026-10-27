import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          elevated: "var(--bg-elevated)",
        },
        fg: {
          DEFAULT: "var(--fg)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          soft: "var(--muted-soft)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          fg: "var(--accent-fg)",
        },
        // Match nile-client primary green
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        headline: [
          "clamp(1.875rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
        title: [
          "clamp(1.25rem, 2vw, 1.5rem)",
          { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" },
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        section: "clamp(5rem, 10vw, 7.5rem)",
      },
      borderRadius: {
        card: "12px",
        section: "20px",
        pill: "999px",
      },
      boxShadow: {
        glow: "0 0 60px rgba(16, 185, 129, 0.15)",
        "glow-sm": "0 0 24px rgba(16, 185, 129, 0.12)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.35)",
      },
      transitionDuration: {
        DEFAULT: "400ms",
        fast: "200ms",
        slow: "700ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "slide-left": "slide-left 40s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
