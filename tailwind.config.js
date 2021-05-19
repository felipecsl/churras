const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      gray: colors.trueGray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {
      invert: ["dark"]
    },
  },
  plugins: [],
};
