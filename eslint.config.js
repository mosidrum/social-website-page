import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Ignore files
    ignores: [
      "**/.stylelintrc.json",
      "**/stylelint.config.js",
      "**/*.css",
      "**/*.scss",
      "node_modules/",
      "dist/",
      "build/",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
    },
    rules: {
      /* --- Basic rules --- */
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "never"],

      /* --- React-specific --- */
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
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
            "**/vite.config.js",
            "**/webpack.config.js",
          ],
          optionalDependencies: false,
        },
      ],
    },
  },
  // js.configs.recommended,
  // reactPlugin.configs.flat.recommended,
  // reactHooksPlugin.configs.flat.recommended,
  // importPlugin.flatConfigs?.recommended || importPlugin.configs.recommended,
];
