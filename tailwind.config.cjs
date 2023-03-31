/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Meteor.svg')",
        'contact-pattern': "url('/src/assets/cool-background.png')",
        'Hero-pattern': "url('/src/assets/Background.png')"
      }
    },
  },
  plugins: [],
}