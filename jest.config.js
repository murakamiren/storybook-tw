/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src/tests"]
}
