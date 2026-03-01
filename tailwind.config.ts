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
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d1d8c7",
          300: "#b3bfa3",
          400: "#95a67f",
          500: "#7a8e64",
          600: "#5f714e",
          700: "#4b5a3f",
          800: "#3d4934",
          900: "#343e2e",
        },
        warm: {
          50: "#fdfcfa",
          100: "#f9f6f0",
          200: "#f2ece0",
          300: "#e8ddc9",
          400: "#d4c4a5",
          500: "#c0ab85",
          600: "#a8906a",
          700: "#8c7557",
          800: "#735f48",
          900: "#5f4f3d",
        },
        cream: "#faf8f5",
        sand: "#f5f0e8",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
