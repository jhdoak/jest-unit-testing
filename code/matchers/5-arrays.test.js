test('the list of movies includes Nacho Libre', () => {
  const movies = ['The Dark Knight', 'Nacho Libre']
  expect(movies).toContain('Nacho Libre');
  expect(new Set(movies)).toContain('Nacho Libre');
});

test('the list of movies does not include Batman vs Superman', () => {
  const movies = ['The Dark Knight', 'Nacho Libre']
  expect(movies).not.toContain('Batman vs Superman');
  expect(new Set(movies)).not.toContain('Batman vs Superman');
});