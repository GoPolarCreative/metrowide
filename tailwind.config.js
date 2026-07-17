/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          dark: '#1a1a1a',
          cyan: '#00AEEF',
          'cyan-dark': '#0090C8',
          'cyan-light': '#33C1F5',
          gray: '#2d2d2d',
          'gray-mid': '#4a4a4a',
          'gray-light': '#f4f4f4',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
