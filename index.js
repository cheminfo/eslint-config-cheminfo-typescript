'use strict';

module.exports = {
  extends: 'cheminfo',
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['typescript'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  rules: {
    'typescript/interface-name-prefix': ['error', 'always'], // Interfaces must have "I" prefix
    'typescript/explicit-function-return-type': 'off', // Let TS infer the types by default
    'typescript/no-unused-vars': 'error', // Needed for compatibility with the ESLint rule
    'no-undef': 'off', // TypeScript flags those errors already
    'valid-jsdoc': 'off' // TODO re-enable with different settings. For example, types are not necessary
  }
};
