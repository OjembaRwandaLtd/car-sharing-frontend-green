/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#265E78',
          mid: '#3E7591',
          light: '#64A1C0',
        },
        secondary: {
          DEFAULT: '#111827',
          mid: '#C9CDD3',
          light: '#F9FAFB',
        },
        mustard: {
          dark: '#EBF541',
          DEFAULT: '#F8FCAD',
        },
        customLachs: '#FFC28A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
