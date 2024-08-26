/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
       Indigo:{
        800:"#265E78",
        400:"#3E7591",
        200:"#64A1C0"
       },
       Gray:{
        800:"#111827",
        200:"#C9CDD3",
        100:"#F9FAFB"
       },
       Mustard:{
        200:"#EBF541",
        100:"#F8FCAD",
       },
       Lachs:{
        200: "#FFC28A"
       }

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
