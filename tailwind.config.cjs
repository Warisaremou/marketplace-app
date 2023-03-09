/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "#3281CB",
        "blue-dark-color": "#256AAD",
      },
    },
    minHeight: {
      "1/2": "50%",
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
