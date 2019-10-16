test('Connect Tech has a T', () => {
  expect('Connect Tech').toMatch(/T/);
});

test.skip('Connect Tech does not have an A', () => {
  expect('Connect Tech').not.toMatch(/A/);
});