var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var lastValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return lastValue;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

