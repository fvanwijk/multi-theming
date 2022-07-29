/** @type {import('tailwindcss').Config} */
const baseConfig = require("./tailwind.base.config.cjs");

baseConfig.theme.extend = {
  colors: {
    primary: "red",
    "primary-dark": "darkred",
  },
};

module.exports = baseConfig;
