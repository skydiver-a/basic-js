const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = (value === null) ? 'null'
          : (typeof value === 'undefined') ? ''
          : String(value);
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position !== 'number'
          || position < 1
          || position >= this.chain.length
          || Math.round(position) != position) throw new Error('You can\'t remove incorrect link!');
      this.chain.splice(position - 1, 1);
      return this;
    }
    catch (err) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
