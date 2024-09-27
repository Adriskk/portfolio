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
        background: "var(--background-clr)",
        primary: {
          DEFAULT: "var(--primary-clr)",
          dark: "var(--primary-dark-clr)",
        },
        secondary: "var(--secondary-clr)",
        accent: "var(--accent-clr)",
      },
    },
    fontFamily: {
      sans: ["var(--font-nunito)"],
      anton: ["var(--font-anton)"],
    },
  },
  plugins: [],
};
export default config;
