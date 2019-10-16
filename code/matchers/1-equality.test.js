// Use .toBe() to check exact equality
test('Connect Tech should be awesome', () => {
  const connectTech = 'awesome'
  expect(connectTech).toBe('awesome');
});

test.skip('Connect Tech should not be bad', () => {
  const connectTech = 'awesome'
  expect(connectTech).not.toBe('bad');
});

// Use .toEqual() to check value equality
test.skip('toEqual() checks object values recursively', () => {
  const object1 = { color: 'blue', other: { color: 'pink'} };
  const object2 = { color: 'blue', other: { color: 'pink'} };
  expect(object1).toEqual(object2);
});

test.skip('toEqual() checks array values recursively', () => {
  const array2 = ['one', 2, true];
  const array1 = ['one', 2, true];
  expect(array1).toEqual(array2);
});

test.skip('toBe() fails when checking exact equality', () => {
  const array1 = ['one', 2, true];
  const array2 = ['one', 2, true];
  expect(array1).toBe(array2);
});
