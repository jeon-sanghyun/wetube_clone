module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    // ecmaVersion: 11,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // "no-console": "off",
    // "spaced-comment": "off",
    // "no-else-return": "off",
  },
};
