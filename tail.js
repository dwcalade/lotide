const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };
  
  module.exports = assertEqual;


  const assertEqual = require('./assertEqual');


const tail = function(actual) {
  return actual.slice(1);
};

module.exports = tail;