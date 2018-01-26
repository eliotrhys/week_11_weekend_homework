function Task(difficultyLevel, urgencyLevel, reward, complete){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = complete;
}

module.exports = Task;
