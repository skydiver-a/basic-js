const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  // string conditions
  str = (str === undefined) ? ''
        : (str === null) ? 'null'
        : (typeof str == 'object') ? str.valueOf()
        : String(str);

  // options conditions
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.separator) options.separator = '+';
  options.addition = (options.addition === null) ? 'null'
                    : (typeof options.addition == 'object') ? options.addition.valueOf()
                    : (options.addition === undefined) ? '' : String(options.addition);
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.additionSeparator) options.additionSeparator = '|';

  // add separator
  let separator = '';
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    separator += options.addition + options.additionSeparator;
  }
  separator += options.addition;

  // add resulting string
  let result = '';
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result += str + separator + options.separator;
  }
  return result + str + separator;
}

module.exports = {
  repeater
};
