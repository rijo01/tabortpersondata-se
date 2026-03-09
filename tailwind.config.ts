import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      colors: {
        ink: "#080c14",
        "ink-2": "#111827",
        paper: "#f8f9fc",
        mid: "#6b7280",
        border: "#e5e7eb",
        accent: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
          soft: "#e0f2fe",
        },
        success: { DEFAULT: "#10b981", soft: "#d1fae5" },
        danger:  { DEFAULT: "#ef4444", soft: "#fee2e2" },
        warning: { DEFAULT: "#f59e0b", soft: "#fef3c7" },
      },
      animation: {
        "fade-up":      "fadeUp .55s ease both",
        "fade-in":      "fadeIn .4s ease both",
        "float":        "float 4s ease-in-out infinite",
        "scroll":       "scroll 28s linear infinite",
        "pulse-dot":    "pulseDot 2s ease-in-out infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity:"0", transform:"translateY(18px)" }, to: { opacity:"1", transform:"translateY(0)" } },
        fadeIn:   { from: { opacity:"0" }, to: { opacity:"1" } },
        float:    { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-10px)" } },
        scroll:   { from: { transform:"translateX(0)" }, to: { transform:"translateX(-50%)" } },
        pulseDot: { "0%,100%": { opacity:"1" }, "50%": { opacity:"0.3" } },
        shimmer:  { "0%": { backgroundPosition:"-200% 0" }, "100%": { backgroundPosition:"200% 0" } },
      },
    },
  },
  plugins: [],
};
export default config;
