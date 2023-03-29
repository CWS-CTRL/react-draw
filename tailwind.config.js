/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        scale01: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        }
      },
      animation: {
        scale01: "scale01 .5s ease-in-out",
      },
      spacing: {
        "1/5": "20%",
        "1/6": "16.67%"
      }
    },
  },
  plugins: [],
}
