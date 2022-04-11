  //test code often!
  
  const flatten = function (arr) {
    var newArray = [];
    for (let a = 0; a < arr.length; a++) {
      if (Array.isArray(arr[a])) {
        for (let b = 0; b < arr[a].length; b++) {
          newArray.push(arr[a][b]);
        } }
         else {
          newArray.push(arr[a])
        }
      }
      return newArray;
      
    };
    
  
  //test code again
  console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
  console.log(flatten(["a", "b", [1, 2], "c", [6]])) // => ['a', 'b', 1, 2, 'c', 6]
  
  module.exports = flatten;