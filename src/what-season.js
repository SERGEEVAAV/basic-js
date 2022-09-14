const { NotImplementedError } = require('../extensions/index.js');


//  * Extract season from given date and expose the enemy scout!
//  * 
//  * @param {Date | FakeDate} date real or fake date
//  * @returns {String} time of the year
//  * 
//  * @example
//  * 
  // getSeason(new Date(2020, 02, 31)) => 'spring'
 
 
// 
const getSeason = data => Math.floor((data.getMonth() / 12 * 4)) % 4

module.exports = {
  getSeason
};
