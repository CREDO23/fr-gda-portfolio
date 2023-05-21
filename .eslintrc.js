module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-smarket`
  extends: ["smarket"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
