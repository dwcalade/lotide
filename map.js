const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 ${arr1} !== ${arr2}`)
  }
}

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]) // true

const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])  // true

const results3 = map(words, word => `${word}ING`);
console.log(results3);
assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ]) // false
