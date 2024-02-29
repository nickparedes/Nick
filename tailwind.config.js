/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#aaaaaa',
        secondary: 'rgba(247,223,30,0.75)',
        found: '#111111',
        
      }



    },
  },
  plugins: [],
}