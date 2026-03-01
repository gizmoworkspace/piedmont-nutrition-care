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
      },
    },
  },
  plugins: [],
};
export default config;
