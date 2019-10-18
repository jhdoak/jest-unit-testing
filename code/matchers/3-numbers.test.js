test('numbers', () => {
  const number = 5;
  expect(number).toBeGreaterThan(4);
  expect(number).toBeGreaterThanOrEqual(4.5);
  expect(number).toBeLessThan(6);
  expect(number).toBeLessThanOrEqual(5.5);
});

test('number equality', () => {
  number = 5;
  expect(number).toBe(5);
  expect(number).toEqual(5);
});

test('adding floats', () => {
  const result = 0.2 + 0.4;
  // expect(result).toBe(0.6);
  expect(result).toBeCloseTo(0.6);
});