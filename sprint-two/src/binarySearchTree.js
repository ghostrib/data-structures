var BinarySearchTree = function(value) {
  var node = new BSTNode(value);
  this.head = this;
  this.value = value;
  this.left = null;
  this.right = null;
};



var BSTNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


///// METHODS   //////

 
BinarySearchTree.prototype.insert = function(value){
  var currNode = this.head;
  var direction;
  var foundBottom = false;

  while(!foundBottom) {
    if (value < currNode.value) {
      direction = 'left';
    } else {
      direction = 'right';
    }

    if (currNode[direction]) {
      currNode = currNode[direction];
    } else {
      currNode[direction] = new BSTNode(value);
      foundBottom = true;
    }
  }   
}

BinarySearchTree.prototype.contains = function(value) {
  var currNode = this.head;
  
  var hasValue = function(node) {
    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      if (node.left === null) {
        return false;
      } else {
        return hasValue(node.left);
      }
    } else {
      if (node.right === null) {
        return false;
      } else {
        return hasValue(node.right);
      }
    }
  }

  return hasValue(currNode);
}


BinarySearchTree.prototype.depthFirstLog = function(value) {
  return undefined;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
