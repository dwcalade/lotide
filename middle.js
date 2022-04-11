
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let A = arr.length / 2 - 1;
    let B = arr.length / 2;
    return [arr[A], arr[B]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};

module.exports = middle;