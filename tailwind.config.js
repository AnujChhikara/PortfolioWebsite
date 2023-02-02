/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",

        md: "720px",

        lg: "1040px",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        Sans: ["Source Sans Pro", "sans-serif"],
        merri: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
