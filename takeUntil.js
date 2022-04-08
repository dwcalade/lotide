const takeUntil = function(array, callback) {
    let result = [];
    for (let x in array) {
      if (callback(array[x])) {
        result = array.slice(0, x);
        return result;
      }
    }
    return result;
  };
  
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
  
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅✅✅ ${arr1} === ${arr2}`);
    } else {
      console.log(`🛑🛑🛑 ${arr1} !== ${arr2}`);
    }
  };
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');

  
  // Test with assertArraysEqual
  assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);  // TRUE
  assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ]);  //FALSE
  
  module.exports = takeUntil;