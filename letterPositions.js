//TEST CODE 

const letterPositions = function(sentence) {
     const results = {};
    console.log(sentence);
    let newSentence = sentence.toLowerCase();
      for (let i = 0; i < newSentence.length; i++) {
      let char = newSentence[i];
  
      if(results[char]) {
        results[char].push(i);
        // key exists
        //append index to key value
      } else {
        results[char] = [i];
  
        //create new key value pair
      
      
    }
  }
    return results;
  };
  
  // TEST CODE AGAIN
  // console.log(letterPositions("morning"));
  letterPositions("morning");
  
  module.exports = letterPositions;