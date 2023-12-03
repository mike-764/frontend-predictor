/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
     colors: {
      mainHeading: 'hsla(200, 19%, 18%, 1)',
       greenMain: 'hsla(120, 100%, 25%, 1)',
        typographyGray: 'hsla(200, 19%, 18%, 1)',
        blackSubtitles: 'hsla(0, 0%, 0%, 1)',
         welcome:'hsla(80, 39%, 42%, 1)',
         magenta:'#ff00ff',
         darkGrayishBlue:'hsl(227, 12%, 61%)',
         darkBlue: 'hsl(228, 39%, 23%)',
         darkGrayishBlue: 'hsl(227, 12%, 61%)',
         veryDarkBlue: 'hsl(233, 12%, 13%)',
         veryPaleRed: 'hsl(13, 100%, 96%)',
         veryLightGray: 'hsl(0, 0%, 98%)',
         brightRed: 'hsl(12, 88%, 59%)',
         brightRedLight: 'hsl(12, 88%, 69%)',
         brightRedSupLight: 'hsl(12, 88%, 95%)',
         darkBlue: 'hsl(228, 39%, 23%)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

