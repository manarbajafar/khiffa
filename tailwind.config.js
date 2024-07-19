/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'primary-color': 'A0153E',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
