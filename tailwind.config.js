module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
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
      'tw-normal': '0.02em',
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
        },
        skadiRed: {
          100: '#FEC6C3',
          200: '#FE8E88',
          300: '#FE6960',
          400: '#FE4439',
          500: '#F04238',
          600: '#BA312D',
          600: '#921D25',
          700: '#792326'
        },
        skadiWhite: {
          100: '#ffffff',
          200: '#f6f5f8',
          300: '#eae7ed',
          400: '#ded8e3',
          500: '#d6cfdc',
          600: '#c0bac6',
          700: '#aba5b0',
          800: '#95909a',
          900: '#807c84',
        }
      },
      fontFamily: {
        'title': ['Noto Serif TC', 'sans-serif'],
        'tw-paragraph': ['Noto Serif TC', 'serif'],
        'en-paragraph': ['Merriweather', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
