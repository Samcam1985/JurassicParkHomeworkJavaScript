var assert = require('assert');
var Dinosaur = require('../dinosaur');

describe("Dinosaur", function (){
  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 4);
  });

  it("Should be Tyrannosaurus", function(){
    assert.strictEqual("Tyrannosaurus",dinosaur.type);
  });

  it("Should have 4 offspring per year", function(){
    assert.strictEqual(4, dinosaur.offspring);
  });
});