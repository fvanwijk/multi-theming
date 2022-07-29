/** @type {import('tailwindcss').Config} */
const baseConfig = require("./tailwind.base.config.cjs");

baseConfig.theme.extend = {
  colors: {
    primary: "blue",
    "primary-dark": "darkblue",
  },
};

module.exports = baseConfig;
