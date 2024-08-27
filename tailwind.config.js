/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#265E78',
          400: '#3E7591',
          200: '#64A1C0',
        },
        secondary: {
          800: '#111827',
          400: '#C9CDD3',
          200: '#F9FAFB',
        },
        mustard: {
          800: '#EBF541',
          200: '#F8FCAD',
        },
        Lachs: '#FFC28A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
