import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        ink: "#0c0c10",
        paper: "#f7f6f2",
        cream: "#ede9df",
        border: "#d8d3c8",
        mid: "#6b665e",
        accent: {
          DEFAULT: "#1a4fd6",
          dark: "#1340b5",
          soft: "#e8eefb",
        },
        success: {
          DEFAULT: "#15803d",
          soft: "#dcfce7",
        },
        warning: {
          DEFAULT: "#b45309",
          soft: "#fef3c7",
        },
        danger: {
          DEFAULT: "#dc2626",
          soft: "#fee2e2",
        },
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "float": "float 4s ease-in-out infinite",
        "scroll-logos": "scrollLogos 25s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrollLogos: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
