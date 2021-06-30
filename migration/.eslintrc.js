module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    camelcase: "error",
    "react/prop-types": "off",
    "no-unused-var": "off",
    "@typescript-eslint/no-unused-vars": "error",
  }
};
