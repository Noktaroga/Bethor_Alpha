module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // para que busque clases en todos tus archivos del proyecto React
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // activa Inter si la usas en index.html
      },
    },
  },
  plugins: [],
};
