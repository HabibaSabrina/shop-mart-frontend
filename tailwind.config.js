/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans'],
        sans: ['Open Sans', 'sans'],
      },

  },
},
plugins: [require("daisyui")],
}

