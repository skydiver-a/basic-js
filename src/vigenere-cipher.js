const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true){
    if (mode === undefined) throw new Error();
    this.mode = mode;
    this.alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  getUppercaseArray(data) {
    return data.toUpperCase().split('');
  }

  encrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!');

      let keyArray = this.getUppercaseArray(key);
      let keyPosition = 0;

      let result = this.getUppercaseArray(message).map( item => {
          if (this.alphabetArray.indexOf(item) >= 0){
              let shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
              let newPosition = (shift + this.alphabetArray.indexOf(item)) % this.alphabetArray.length;
              keyPosition = ++keyPosition % keyArray.length;
              return this.alphabetArray[newPosition];
          }
          return item;
      } );
      return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!');

      let keyArray = this.getUppercaseArray(key);
      let keyPosition = 0;

      let result = this.getUppercaseArray(message).map( item => {
          if (this.alphabetArray.indexOf(item) >= 0){
              let shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
              let newPosition = (this.alphabetArray.indexOf(item) - shift);
              if (newPosition < 0) newPosition += this.alphabetArray.length
              keyPosition = ++keyPosition % keyArray.length;
              return this.alphabetArray[newPosition];
          }
          return item;
      } )
      return this.mode ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
