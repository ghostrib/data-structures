var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    
    if (!this.head) {
      this.head = newNode;
    }
    
    this.tail = newNode;
    
  };

  list.removeHead = function() {
    if (this.head) {
      var prevHead = this.head;
      this.head = this.head.next;
      return prevHead.value;
    }
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while(currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
