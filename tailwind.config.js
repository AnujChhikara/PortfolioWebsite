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
      backgroundImage: {
        earth: "url('../public/e.jpg')",
        earthSm: "url('../public/e1.jpg')",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        Sans: ["Source Sans Pro", "sans-serif"],
        merri: ["Merriweather", "serif"],
        play: ["Playfair Display", "serif"],
        mon: ["Montserrat", "sans-serif"],
        starjedi: ["Star Jedi", "Star Wars", "sans-serif"],
      },
    },
  },
  plugins: [],
};
