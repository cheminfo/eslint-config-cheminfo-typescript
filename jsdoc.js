'use strict';

module.exports = {
  extends: ['cheminfo/jsdoc'],
  overrides: [
    {
      files: ['*.{ts,tsx,cts,mts}'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/no-types': 'warn',
      },
    },
  ],
};
