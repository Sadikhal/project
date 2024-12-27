/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        assistant:["Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"],
        robotos:["Roboto Slab", "serif"],
        rubik:["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}

