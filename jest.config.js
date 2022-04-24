/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["./src/tests"],
  setupFilesAfterEnv: ["./jest.setup.ts"]
}
