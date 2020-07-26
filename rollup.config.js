import babel from "rollup-plugin-babel";
import glob from "glob";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: glob.sync("src/**/*.js"),
    output: {
      dir: "dist",
      format: "cjs",
    },
    plugins: [babel(), uglify()],
  },
];
