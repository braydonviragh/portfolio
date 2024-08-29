/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#8a2be2',
        secondary: '#d3a3ff',
        accent: 'bc13fe',
        background: '#131313',
        sidebar: '#0f0f0f',
      },
    },
  },
  plugins: [],
}

