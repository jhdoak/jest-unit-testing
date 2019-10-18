test('Connect Tech has a T', () => {
  expect('Connect Tech').toMatch(/T/);
});

test('Connect Tech does not have an A', () => {
  expect('Connect Tech').not.toMatch(/A/);
});