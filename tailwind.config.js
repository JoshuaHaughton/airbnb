const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/index.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "header-break": '830px',
    ...defaultTheme.screens,
    }
  },
  plugins: [],
}