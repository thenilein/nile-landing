import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FBFBFD",
          dark: "#0A0A0A",
        },
        fg: {
          DEFAULT: "#111111",
          dark: "#F5F5F7",
        },
        muted: "#86868B",
        accent: {
          DEFAULT: "#0071E3",
          hover: "#0077ED",
          light: "#EBF5FF",
        },
        border: {
          DEFAULT: "#D2D2D7",
          dark: "#424245",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1D1D1F",
          elevated: "#F5F5F7",
          "elevated-dark": "#2D2D2F",
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        headline: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        title: [
          "clamp(1.5rem, 3vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1.0625rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        eyebrow: [
          "0.8125rem",
          { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.06em" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        "section": "clamp(5rem, 10vw, 8rem)",
      },
      borderRadius: {
        card: "12px",
        section: "24px",
        pill: "999px",
      },
      transitionDuration: {
        DEFAULT: "600ms",
        fast: "300ms",
        slow: "800ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
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
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        "slide-left": "slide-left 30s linear infinite",
        "count-up": "count-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 60% 50% at 50% -20%, rgba(0,113,227,0.15), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
