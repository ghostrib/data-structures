var functionalStack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var lastValue = storage[keys.length-1];
    delete storage[keys.length-1];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


var functionalSharedStack = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, functionalSharedstackMethods);
  return someInstance;
};

var functionalSharedstackMethods = {};

functionalSharedstackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

functionalSharedstackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var lastValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return lastValue;
};

functionalSharedstackMethods.size = function() {
  return Object.keys(this.storage).length;
};


var prototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(prototypalstackMethods);
  someInstance.storage = {};
  return someInstance;
};

var prototypalstackMethods = {};

prototypalstackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

prototypalstackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var lastValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return lastValue; 
};

prototypalstackMethods.size = function() {
  return Object.keys(this.storage).length;
};

var pseudoclassicalStack = function() {
  this.storage = {};
};

pseudoclassicalStack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

pseudoclassicalStack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return lastValue;
};

pseudoclassicalStack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


class es6Stack {

  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop(){
    var keys = Object.keys(this.storage);
    var lastValue = this.storage[keys.length - 1];
    delete this.storage[keys.length - 1];
    return lastValue;
  }

  size(){
    return Object.keys(this.storage).length;
  }
}
