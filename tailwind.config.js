/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "react": "#61DBFB",
        "tailwind": "#01B7D6",
      },
    },
  },
  plugins: [],
}