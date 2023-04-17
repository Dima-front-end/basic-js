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
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    for (let el of arr) {
      if (Array.isArray(el)) {
        const subDepth = this.calculateDepth(el, depth + 1);
        maxDepth = Math.max(maxDepth, subDepth);
      }
    }
    return maxDepth;
  }
}


module.exports = {
  DepthCalculator
};
