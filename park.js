var Park = function (dinosaur) {
  this.parkEnclosureArray = [];

  Park.prototype.addDinosaur = function(dinosaur) {
      this.parkEnclosureArray.push(dinosaur);
    };

    Park.prototype.removeType = function(dinosaurType){

        for(var i = this.parkEnclosureArray.length - 1; i >= 0; i--) {
            if(this.parkEnclosureArray[i].type === dinosaurType) {
               this.parkEnclosureArray.splice(i, 1);
            }
        }
    };

    Park.prototype.getOffspringMoreThanTwo = function() {
      var filteredParkEnclosureArray = this.parkEnclosureArray.filter(function(dinosaur)
        {
           return dinosaur.offspring > 2
        });
      return filteredParkEnclosureArray;
    }
  };


  Park.prototype.empty = function(){
    this.parkEnclosureArray = 0;
  }



module.exports = Park;