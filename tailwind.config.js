/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Vecna", "sans-serif"],
    },
    fontWeight: {
      bold: 700
    },
    backgroundSize: {
      '75%': '90%'
    },
    extend: {
      backgroundImage: {
        'album-cover': `url('/ben-eris.jpg')`
      },
      colors: {
        warlock: {
          500: '#7b68ee',
          400: '#9f81e3'
        }
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backdrop: {
        'position': 'abosulte',
        'top': '0',
        'left': '0',
        'height': '100%',
        'width': '100%',
        'background': '#000000e1',
        'display': 'flex',
        'align-items': 'center'

      },
      modal: {
        'width': 'clamp(50%, 700px, 90%)',
        'height': 'min(50%, 300px)',
        'margin': 'auto',
        'padding': '0 2rem',
        'border-radius': '12px',
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}