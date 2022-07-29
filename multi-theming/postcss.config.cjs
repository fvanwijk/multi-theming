module.exports = (ctx) => {
  return {
    plugins: {
      tailwindcss: {
        config: "tailwind.red.config.cjs",
      },
      autoprefixer: {},
    },
  };
};
