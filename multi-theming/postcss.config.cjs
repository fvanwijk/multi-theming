module.exports = (ctx) => {
  console.log(
    `\nCompile CSS using tailwind.${process.env.VITE_USER_NODE_ENV}.config.cjs`
  );
  return {
    plugins: {
      tailwindcss: {
        config: `tailwind.${process.env.VITE_USER_NODE_ENV}.config.cjs`,
      },
      autoprefixer: {},
    },
  };
};
