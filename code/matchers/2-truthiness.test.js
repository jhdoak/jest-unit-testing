/*
  toBeNull();
  toBeUndefined();
  toBeDefined();
  toBeTruthy();
  toBeFalsy();
*/

test('null value', () => {
  expect(null).toBeNull();
  expect(null).not.toBeUndefined();
  expect(null).toBeDefined();
  expect(null).not.toBeTruthy();
  expect(null).toBeFalsy();
});

test('undefined value', () => {
  expect(undefined).not.toBeNull();
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeDefined();
  expect(undefined).not.toBeTruthy();
  expect(undefined).toBeFalsy();
});

test('falsy value', () => {
  const zero = 0;
  expect(zero).not.toBeNull();
  expect(zero).not.toBeUndefined();
  expect(zero).toBeDefined();
  expect(zero).not.toBeTruthy();
  expect(zero).toBeFalsy();
});