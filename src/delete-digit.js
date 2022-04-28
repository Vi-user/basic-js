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
// function deleteDigit(/* n */) {
function deleteDigit(n) {
  const arrOfDigits = n.toString().split('');
  let indexToDelete = 0;

  while (indexToDelete < arrOfDigits.length && arrOfDigits[indexToDelete] >= arrOfDigits[indexToDelete+1]) {
    indexToDelete++;
  }

  if (arrOfDigits.length === indexToDelete+1) {
    return +arrOfDigits.slice(0, -1).join('');
  } else {
    arrOfDigits.splice(indexToDelete, 1);
    return +arrOfDigits.join('');
  }


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
