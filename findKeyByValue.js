//Implement function to scan through objects and values
  const findKeyByValue = function(obj, value) {
    for (const objKeys in obj ) {
      if (obj[objKeys] === value) {
        return objKeys; //return undefined 
      }
    }
  };

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Parks and Recreation",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Parks and Recreation"), "comedy");

  module.exports = findKeyByValue;
