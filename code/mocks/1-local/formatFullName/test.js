describe('format full name', () => {
  const mockCapitalize = jest.fn();

  // Needs to be set up before require
  jest.mock('../utils/capitalize', () => mockCapitalize);

  const formatFullName = require('./index');

  beforeEach(() => {
    mockCapitalize
      .mockReturnValueOnce('formattedFirstName')
      .mockReturnValueOnce('banana');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns a capitalized username v1', () => {
    const user = {
      firstName: 'justin',
      lastName: 'doak'
    };

    const result = formatFullName(user);

    expect(mockCapitalize).toHaveBeenCalledTimes(2);
    expect(mockCapitalize.mock.calls[0][0]).toBe('justin');
    expect(mockCapitalize.mock.calls[1][0]).toBe('doak');
    expect(result).toBe('formattedFirstName banana');
  });

  it.skip('returns a capitalized username v2', () => {
    const user = {
      firstName: 'justin',
      lastName: 'doak'
    };
    const result = formatFullName(user);

    expect(mockCapitalize).toHaveBeenCalledTimes(2);
    expect(mockCapitalize).toHaveBeenNthCalledWith(1, 'justin');
    expect(mockCapitalize).toHaveBeenNthCalledWith(2, 'doak');
    expect(result).toBe('formattedFirstName banana');
  });

  it.skip('returns empty string when no user is passed', () => {
    const result = formatFullName();
    
    expect(mockCapitalize).not.toHaveBeenCalled();
    expect(result).toBe('');
  });
});