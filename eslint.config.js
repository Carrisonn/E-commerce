import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    'rules': {
      'no-unused-vars': 2,
      'no-undef': 2,
      'no-extra-semi': 2,
      'eqeqeq': 2,
      'camelcase': 2,
      'semi': 2,
      'quotes': [2, 'single'],
      'indent': [2, 2, { 'SwitchCase': 1 }],
    }
  }
];