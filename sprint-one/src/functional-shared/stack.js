var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var keys = Object.keys(this.storage);
  var numbers = [];
  keys.forEach(function(key){
    numbers.push(Number(key));
  });
  this.storage[numbers.length] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var numbers = [];
  keys.forEach(function(key){
    numbers.push(Number(key));
  });
  var lastValue = this.storage[numbers.length - 1];
  delete this.storage[numbers.length - 1];
  return lastValue;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
