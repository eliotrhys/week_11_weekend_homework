const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");
const Rat = require("../rat.js");

describe("Hero", function(){

  beforeEach(function(){
    homesquash = new Hero("Homesquash", 100, "Gnome Bits");
    task1 = new Task(5, 5, 500, false);
    task2 = new Task(10, 9, 500, false);
    task3 = new Task(20, 7, 500, false);
    bread = new Food("Bread", 20);
    gnomeBits = new Food("Gnome Bits", 40);
    rat = new Rat();
  })

  it("Can get default values", function(){
    assert.strictEqual(homesquash.name, "Homesquash");
    assert.strictEqual(homesquash.health, 100);
    assert.strictEqual(homesquash.favouriteFood, "Gnome Bits");
  })

  it("Can get default values task", function(){
    assert.strictEqual(task1.difficultyLevel, 5);
    assert.strictEqual(task1.urgencyLevel, 5);
    assert.strictEqual(task1.reward, 500);
    assert.strictEqual(task1.complete, false);
  })

  it("Can add task", function(){
    homesquash.addTask();
    assert.strictEqual(homesquash.taskListLength(), 1);
  })

  it("Can eat", function(){
    homesquash.eatFood(bread);
    assert.strictEqual(homesquash.health, 120);
  })

  it("Can eat favourite food", function(){
    homesquash.eatFood(gnomeBits);
    assert.strictEqual(homesquash.health, 160);
  })

  it("Can sort by difficulty/urgency level", function(){
    homesquash.addTask(task1);
    homesquash.addTask(task2);
    homesquash.addTask(task3);
    assert.deepEqual(homesquash.sortByDifficulty(), [task1, task2, task3]);
    assert.deepEqual(homesquash.sortByUrgency(), [task2, task3, task1]);
  })

  it("Can mark test as true", function(){
    homesquash.addTask(task1);
    homesquash.addTask(task2);
    homesquash.addTask(task3);
    homesquash.markTaskComplete(task1);
    assert.strictEqual(task1.complete, true);
    assert.deepEqual(homesquash.showCompleteTasks(), [task1]);
    assert.deepEqual(homesquash.showIncompleteTasks(), [task2, task3]);
  })

  it("Can make food poisonous", function(){
    rat.touch(bread);
    assert.strictEqual(bread.poisoned, true);
  })

  it("Can eat poisonous food", function(){
    rat.touch(bread);
    homesquash.eatFood(bread);
    assert.strictEqual(homesquash.health, 80);
  })

  it("Lodash works", function(){
    assert.strictEqual(homesquash.lodashTest("going_to_sleep"), "goingToSleep");
  })










})
