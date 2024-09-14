/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#798c96',
        light: '#ebf4f7',
        dark: '#0f212b',
        primary: '#0f2940',
        secondary: '#e73f15',
        'pd-blue': '#2c2378',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
