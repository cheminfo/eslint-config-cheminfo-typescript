import assert from 'assert';
import util from 'util';
import { ESLint } from 'eslint';

const engine = new ESLint({ overrideConfigFile: 'eslintrc.test.yml' });

const [okResult, notOkResult] = await engine.lintFiles([
  'test/ok.ts',
  'test/notOk.ts',
]);

assert.strictEqual(
  okResult.errorCount,
  0,
  'ok.js should have no error: ' + util.format(okResult.messages),
);

assert.strictEqual(
  okResult.warningCount,
  0,
  'ok.js should have no warnings: ' + util.format(okResult.messages),
);

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
