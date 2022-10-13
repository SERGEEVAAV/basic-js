const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let result = [];
  email.forEach(mail => {
      let domain = mail.substr(mail.indexOf('@'));
      if  (result.indexOf(domain) == -1)
          result.push(domain);
  });
  return result;
}

let email = ['asdfgg@gmail.com', 'fgtrreds@yahoo.com', 'dgfit@gmail.com', 'prettyandsimple@example.com'];
console.log(getEmailDomain(email));

module.exports = {
  getEmailDomain
};
