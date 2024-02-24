/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f4d04e',
        neutrals: {
          50: '#ffffff',
          400: '#808080',
          900: '#121212',
        },
      },
      fontFamily: {
        sans: '"Figtree", sans-serif',
      },
      fontWeight: {
        semibold: '600',
        extrabold: '800',
      },
    },
  },
  plugins: [],
};
