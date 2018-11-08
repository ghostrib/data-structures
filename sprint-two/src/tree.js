var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var currNode = Tree(value);
  this.children.push(currNode);
};

treeMethods.contains = function(target) {
  
  var foundTarget = false;

  var searchFn = function(currNode) {
    if (currNode.value === target) {
      foundTarget = true;
    }

    if (currNode.children.length > 0) {
      for (var i = 0; i < currNode.children.length; i++) {
        searchFn(currNode.children[i]);
      }
    }
  };
  searchFn(this);
  return foundTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
