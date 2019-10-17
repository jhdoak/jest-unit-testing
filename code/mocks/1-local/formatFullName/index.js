const capitalize = require('../capitalize');

const formatFullName = (user) => {
  if (!user) {
    return '';
  }
  return `${capitalize(user.firstName)} ${capitalize(user.lastName)}`
}

module.exports = formatFullName;