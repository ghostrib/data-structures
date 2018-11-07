var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
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
