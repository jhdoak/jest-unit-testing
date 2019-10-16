const brokenFunction = () => {
  throw new Error('something bad happened!');
}

test('the broken function throws', () => {
  expect(brokenFunction).toThrow();
  expect(brokenFunction).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(brokenFunction).toThrow('something bad happened!');
  expect(brokenFunction).toThrow(/something bad/);
});