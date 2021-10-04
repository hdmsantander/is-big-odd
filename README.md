# is-big-odd

> Returns true if the given number is odd, accepts numbers that may exceed MAX_SAFE_INTEGER value in Javascript.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-big-odd
```

## Usage

It works with strings or numbers

```js
const isBigOdd = require('is-big-odd');

console.log(isBigOdd('1')); //=> true
console.log(isBigOdd('68842829304362423453715707006083')); //=> true

console.log(isBigOdd(0)); //=> false
console.log(isBigOdd('563822772002728248085931640379819770')); //=> false
```

## License

Copyright (c) 2021, [Roberto Fabián Escobar Santander](https://github.com/hdmsantander).
Released under the [MIT License](LICENSE).
