import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D9991",
        "primary-dark": "#2d7a73",
        dark: "#1F1F1F",
        "dark-gray": "#2a2a2a",
      },
      fontFamily: {
        sans: ["var(--font-proxima)", "system-ui", "sans-serif"],
        serif: ["var(--font-garamond)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
