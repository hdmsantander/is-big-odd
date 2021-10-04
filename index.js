'use strict';

module.exports = function isBigOdd(value) {
  if (typeof value === 'undefined') {
    throw new TypeError('Expected a value');
  }

  let num = BigInt(value);

  if (num < 0) {
    num = num * -1n;
  }

  return num & 1n;
};
