/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'lg': '1024px',
      'xl': '1280px',
      'md': '768px',
      'sn': {'max': '396px'},
      'sz': {'max': '305px'},
    },
    extend: {},
  },
  plugins: [],
}