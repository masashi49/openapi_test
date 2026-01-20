// eslint.config.mjs
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default [
  // ESLint公式の最低限（旧 eslint:recommended）
  js.configs.recommended,

  // TypeScript（現実的・安全ライン）
  ...tseslint.configs.recommended,

  {
    plugins: {
      "react-hooks": reactHooks,
      "@next/next": next,
      "unused-imports": unusedImports,
    },

    rules: {
      /*
       * =========================
       * TypeScript（最低限・必須）
       * =========================
       */
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/consistent-type-imports": "error",

      /*
       * =========================
       * React Hooks（契約違反防止）
       * =========================
       */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      /*
       * =========================
       * Next.js（app router 前提）
       * =========================
       */
      "@next/next/no-img-element": "error",

      /*
       * =========================
       * 非同期（静かな失敗を防ぐ）
       * =========================
       */
      "@typescript-eslint/no-floating-promises": "error",

      /*
       * =========================
       * 未使用コード排除（安全）
       * =========================
       */
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  /*
   * =========================
   * Prettier と競合するルールを完全無効化
   * =========================
   */
  eslintConfigPrettier,
];
