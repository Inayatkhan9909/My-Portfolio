/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.hbs', './public/**/*.js'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}


