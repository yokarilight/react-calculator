const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': colors.white,
      'black': colors.black,
      'light-blue': '#00AAFF',
      'light-green': '#00FF6C',
    },
    fontSize: {
      'medium': '2rem',
      'large': '2.5rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      const calculateGrid = {
        '.calculator-grid': {
          display: 'grid',
          marginTop: '2rem',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(4, 6rem)',
          gridTemplateRows: 'minmax(7rem, auto) repeat(5, 6rem)',
        },
        '.grid-span-2': {
          gridColumn: 'span 2',
        },
        '.output': {
          wordWrap: 'break-word',
          wordBreak: 'break-all',
        },
      }

      addComponents(calculateGrid)
    })
  ]
}
