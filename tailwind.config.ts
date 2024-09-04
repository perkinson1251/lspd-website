/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#ebf4f7',
        primary: '#0f2940',
        secondary: '#e73f15',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
