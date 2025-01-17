import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      eqeqeq: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'never'],
      'no-useless-catch': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'prefer-const': 'error',
      'no-multi-assign': 'error',
      'prefer-template': 'error',
      'no-unreachable': 'error',
      'react/self-closing-comp': 'error'
    }
  }
]
