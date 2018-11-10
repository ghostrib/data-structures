

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.storage[index])){
    this._storage.storage[index] = [];
  }

  // Need to check if key already exists in bucket
  if (this.retrieve(k) === undefined) {
    this._storage.set(index, [k, v]);
    this._counter++;
    if (this._counter > this._limit * 0.75) {
      var newlimit = this._limit * 2;
      this.reHash(this._storage.storage, newlimit);
    }
  } else {
    var bucket = this._storage.storage[index]
    for (i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } 
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};  

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i,1);
      this._counter -= 1;
      if (this._counter < this._limit * 0.25) {
        var newlimit = this._limit /= 2;
        this.reHash(this._storage.storage, newlimit);
      }
    }
  }
};

HashTable.prototype.reHash = function(hashtable, newlimit) {
  var temp = [];
  for (var i = 0; i < hashtable.length; i++) {
    if (hashtable[i]) {
      for(var j = 0; j < hashtable[i].length; j++){ 
        temp.push(hashtable[i][j]);
      }
    }
  }
  this._limit = newlimit;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
  for (var k = 0; k < temp.length; k++) {
    this.insert(temp[k][0], temp[k][1]);
  }
};




















/*
 * Complexity: What is the time complexity of the above functions?
 */


