import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
   {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      env: { node: true, es2021: true },
      plugins: { js },
      extends: ['eslint:recommended'],
      languageOptions: { globals: globals.browser },
      parserOptions: { ecmaVersion: 'latest' },
   },
   pluginReact.configs.flat.recommended,
]);
