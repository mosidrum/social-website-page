import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
    },
    extends: [
      "js/recommended",
      pluginReact.configs.flat.recommended,
      pluginReactHooks.configs.recommended,
      pluginImport.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      /* --- Basic rules --- */
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
      "comma-dangle": ["error", "never"],

      /* --- React-specific --- */
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",

      /* --- Import rules --- */
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
          jsx: "always",
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/eslint.config.js",
            "**/*.test.js",
            "**/*.spec.js",
          ],
        },
      ],
    },
  },
]);
