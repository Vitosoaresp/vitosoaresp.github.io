/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-1': '#131316',
        'black-2': '#1c1c21',
        'black-3': '#26262c',
        'btn-gihub': '#8257e6',
        'btn-git-hover': '#6e3ce2',
        'headline': '#fffffe',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        '3xl': 'rgb(0 0 0 / 24%) 0px 3px 8px;',
      },
    },
  },
  plugins: [],
};
