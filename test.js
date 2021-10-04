'use strict';

require('mocha');
const assert = require('assert');
const isBigOdd = require('./');

describe('isBigOdd', function () {
  it('should return true if the given number is odd:', function () {
    assert(!isBigOdd(0));
    assert(isBigOdd(1));
    assert(!isBigOdd(2));
    assert(isBigOdd(3));
    assert(isBigOdd(-1));
    assert(isBigOdd(-3));
    assert(isBigOdd(1.0));
    assert(isBigOdd(9007199254740991));
  });

  it('should work with strings exceeding max safe integer:', function () {
    assert(!isBigOdd('0'));
    assert(isBigOdd('1'));
    assert(!isBigOdd('2'));
    assert(isBigOdd('3'));
    assert(isBigOdd('9007199254740991'));
    assert(!isBigOdd('9007199254740992'));
    assert(!isBigOdd('79950650819761854304877779877694'));
    assert(isBigOdd('68842829304362423453715707006083'));
    assert(isBigOdd('-68842829304362423453715707006083'));
    assert(!isBigOdd('563822772002728248085931640379819770'));
  });

  it('should throw an error when an invalid value is passed', function () {
    assert.throws(() => isBigOdd(), /Expected a value/);
    assert.throws(() => isBigOdd('foo'), /Cannot convert .* to a BigInt/);
    assert.throws(() => isBigOdd('1.1e0'), /Cannot convert .* to a BigInt/);
    assert.throws(() => isBigOdd('1.1'), /Cannot convert .* to a BigInt/);
  });
});
