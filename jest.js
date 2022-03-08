'use strict';

module.exports = {
  extends: 'cheminfo/jest',
  overrides: [
    {
      files: ['**/__tests__/**/*.{ts,tsx,cts,mts}', '*.test.{ts,tsx,cts,mts}'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
