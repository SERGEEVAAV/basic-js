const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
//   let str = n.toString();
//   num = str.slice(0,  str.length - 1);
//  return num;
let x = 152;
let p = 1;
while (x / p > 9) p *= 10;
let y = x % p;
return y;


}

module.exports = {
  deleteDigit
};
