import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// /** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended, // Aturan dasar JavaScript
  ...tseslint.configs.recommended, // Aturan TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Tambahkan rules tambahan di sini kalau mau
      // 'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
