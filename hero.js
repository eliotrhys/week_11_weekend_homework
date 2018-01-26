function Hero(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.talk = function(){
    console.log(`My name is ${this.name}!`);
  }
  this.tasks = [];
  this.treasure = [];
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.taskListLength = function(){
  return this.tasks.length;
}

Hero.prototype.eatFood = function(food){
  if (food.name === this.favouriteFood){
    this.health = ((food.replenishment * 1.5) + this.health);
  }
  else {
    this.health = (food.replenishment + this.health);
  }
}

Hero.prototype.sortByDifficulty = function(){
  function compareDifficulty(task1, task2){
    return task1.difficultyLevel - task2.difficultyLevel;
  }
  var sortedArray = this.tasks.sort(compareDifficulty);
  return sortedArray;
}

Hero.prototype.sortByUrgency = function(){
  function compareUrgency(task1, task2){
    return task2.urgencyLevel - task1.urgencyLevel;
  }
  var sortedArray = this.tasks.sort(compareUrgency);
  return sortedArray;
}

// SOMEHOW TAKING 2 FROM 1 INSTEAD OF 1 FROM 2 REVERSES THE SORT ORDER

Hero.prototype.markTaskComplete = function(task){
  task.complete = true;
}

Hero.prototype.showCompleteTasks = function(){
  return this.tasks.filter(task => task.complete === true);
}

Hero.prototype.showIncompleteTasks = function(){
  return this.tasks.filter(task => task.complete === false);
}


module.exports = Hero;
