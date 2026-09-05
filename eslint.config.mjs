import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import { flatConfigs as importX } from 'eslint-plugin-import-x'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    files: ['**/*.css'],
    language: 'css/css',
    extends: [css.configs.recommended],
  },
  {
    files: [
      '**/*.js',
      '**/*.mjs',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [
      importX.recommended,
      js.configs.recommended,
      stylistic.configs.recommended,
    ],
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    extends: [json.configs.recommended],
    language: 'json/json',
  },
  {
    files: ['**/*.md'],
    extends: [markdown.configs.recommended],
    language: 'markdown/gfm',
  },
])
