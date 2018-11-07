var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Queue.prototype.dequeue = function() {
  var firstKey = this.storage['0'];
  var keys = Object.keys(this.storage);
  for (var i = 1; i < keys.length; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[keys.length - 1];
  return firstKey;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};



