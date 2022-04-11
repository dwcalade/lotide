const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertEqual;

const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
if (arr1.length !== arr2.length)
  return false;
for (let i = arr1.length; i--;) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
return true;
};


module.exports = eqArrays;