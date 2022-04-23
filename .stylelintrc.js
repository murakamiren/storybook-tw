module.exports = {
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "string-quotes": "double",
    "order/properties-alphabetical-order": true
  },
  ignoreFiles: ["**/node_modules/**"]
}
