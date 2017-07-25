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

  it('should start with an empty enclosure', function() {
   assert.strictEqual(park.parkEnclosureArray.length, 0);
 });

  it('should remove all of 1 type', function(){
    park.addDinosaur(new Dinosaur("Velociraptor", 6));
    park.addDinosaur(new Dinosaur("Velociraptor", 1));
    park.addDinosaur(new Dinosaur("Triceratops", 4));
    park.addDinosaur(new Dinosaur("Tyrannosaurus", 1));
    park.removeType("Velociraptor");
    assert.strictEqual(park.parkEnclosureArray.length, 2);
  });

  it('should get dinosaurs with offspring count more than 2', function(){
    park.addDinosaur(new Dinosaur("Velociraptor", 6));
    park.addDinosaur(new Dinosaur("Velociraptor", 1));
    park.addDinosaur(new Dinosaur("Triceratops", 4));
    park.addDinosaur(new Dinosaur("Tyrannosaurus", 1));
    assert.strictEqual(park.getOffspringMoreThanTwo().length, 2)
  })
});