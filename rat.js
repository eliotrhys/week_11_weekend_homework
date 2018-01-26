function Rat(){
  this.touch = function(food){
    food.poisoned = true;
  }
}

module.exports = Rat;
