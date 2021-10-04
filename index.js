'use strict';

module.exports = function isBigOdd(value) {
  if (typeof value === 'undefined') {
    throw new TypeError('Expected a value');
  }

  let num = BigInt(value);

  return Boolean(num & 1n);
};
