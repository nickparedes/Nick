/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jnthill: ['Jenthill', 'cursive'], // Define "Jenthill"e
        mosk: ['Mosk', 'sans-serif'], // Define "Mosk"
      },
    },
  },
  plugins: [],
}