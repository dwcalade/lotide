//TEST CODE OFTEN
const without = function(source, itemsToRemove) {
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          source.splice(i, 1);
        }
      }
    }
    return source;
  }
  
  // TEST CODE AGAIN
  const words = ["hello", "world", "lighthouse"];
  without(["hello", "world", "lighthouse"], ["lighthouse"]); 
  
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  
  console.log(without([1, 2, 3], [1])); // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
  
  module.exports = without;