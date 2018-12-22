'use strict';

module.exports = {
  extends: 'cheminfo',
  parser: 'eslint-plugin-typescript/parser',
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
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/array-type': 'error',
    'typescript/ban-types': 'error',
    camelcase: 'off',
    'typescript/camelcase': ['error', { properties: 'always' }],
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': [
      'error',
      { allowExpressions: true }
    ],
    'typescript/explicit-member-accessibility': 'error',
    'typescript/generic-type-naming': 'off',
    indent: 'off',
    'typescript/indent': ['error', 2, { SwitchCase: 1 }],
    'typescript/interface-name-prefix': ['error', 'always'],
    'typescript/member-delimiter-style': 'error',
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'off',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-extraneous-class': 'error',
    'typescript/no-inferrable-types': 'error',
    'typescript/no-misused-new': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-object-literal-type-assertion': 'error',
    'typescript/no-parameter-properties': 'error',
    'typescript/no-this-alias': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-type-alias': 'off',
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'typescript/no-use-before-define': 'off',
    'typescript/no-var-requires': 'error',
    'typescript/prefer-interface': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'error'
  }
};
