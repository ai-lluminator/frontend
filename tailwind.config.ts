import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #5e33d5 0%, #00eaff 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue_500: "var(--blue-500)",
      },
      borderRadius: {
        // Add custom small border radius values
        sm: '1px',
        md: '2px',
        lg: '3px',
      },
    },
  },
  plugins: [],
};
export default config;