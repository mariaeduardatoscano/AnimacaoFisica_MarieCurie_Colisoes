import remotion from "@remotion/eslint-config-flat";

export default [
  ...remotion,
  {
    ignores: ["node_modules", "out", "build", "dist"],
  },
];