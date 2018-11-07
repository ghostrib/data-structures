var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastValue = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return lastValue;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
