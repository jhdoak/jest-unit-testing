describe('get user by id controller', () => {
  let userToReturn;

  const mockGetUserById = jest.fn()
    .mockImplementation(() => Promise.resolve(userToReturn));
  
  jest.mock('../../services/getUserById', () => mockGetUserById);
  
  const controller = require('./index');

  const req = {};

  const mockRes = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };

  const mockNext = jest.fn();

  beforeEach(() => {
    req.params = {};
    userToReturn = null;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('gets user by id, responds with 200 and fetched user', async () => {
    userToReturn = {
      username: 'jhdoak'
    };
    
    req.params.userId = 15;

    await controller(req, mockRes, mockNext);

    expect(mockGetUserById).toHaveBeenCalledWith(15);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(userToReturn);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it.skip('throws and calls next with error if user is not found', async () => {
    userToReturn = null;

    req.params.userId = 15;

    await controller(req, mockRes, mockNext);

    expect(mockGetUserById).toHaveBeenCalledWith(15);
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.send).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalledWith(new Error('user does not exist'));
  });
});
