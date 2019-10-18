describe('days from now', () => {
  const mockMoment = jest.fn().mockImplementation(
    () => mockMomentObject
  );
  
  const mockMomentObject = {
    add: jest.fn().mockReturnThis(),
    format: jest.fn().mockReturnValue('a formatted date')
  }

  // Needs to be set up before require
  jest.mock('moment', () => mockMoment);

  const daysFromNow = require('./index');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('adds the passed number of days and formats return', () => {
    const daysToAdd = 4;

    const result = daysFromNow(daysToAdd);

    expect(mockMoment).toHaveBeenCalled();
    expect(mockMomentObject.add).toHaveBeenCalledWith(daysToAdd, 'days');
    expect(mockMomentObject.format).toHaveBeenCalledWith('MMMM Do YYYY');
    expect(result).toBe('a formatted date');
  });
});