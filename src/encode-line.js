const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (!str) return '';

  let letter = str[0];
  let counter = 0;
  let result = '';
  str += '.'

  str.split('').forEach(current => {
    if (current === letter) {
      counter++;
    } else {
      result += (counter === 1 ?  letter : (counter + letter));
      counter = 1;
      letter = current;
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
