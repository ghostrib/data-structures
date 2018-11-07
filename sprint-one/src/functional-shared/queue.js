var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  var numbers = [];
  keys.forEach(function(key){
    numbers.push(Number(key));
  });
  this.storage[numbers.length] = value;
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
