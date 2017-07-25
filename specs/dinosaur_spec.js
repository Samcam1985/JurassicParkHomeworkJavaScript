var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  it("Should be Tyrannosaurus", function(){
    var dinosaur = new Dinosaur();
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });
});