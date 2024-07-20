import assert from 'node:assert';

import { loadESLint } from 'eslint';

const ESLint = await loadESLint({ useFlatConfig: true });
/** @type {import('eslint').ESLint} */
const eslint = new ESLint();

const [okResult, notOkResult] = await eslint.lintFiles([
  'test/ok.ts',
  'test/not_ok.ts',
]);

assert.strictEqual(okResult.errorCount, 0, 'ok.ts should have no error');

const errors = notOkResult.messages.filter(isError).map(getRuleId).sort();

assert.deepStrictEqual(errors, [
  '@typescript-eslint/array-type',
  '@typescript-eslint/no-non-null-assertion',
  '@typescript-eslint/no-unnecessary-type-assertion',
]);

const warnings = notOkResult.messages
  .filter(isWarning)
  .filter(excludeJsdoc)
  .map(getRuleId)
  .sort();
assert.deepStrictEqual(warnings, ['deprecation/deprecation']);

function isError(message) {
  return message.severity === 2;
}

function isWarning(message) {
  return message.severity === 1;
}

function excludeJsdoc(message) {
  return !message.ruleId.startsWith('jsdoc/');
}

function getRuleId(message) {
  return message.ruleId;
}
