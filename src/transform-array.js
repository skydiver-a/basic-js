const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (arr instanceof Array) {
      let result = [];
      let command = '';

      return arr.forEach((value, index) => {
        switch (value) {
          case '--discard-prev':
            if (index === 0) {
              break;
            } else {
              if (arr[index - 2] === '--discard-next') {
                break;
              }
              result.pop();
              break;
            }
          case '--discard-next':
            if (index === arr.length - 1) {
              break;
            } else {
              command = '--discard-next';
              break;
            }
          case '--double-next':
            if (index === arr.length - 1) {
              break;
            } else {
              command = '--double-next';
              break;
            }
            break;
          case '--double-prev':
            if (index === 0) {
              break;
            } else {
              if (arr[index - 2] === '--discard-next') {
                break;
              }
              result.push(arr[index-1]);
              break;
            }
            break;
          default:
            if (command === '--discard-next') {
              command = '';
              break;
            }
            if (command === '--double-next') {
              command = '';
              for (let i = 0; i < 2; i++) {
                result.push(value);
              }
              break;
            }
            result.push(value)
            break;
        }
      }), result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
