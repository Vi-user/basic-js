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
  if (str.length < 1) return '';
  let res = [];
  let letter = [];
  let quantity = [];
//   let change = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      letter.push(str[i]);
      quantity.push(1);
    }  else {
      if (str.charCodeAt(i) === str.charCodeAt(i-1)) {
        quantity[quantity.length-1]++;
      } else {
        letter.push(str[i]);
        quantity.push(1);
      }
    }
  }

  for (let j = 0; j < letter.length; j++) {
    if (quantity[j] === 1 ) {
      res += letter[j];
    } else {
      res += quantity[j];
      res += letter[j];
    }
  }

  return res;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
