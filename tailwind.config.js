/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['bio-sans', 'sans-serif'],
        display: ['bebas-neue-semirounded', 'sans-serif']
      }
    },
  },
  plugins: [],
}