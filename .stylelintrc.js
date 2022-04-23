module.exports = {
  plugins: [],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recess-order"
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "string-quotes": "double"
  },
  ignoreFiles: ["**/node_modules/**"]
}
