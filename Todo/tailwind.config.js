import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    colors:{
      todoing:'rgb(50,77,156)',
      buttoncolor:'rgb(94,167,213)',
      buttonhover:'rgb(58,123,163)',
      bac1:'rgb(245,240,240)',
      deleteicon:'rgb(245,88,88)',
      deleteiconhover:'rgb(169,36,36)',
      black:'rgb(0,0,0)'
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {},
    fontFamily:{
      poppins:'Poppins'
    }
  },
  plugins: [
    require('tailwindcss-filters'),
    plugin(function ({ addUtilities }) {
      addUtilities({
            '.scrollbar-hide': {
              /* IE and Edge */
              '-ms-overflow-style': 'none',

              /* Firefox */
              'scrollbar-width': 'none',

              /* Safari and Chrome */
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }
          }
      )
    })
  ],
}

