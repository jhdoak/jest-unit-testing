const moment = require('moment');

const daysFromNow = (days) => {
  return moment().add(days, 'days').format('MMMM Do YYYY');
}

module.exports = daysFromNow;