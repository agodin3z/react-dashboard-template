import path from 'path';
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: path.resolve(__dirname, '.'),
      },
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    rules: {
      'no-console': 0,
      'no-inline-comments': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
);
