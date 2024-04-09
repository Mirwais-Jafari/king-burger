
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./script.js"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

