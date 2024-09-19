/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#798c96',
        lightBlue: '#ebf4f7',
        darkBlue: '#0f212b',
        primaryBlue: '#0f2940',
        orangeRed: '#e73f15',
        purpleBlue: '#2c2378',
        blue: '#0875bd',
        darkGray: '#313132',
        semiTransparentDarkGray: '#31313299',
        lightGray: '#f2f4f7',
        mediumGray: '#838384',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
