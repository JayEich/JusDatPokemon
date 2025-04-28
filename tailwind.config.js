// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Silkscreen', 'sans-serif'], 
      },
      colors: {
        'pkmn-bg': '#F5F5DC',
        'pkmn-border-dark': '#556B2F',
        'pkmn-accent-green': '#2E8B57',
        'pkmn-secondary': '#8FBC8F',
        'pkmn-text-main': '#000000',
        'pkmn-text-light': '#F5F5DC',
      },
    },
  },
  plugins: [],
}