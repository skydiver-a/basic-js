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
 function deleteDigit(n) {
  let arrDigits = String(n).split('')
  let result = 0;
  for (let i = 0; i < arrDigits.length; i++) {
    let newArr = [...arrDigits];
    newArr.splice(i, 1);
    let sum = +newArr.join('');
    if (sum > result)
      result = sum;
  }
  return result;
}

module.exports = {
  deleteDigit
};
