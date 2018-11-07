class Queue {


  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  dequeue() {
    var firstKey = this.storage['0'];
    var keys = Object.keys(this.storage);
    for (var i = 1; i < keys.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[keys.length - 1];
    return firstKey;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
