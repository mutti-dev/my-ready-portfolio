import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Extra safety
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6",
          dark: "#60a5fa",
        },
        text: {
          light: "#1f2937",
          dark: "#e5e7eb",
        },
        bg: {
          light: "#ffffff",
          dark: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "media",
  
};

export default config;