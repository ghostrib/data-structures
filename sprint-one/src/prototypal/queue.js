var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = Object.create(Queue.prototype);
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

queueMethods.dequeue = function() {
  var firstKey = this.storage['0'];
  var keys = Object.keys(this.storage);
  for (var i = 1; i < keys.length; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[keys.length - 1];
  return firstKey;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
