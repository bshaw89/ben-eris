/** @type {import('tailwindcss').Config} */
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
        'album-cover': "url('https://i.imgur.com/9fVipWG.jpg')"
      }
    },
  },
  plugins: [],
}