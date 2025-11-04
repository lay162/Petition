/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./site/**/*.{html,js}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'luna-pink': '#ff69b4',
        'luna-blue': '#7ad7f0',
      },
    },
  },
  plugins: [],
}

