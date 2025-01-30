import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"
import stylistic from "@stylistic/eslint-plugin"
import importPlugin from "eslint-plugin-import"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["dist", "out", "src/components/ui"],
  },
  {
    ...importPlugin.flatConfigs.recommended,
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@stylistic/semi": ["warn", "never"],
      "@stylistic/quotes": "warn",
      "@stylistic/jsx-newline": ["warn", { "prevent": false }],
      "@stylistic/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "multiline" }],
      "@stylistic/jsx-one-expression-per-line": "warn",
      "@stylistic/jsx-first-prop-new-line": "warn",
      "@stylistic/jsx-closing-bracket-location": "warn",
      "@stylistic/jsx-self-closing-comp": "warn",
      "@stylistic/no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "@stylistic/padding-line-between-statements": ["warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" },
        { blankLine: "always", prev: ["case", "default"], next: "*" }
      ],
      "@stylistic/jsx-function-call-newline": ["warn", "always"],
      "import/order": ["warn", { "newlines-between": "always" }],
    }
  }
]

export default eslintConfig
