var DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
}

var DLLNode = function(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

DoubleLinkedList.prototype.addToHead = function(value) {
  var node = new DLLNode(value);
  if (!this.head) {
    console.log(node)
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
};

DoubleLinkedList.prototype.addToTail = function(value) {
  var node = new DLLNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

DoubleLinkedList.prototype.removeHead = function() {
  var temp = this.head.next;
  this.head.next = null;
  this.head = temp;
  this.head.prev = null;
  
};

DoubleLinkedList.prototype.removeTail = function() {
  var temp = this.tail.prev;
  this.tail.prev = null;
  this.tail = temp;
  this.tail.next = null;
  
};

DoubleLinkedList.prototype.contains = function(value) {
  var currentNode = this.head;
  if (currentNode.value === value) {
    return true;
  }
  while(currentNode.next) {
    currentNode = currentNode.next;
    if (currentNode.value === value) {
      return true;
    }
  }
  return false
};