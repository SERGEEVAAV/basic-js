const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let n = str.length;
  for (let i = 0; i < n; i++)
  {
      // Count occurrences of current character
      let count = 1;
      while (i < n - 1 && str[i] == str[i+1])
      {
          count++;
          i++;
      }
            return(str[i], count);
            
}
}
let str = "aabbbc";
encodeLine(str);

module.exports = {
  encodeLine
};
