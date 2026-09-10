import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090E17",
        navy: {
          950: "#070B14",
          900: "#0A1120",
          850: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        ivory: {
          DEFAULT: "#FBFBF9",
          warm: "#F5F4EF",
          muted: "#ECEAE4",
        },
        bone: "#F8F8F5",
        stone: {
          surface: "#F2F1EC",
          border: "#E2E0D8",
          text: "#64748B",
          dark: "#334155",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          muted: "#475569",
        },
        champagne: {
          DEFAULT: "#BFA175",
          light: "#DFCCA9",
          dark: "#96784D",
          muted: "#B89D77",
        },
        brass: "#BFA175",
        "brass-dim": "#96784D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(1.85rem, 5.2vw, 6.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(1.45rem, 3.6vw, 3.8rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(1.15rem, 2.2vw, 2.4rem)", { lineHeight: "1.16", letterSpacing: "-0.02em" }],
        meta: ["0.72rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        prose: "42rem",
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        36: "9rem",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(15, 23, 42, 0.08)",
        "luxury-dark": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
export default config;

