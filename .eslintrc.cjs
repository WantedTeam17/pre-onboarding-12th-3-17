module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "jsx-a11y"],
  rules: {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { allow: ["warn", "error", "info"] }], // console.log() 금지
    eqeqeq: "error", // 일치 연산자 사용 필수
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/prop-types": "off",
  },
};
