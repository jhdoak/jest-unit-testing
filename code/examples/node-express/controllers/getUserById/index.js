const getUserById = require('../../services/getUserById');

module.exports = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);

    if (!user) {
      throw new Error('user does not exist');
    }

    return res.status(200).send(user);
  } catch (error) {
    return next(error);
  }
};
