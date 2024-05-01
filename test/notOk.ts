const x: number | null = 1;

function testX(x: number) {
  return x;
}

testX(x!);

function testY(y: (number | string)[]) {
  return y;
}

testY([1, 2, 3, '4']);

deprecatedFn();

/**
 * @deprecated
 */
function deprecatedFn() {
  return 42;
}
