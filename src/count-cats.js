const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(/* matrix */) {
function countCats(matrix ) {
  let counter = 0;
  const pattern = '^^';

  for (let i = 0; i < matrix.length; i++) {
    let matches = matrix[i].filter(item => item === pattern).length;
    counter += matches;
  }
  return counter;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
