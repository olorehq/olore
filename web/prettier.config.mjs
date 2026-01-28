/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson",
    // tailwindcss plugin must be last
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
