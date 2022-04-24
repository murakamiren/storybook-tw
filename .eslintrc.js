module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jest",
    "jest-dom",
    "testing-library"
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:jest-dom/recommended"
      ]
    }
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.tsx",
          "./vite.config.ts",
          "./src/tests/*.ts",
          "./src/tests/*.tsx",
          "./jest.setup.ts"
        ],
        optionalDependencies: false
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function" // 'function-declaration' | 'function-expression' | 'arrow-function'
      }
    ]
  }
}
