/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundOpacity: ['active'],
      backgroundImage: {
        'hero': "url('./images/clock.jpg')",
      }
    },
  },
  plugins: [],
}