var assert = require('assert');
var Park = require('../park')
var Dinosaur = require('../dinosaur');

describe('park', function() {
  var park;
  var dinosaur;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur();
  });

  it('should add 1 dinosaur', function () {
    park.addDinosaur(new Dinosaur("Tyrannosaurus", 5));
    assert.strictEqual(park.parkEnclosureArray.length, 1);
  });

 // it('should start with an empty enclosure', function() {
 //     assert.strictEqual(park.enclosure.length, 0)
 //   });
});