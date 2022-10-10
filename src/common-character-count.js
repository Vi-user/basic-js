const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let counter = 0;
  let copy = s2.slice().split('');
  for (let i = 0; i < s1.length; i++) {
    if (copy.find(el => el === s1[i])) {
      const index = copy.findIndex(el => el === s1[i]);
      copy.splice(index, 1);
      counter++
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
