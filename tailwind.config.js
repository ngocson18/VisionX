/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sigma: ['Sigmar']
      },
      backgroundImage: {
        headerImage: "url('assets/images/header.jpg')",
      },
      height: {
        inherit: 'inherit'
      }
    },
  },
  plugins: [],
}

