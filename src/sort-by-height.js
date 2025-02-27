const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  if (arr.length <= 1) return arr;
  if (arr.every(item => item === +'-1')) return arr;
  if (!arr.includes(+'-1')) return arr.sort((a,b) => a-b);

  const cloneArr = arr
      .slice()
      .sort((a,b) => a-b)
      .filter(item => item !== +'-1');
  let step = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] !== +'-1') {
      arr[i] = cloneArr[step];
      step++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
