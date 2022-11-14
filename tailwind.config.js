/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        120: "120deg",
        135: "135deg",
      },
    },
  },
  plugins: [],
};
