class Stack {

  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop(){
    var keys = Object.keys(this.storage);
    var lastValue = this.storage[keys.length - 1];
    delete this.storage[keys.length - 1];
    return lastValue;
  }

  size(){
    return Object.keys(this.storage).length;
  }
}