/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary' : 'rgb(85 81 227)',
        'secondary' : '#2b2d77',
      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha',
      Nunito: ['Nunito Sans', 'sans-serif'],
    }
  },
  plugins: [],
}
