/* eslint-disable quote-props */
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
  },
  "extends": ["eslint:recommended", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "rules": {
    eqeqeq: ["error", "always"],
    quotes: ["error", "double", { "allowTemplateLiterals": true }],
    "quote-props": ["error", "consistent"],
    "no-unused-vars": "warn",
    "no-console": 0,
    "no-param-reassign": 0,
    "newline-per-chained-call": 0,
    "consistent-return": 0,
  },
};
