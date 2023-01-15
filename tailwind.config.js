/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        // => @media (min-width: 576px) { ... }
    
        'md': '600px',
        // => @media (min-width: 960px) { ... }
    
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'Sans': ['Source Sans Pro', 'sans-serif'],
        'merri' : ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}
