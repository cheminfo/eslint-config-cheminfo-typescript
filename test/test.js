import assert from 'node:assert';
import fs from 'node:fs';
import util from 'node:util';

import { Linter } from 'eslint';

import config from '../index.js';

const linter = new Linter({ configType: 'flat' });

function readTestFile(filename) {
  return fs.readFileSync(new URL(`./${filename}`, import.meta.url), 'utf8');
}

function verifyTestFile(filename) {
  return linter.verify(readTestFile(filename), config, {
    filename: `test/${filename}`,
  });
}

const okResult = verifyTestFile('ok.ts');
assert.strictEqual(
  okResult.length,
  0,
  `ok.js should have no error: ${util.inspect(okResult)}`,
);

const notOkResult = verifyTestFile('not_ok.ts');

const errors = notOkResult.filter(isError).map(getRuleId).sort();

assert.deepStrictEqual(errors, [
  '@typescript-eslint/array-type',
  '@typescript-eslint/no-non-null-assertion',
  '@typescript-eslint/no-unnecessary-type-assertion',
]);

const warnings = notOkResult
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
