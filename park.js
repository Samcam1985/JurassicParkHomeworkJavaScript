var Park = function (dinosaur) {
  this.parkEnclosureArray = [];

  Park.prototype.addDinosaur = function(dinosaur) {
      this.parkEnclosureArray.push(dinosaur);
    };
  };



// Park.prototype.empty = function(){
//   this.empty = 0;
// }

module.exports = Park;