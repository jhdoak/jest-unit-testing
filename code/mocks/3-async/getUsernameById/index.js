const fetchUserById = require('../fetchUserById');

const getUsernameById = async (id) => {
  const user = await fetchUserById(id);
  return user.username;
}

module.exports = getUsernameById;