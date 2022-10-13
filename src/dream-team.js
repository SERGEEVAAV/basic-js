const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(arr) {

  var arr = ['Matt', 'Ann', 'Dmitry', 'Max'];
  arr[0].charAt(0) + arr[1].charAt(0) + arr[2].charAt(0) + arr[3].charAt(0);
 return(arr)
}

module.exports = {
  createDreamTeam
};
