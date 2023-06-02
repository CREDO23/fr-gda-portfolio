import WithMatTail from "@material-tailwind/react/utils/withMT";

module.exports = WithMatTail({
  content: [
    "../../apps/**/*.{tsx,jsx}",
    "../../packages/**/*.{tsx,jsx}",
    "../../apps/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "d-orange": "#FF5722",
    },
    extends: {},
  },
  plugins: [],
});
