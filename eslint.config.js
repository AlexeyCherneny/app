import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { 
      ignores: [
        "eslint.config.js",
        "dist/*",
        "dist/**/*",
        "node_modules/*",
        "node_modules/**/*",
        "global.d.ts",
        "vite.config.js",
      ], 
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,

      // Disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
      // Make sure it's always the last config, so it gets the chance to override other configs.
      prettier.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect", },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Includes recommended rules.
      ...react.configs.recommended.rules,

      // Recommended rules includes `react/prop-types` as required to make sure all component props are described.
      // Typescript also describes all props so no need to use both ts and proptypes descriptions.
      'react/prop-types': 'off',

      // Includes `react/react-in-jsx-scope` and `react/jsx-uses-react` disable. Before react v17 it was required to make sure React variable is imported at the beggining of the file
      // And right now there is no need to support legacy code where the React variable is imported, so we can disable it.
      ...react.configs['jsx-runtime'].rules,

      // Includes `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` enable to make sure hooks are used correct.
      ...reactHooks.configs.recommended.rules,

      // This rule checks that you can export only React Component and constant to make sure hot reload works correct.
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'prettier/prettier': 'error',
    },
  },
);
