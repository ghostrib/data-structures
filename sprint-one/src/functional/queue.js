var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var numbers = [];
    keys.forEach(function(key){
      numbers.push(Number(key));
    });
    storage[numbers.length] = value;
  };

  someInstance.dequeue = function() {
    var firstKey = storage['0'];
    var keys = Object.keys(storage);
    for (var i = 1; i < keys.length; i++) {
      storage[i - 1] = storage[i];
      // console.log(storage)
    }
    delete storage[keys.length -1];
    return firstKey;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
