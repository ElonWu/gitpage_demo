const path = require("path");

export function srcPath(subDir: string) {
  return path.resolve(__dirname, "src", subDir);
}
