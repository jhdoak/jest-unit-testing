const fetchUserById = require('../services/fetchUserById');

const getUsernameById = async (id) => {
  const user = await fetchUserById(id);
  return user.username;
}

module.exports = getUsernameById;