module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
