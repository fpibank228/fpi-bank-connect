import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    extend: {
      colors: {
        'primary': '#A2E537',
        'secondary': '#6D29D9',
        'background': '#141313',
        'foreground': '#FFFFFF',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;