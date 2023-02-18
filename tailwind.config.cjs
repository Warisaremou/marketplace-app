/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "#3281CB",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "7rem",
    },
  },
  plugins: [],
};
