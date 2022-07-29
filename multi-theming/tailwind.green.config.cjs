/** @type {import('tailwindcss').Config} */
const baseConfig = require("./tailwind.base.config.cjs");

baseConfig.theme.extend = {
  colors: {
    primary: "green",
    "primary-dark": "darkgreen",
  },
};

module.exports = baseConfig;
