import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "0.5rem",
        md: "2.5rem",
        xl: "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
