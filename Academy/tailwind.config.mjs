/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          neilOrange: "#f97316",
        },
        fontFamily: {
            display:["Inter","sans-serif"],
        }
      },
    },
    plugins: [],
  }
  