const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push(matrix[i].map(item => 0))
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((item, index) => {
      if (item === true) {
        if (matrix[i+1] !== undefined) {
          (newMatrix[i+1][index+1] !== undefined ) ? newMatrix[i+1][index+1]++ : false;
          (newMatrix[i+1][index] !== undefined ) ? newMatrix[i+1][index]++ : false;
          (newMatrix[i+1][index-1] !== undefined ) ? newMatrix[i+1][index-1]++ : false;
        }
        if (matrix[i-1] !== undefined) {
          (newMatrix[i-1][index+1] !== undefined ) ? newMatrix[i-1][index+1]++ : false;
          (newMatrix[i-1][index] !== undefined ) ? newMatrix[i-1][index]++ : false;
          (newMatrix[i-1][index-1] !== undefined ) ? newMatrix[i-1][index-1]++ : false;
        }
        (newMatrix[i][index+1] !== undefined ) ? newMatrix[i][index+1]++ : false;
        (newMatrix[i][index-1] !== undefined ) ? newMatrix[i][index-1]++ : false;
      }
    })
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
