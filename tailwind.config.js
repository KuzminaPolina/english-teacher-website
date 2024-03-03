/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  screens: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1200px",
    xl: "1440px",
  },
  plugins: [],
};
