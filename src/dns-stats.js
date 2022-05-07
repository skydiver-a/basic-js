const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  return domains.forEach((domain => {
      (word => {
          let words = word.split('.');
          words[words.length - 1] = `.${words[words.length - 1]}`, words.reverse();
          for (let i = 0; i < words.length; i++) {
              let key = words.slice(0, i + 1).join('.');
              Object.keys(result).includes(key) ? result[key]++ : result[key] = 1
          }
      })(domain)
  })), result;
}

module.exports = {
  getDNSStats
};
