var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


///// METHODS   //////


BinarySearchTree.prototype.insert = function(value){
  var currNode = this;
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
      currNode[direction] = new BinarySearchTree(value);
      foundBottom = true;
    }
  }   
}

BinarySearchTree.prototype.contains = function(value) {
  var currNode = this;
  
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


BinarySearchTree.prototype.depthFirstLog = function(func) {
  
  var currNode = this;

  var applyCallbackRecursively = function(node) {
    func(node.value);

    // do recursive call for all child nodes
    if (node.left) {
      applyCallbackRecursively(node.left);
    }
    if (node.right) {
      applyCallbackRecursively(node.right);
    }
  }
  applyCallbackRecursively(currNode);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
