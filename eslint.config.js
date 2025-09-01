import css from "@eslint/css";
import {defineConfig} from "eslint/config";
import globals from "globals";
import {flatConfigs as importX} from "eslint-plugin-import-x";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {files: ["**/*.css"], plugins: {css}, language: "css/css", extends: ["css/recommended"]},
  {
    files: ["**/*.js"],
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
      "@stylistic/object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/quote-props": ["error", "as-needed"],
      "no-inline-comments": "off",
      "no-magic-numbers": ["error", {ignore: [0, 2, 25, 30, 60, 100, 1000]}],
      "one-var": ["error", "never"],
      "sort-keys": "off"
    }
  },
  {files: ["**/*.json"], ignores: ["package-lock.json"], plugins: {json}, extends: ["json/recommended"], language: "json/json"},
  {files: ["**/*.md"], plugins: {markdown}, extends: ["markdown/recommended"], language: "markdown/gfm"}
]);
