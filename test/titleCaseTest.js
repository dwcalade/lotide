const assert = require('chai').assert;
const titleCase   = require('../titleCase');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '555'); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  it("returns 5 for [11,12,13]", () => {
    assert.strictEqual(head([11,12,13]), 5);
  });
});


titleCase("this is an example") should return "This Is An Example"
titleCase("test") should return "Test"
titleCase("i r cool") should return "I R Cool"
titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
titleCase("") should return ""
titleCase("A") should return "A"

