/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(7.0deg)" },
          "20%": { transform: "rotate(-4.0deg)" },
          "30%": { transform: "rotate(7.0deg)" },
          "40%": { transform: "rotate(-2.0deg)" },
          "50%": { transform: "rotate(5.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: { wave: "wave 15s ease infinite" },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
