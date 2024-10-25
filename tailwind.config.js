const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        primary: {
          800: "#5eb3b1",
        },
        gold: {
          1: "#FFB81C",
          2: "#CC8A00",
          3: "#D4AF37"
        },
        customBlack: {
          1: "#101820",
          2: "#1E2019",
        },
      },
      height: {
        "faq-height": "70vh",
        "book-trip-height": "70vh",
        "card-height": "22vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
