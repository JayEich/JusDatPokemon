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
        sans: ['Silkscreen', 'sans-serif'], // Mantenemos fuente pixel
      },
      colors: {
        // --- Nueva Paleta ---
        'pkmn-bg': '#F5F5DC',           // Beige claro para fondo
        'pkmn-border-dark': '#556B2F',  // Verde Oliva Oscuro para bordes/texto secundario
        'pkmn-accent-green': '#2E8B57', // Verde Mar para botones/acentos
        'pkmn-secondary': '#8FBC8F',    // Verde Mar Oscuro para tarjeta/elementos secundarios
        'pkmn-text-main': '#000000',    // Negro para texto principal
        'pkmn-text-light': '#F5F5DC',   // Beige claro para texto sobre fondos oscuros
        // --- Colores anteriores (puedes borrarlos si no los usas) ---
        // 'pkmn-dark-green': '#006414',
        // 'pkmn-mid-green': '#009929',
        // 'pkmn-light-green': '#5ccb5f',
        // 'pkmn-tan': '#e8c39e',
        // 'pkmn-cream': '#f5e1ce',
        // 'pkmn-black': '#000000',
      },
    },
  },
  plugins: [],
}