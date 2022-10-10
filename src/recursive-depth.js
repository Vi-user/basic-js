const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
   this.counter = 0;
  }

  calculateDepth(arr) {
      this.result = 0;
    if (arr.every(elem => !Array.isArray(elem))) {
        this.counter++;
        this.result = this.counter;
        this.counter = 0;
    } else {
      this.counter++;
      this.calculateDepth(arr.flat())
    }
      return this.result;
  }

}


module.exports = {
  DepthCalculator
};
