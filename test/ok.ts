import { DataXY } from 'cheminfo-types';

import { TestType, testValue } from './internal_dep';

export interface X {
  v: string;
  t: TestType;
  xy?: DataXY;
}

export const x: X = {
  v: 'value',
  t: testValue,
};

/**
 * This is a test.
 * @param x - This is a x.
 * @returns The best number in the world.
 */
function test(x: readonly number[]) {
  return x[0] + 42;
}

test([1]);

/**
 * Logs 42.
 */
export function test2() {
  // eslint-disable-next-line no-console
  console.log(42);
}
