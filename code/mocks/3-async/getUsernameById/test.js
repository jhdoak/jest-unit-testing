describe('get username by id', () => {
  const mockFetchUser = jest.fn()
    .mockResolvedValue({ username: 'justin_doak' });

  // Needs to be set up before require
  jest.mock('../fetchUserById', () => mockFetchUser);

  const getUsernameById = require('./index');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches user by id and returns its username', async () => {
    const userId = 8;

    const result = await getUsernameById(userId);

    expect(mockFetchUser).toHaveBeenCalledWith(userId);
    expect(result).toBe('justin_doak');
  });
});