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
