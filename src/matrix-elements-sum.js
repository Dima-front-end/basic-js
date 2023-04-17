const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let sum = 0;

  for (let j = 0; j < numCols; j++) {
    for (let i = 0; i < numRows; i++) {
      if (matrix[i][j] === 0) {
        // stop counting in this column if a 0 is encountered
        break;
      }
      sum += matrix[i][j];
    }
  }

  return sum;
}


module.exports = {
  getMatrixElementsSum
};
