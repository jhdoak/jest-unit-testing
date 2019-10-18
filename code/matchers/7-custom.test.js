expect.extend({
  toBeWithinRange: (received, floor, ceiling) => {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
      };
    } else {
      return {
        pass: false,
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      };
    }
  },
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110);

  expect(101).not.toBeWithinRange(0, 100);
  
  expect({apples: 6, bananas: 3}).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});
