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
      'light-orange': '#EBBBA7',
      'light-purple': '#CFC7F8',
      'gray-blue': '#CFD9DF',
      'heavy-gray': '#CFCFCF',
      'light-gray': '#C3C3C3'
    },
    fontSize: {
      'small': '1.5rem',
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
        '.unit-type': {
          borderRadius: '20px',
          padding: '5px 10px',
          background: 'hsla(0, 0%, 100%, .3)',
        },
        '.select': {
          width: '175px',
          background: 'hsla(0, 0%, 100%, .3)',
        },
        '.convert-btn': {
          width: '150px',
          background: 'hsla(0, 0%, 100%, .3)',
          borderRadius: '40px',
        }
      }

      addComponents(calculateGrid)
    })
  ]
}
