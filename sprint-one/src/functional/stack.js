var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var keys = Object.keys(storage);
    var numbers = [];
    keys.forEach(function(key){
      numbers.push(Number(key));
    });
    storage[numbers.length] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var numbers = [];
    keys.forEach(function(key){
      numbers.push(Number(key));
    });


    var lastValue = storage[numbers.length-1];
    delete storage[numbers.length-1];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
