export interface X {
  v: string;
}

/**
 * This is a test.
 *
 * @param x - This is a x.
 * @returns The best number in the world.
 */
function test(x: number) {
  return x + 42;
}

test(1);

/**
 * Logs 42.
 */
export function test2() {
  // eslint-disable-next-line no-console
  console.log(42);
}
