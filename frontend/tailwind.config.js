/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EE2A7",
        secondary: "#101113",
        bg: "#0B0C0E",
        panel: "#121317",
        text: "#D5D8E1",
        mute: "#8A8F9C",
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.25)",
        glow: "0 0 0 4px rgba(14,226,167,0.15)",
      },
      transitionTimingFunction: { smooth: "cubic-bezier(0.22, 1, 0.36, 1)" },
      spacing: { "13": "3.25rem", "15": "3.75rem", "18": "4.5rem" },
    },
  },
  plugins: [],
} 
