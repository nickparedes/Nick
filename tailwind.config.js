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
        'base-color': 'var(--bg-base-color)',
        'level-1-color': 'var(--bg-level-1-color)',
        'light-grey-color': 'var(--bg-light-grey-color)',
        'dark-grey-color': 'var(--bg-dark-grey-color)',
        'text-color': 'var(--tx-text-color)',
        'primary-color': 'var(--tx-primary-color)',
        'green-accent-color': 'var(--tx-green-accent-color)',
        'pink-accent-color': 'var(--tx-pink-accent-color)',
        'peach-accent-color': 'var(--main-peach-accent-color)',
        'violent-accent-color': 'var(--main-violent-accent-color)',
      }



    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}