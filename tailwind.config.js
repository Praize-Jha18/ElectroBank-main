/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        numans: ['Numans', 'sans-serif'],//
        helvetica: ['Helvetica', 'sans-serif'], //
        quicksand: ['Quicksand', 'sans-serif'],
        muli: ['Muli', 'sans-serif'], //
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'], //
      },
      screens: {
        'max-nav': { 'max': '1200px', },
        'max-mdLap': { 'max': '996px' },
        'max-tab': { 'max': '778px' },
        'max-mdPhone': { 'max': '550px' },
        'max-phone': { 'max': '426px' },
      }
    },
  },
  plugins: [],
}

