/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Verifica todos os arquivos dentro de 'src/app'
    './src/components/**/*.{js,ts,jsx,tsx}',  // Se houver uma pasta 'components'
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Se você usar uma pasta 'pages'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
