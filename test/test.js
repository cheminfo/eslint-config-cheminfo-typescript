'use strict';

const assert = require('assert');
const util = require('util');
const { CLIEngine } = require('eslint');

const engine = new CLIEngine({ configFile: 'index.js' });

const [okResult, notOkResult] = engine.executeOnFiles([
  'test/ok.ts',
  'test/notOk.ts',
]).results;

assert.strictEqual(
  okResult.errorCount,
  0,
  'ok.js should have no error: ' + util.format(okResult),
);

const errors = notOkResult.messages
  .filter(isError)
  .map((error) => error.ruleId)
  .sort();
assert.deepStrictEqual(errors, [
  '@typescript-eslint/consistent-type-definitions',
]);

function isError(message) {
  return message.severity === 2;
}
