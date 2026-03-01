import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        green: {
          50: "#f4f9f2",
          100: "#e6f2e1",
          200: "#cce5c3",
          300: "#a8d49a",
          400: "#7fbf6d",
          500: "#6AA84F",
          600: "#558a3f",
          700: "#446e33",
          800: "#38592b",
          900: "#2d4923",
          950: "#162712",
        },
        warm: {
          50: "#faf9f7",
          100: "#f5f3ef",
          200: "#ebe7e0",
          300: "#ddd7cc",
          400: "#c4baa9",
          500: "#ab9d89",
          600: "#968770",
          700: "#7d6f5c",
          800: "#675c4d",
          900: "#564d41",
          950: "#2e2821",
        },
        amber: {
          50: "#fef8f0",
          100: "#fcefd9",
          200: "#f9ddb2",
          300: "#f2c47f",
          400: "#E69138",
          500: "#d47d24",
          600: "#bc651a",
          700: "#9c4e17",
          800: "#7e3f1a",
          900: "#673518",
        },
      },
      fontFamily: {
        heading: ["var(--font-lora)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)",
        card: "0 2px 8px -2px rgba(0,0,0,0.06), 0 4px 16px -4px rgba(0,0,0,0.04)",
        lifted: "0 4px 12px -2px rgba(0,0,0,0.08), 0 8px 24px -4px rgba(0,0,0,0.06)",
        "deep": "0 8px 30px -4px rgba(0,0,0,0.12), 0 16px 40px -8px rgba(0,0,0,0.08)",
        "glow-green": "0 0 20px rgba(106, 168, 79, 0.3), 0 0 40px rgba(106, 168, 79, 0.1)",
        "glow-amber": "0 0 20px rgba(230, 145, 56, 0.3)",
        "glass": "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #162712 0%, #2d4923 30%, #38592b 60%, #446e33 100%)",
        "gradient-hero-light": "linear-gradient(180deg, #f4f9f2 0%, #FDFBF7 100%)",
        "gradient-green-warm": "linear-gradient(135deg, #f4f9f2 0%, #FDFBF7 50%, #fef8f0 100%)",
        "gradient-section": "linear-gradient(180deg, #FDFBF7 0%, #f4f9f2 100%)",
        "gradient-dark": "linear-gradient(135deg, #2e2821 0%, #1c1c1c 100%)",
        "gradient-cta": "linear-gradient(135deg, #38592b 0%, #2d4923 50%, #162712 100%)",
        "gradient-btn": "linear-gradient(135deg, #6AA84F 0%, #558a3f 100%)",
        "dot-pattern": "radial-gradient(circle, #c4baa940 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot": "24px 24px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(106, 168, 79, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(106, 168, 79, 0.4)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
