import typescript from "@rollup/plugin-typescript"
import { existsSync, mkdirSync } from "fs";
import { dirname } from "path";
// import { terser } from "rollup-plugin-terser"

const dir = "build"

function isDev() {
  return !!process.argv.find(el => el === "--dev")
}

function ensureDirectoryExistence(filePath) {
  var dr = dirname(filePath);
  if (existsSync(dr)) {
    return true;
  }
  ensureDirectoryExistence(dr);
  mkdirSync(dr);
}

ensureDirectoryExistence(dir)

export default {

  input: ["./src/index.ts", "./src/verifier.ts"],
  output: {
    dir: dir,
    format: "esm",
    sourcemap: isDev()
  },
  plugins: [
    typescript({
      tsconfig: isDev() ? "./tsconfig.json" : "tsconfig.release.json"
    }),
    // !isDev() ? terser() : null
  ]

}
