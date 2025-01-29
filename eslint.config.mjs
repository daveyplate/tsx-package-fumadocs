import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@stylistic/quotes": "warn",
      "@stylistic/jsx-newline": ["warn", { "prevent": true, "allowMultilines": true }],
      "@stylistic/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "multiline" }],
      "@stylistic/jsx-one-expression-per-line": "warn",
      "@stylistic/jsx-first-prop-new-line": "warn",
      "@stylistic/jsx-closing-bracket-location": "warn",
      "@stylistic/jsx-self-closing-comp": "warn",
      "@stylistic/no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }]
    }
  }
];

export default eslintConfig;
