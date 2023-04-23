module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      'tw-normal': '0.03em',
      'en-normal': 'unset'
    },
    extend: {
      fontFamily: {
        'title': ['Poppins', 'Noto Sans TC', 'sans-serif'],
        'tw-paragraph': ['Noto Sans TC', 'serif'],
        'en-paragraph': ['Merriweather', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
