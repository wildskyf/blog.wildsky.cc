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
      colors: {
        brand: {
          50: '#D7E9F5',
          100: '#B6D5EB',
          200: '#7FBADC',
          300: '#54A5D5',
          400: '#3892C6',
          500: '#0066CC',
          600: '#0059B3',
          700: '#004080',
          800: '#003366',
          900: '#001A33'
        }
      },
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
