const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module", 
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // "no-console": "error",
      // "indent": ["error", 2],
      // "quotes": ["error", "double"],
      // "semi": ["error", "always"],
      // "no-unused-vars": "error",
      // "camelcase": "error",
    },
  },
];
