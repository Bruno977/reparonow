/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: {
          default: "#fff",
        },
        primary: {
          400: "#217bdd",
          300: "#1c4ce5",
          200: " #016bdb",
        },
        text: {
          500: "#000",
          400: "#7b7b7b",
        },
      },
      fontFamily: {
        sans: ["Mulish"],
        secondary: ["VastagoGrotesk"],
      },
    },
  },
  plugins: [],
};
