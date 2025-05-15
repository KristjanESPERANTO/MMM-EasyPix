import css from "@eslint/css";
import {defineConfig} from "eslint/config";
import globals from "globals";
import {flatConfigs as importX} from "eslint-plugin-import-x";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {files: ["**/*.css"], languageOptions: {tolerant: true}, plugins: {css}, language: "css/css", extends: ["css/recommended"], rules: {"css/use-baseline": ["error", {available: "newly"}]}},
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {js, stylistic},
    extends: [importX.recommended, "js/all", "stylistic/all"],
    rules: {
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/multiline-comment-style": "off",
      "@stylistic/object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/quote-props": ["error", "as-needed"],
      "capitalized-comments": "off",
      "import-x/no-unresolved": ["error", {ignore: ["eslint/config", "node_helper", "logger"]}],
      "max-lines-per-function": ["error", 100],
      "max-statements": ["error", 25],
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "one-var": ["error", "never"],
      "sort-keys": "off",
      strict: "off"
    }
  },
  {files: ["**/*.json"], ignores: ["package-lock.json"], plugins: {json}, extends: ["json/recommended"], language: "json/json"},
  {files: ["**/*.md"], plugins: {markdown}, extends: ["markdown/recommended"], language: "markdown/gfm"}
]);
