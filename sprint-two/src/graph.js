

// Instantiate a new graph
var Graph = function() {
  this.nodes =[];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeIndex = this.nodes.indexOf(node);
  this.nodes.splice(nodeIndex,1);
  for( var key in this.edges) {
    if (this.edges[key].includes(node)) {
      this.removeEdge(node,key)
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
 // console.log(this.edges)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = this.edges[fromNode].indexOf(toNode);  
  var fromNodeIndex = this.edges[toNode].indexOf(fromNode);
  this.edges[fromNode].splice(toNodeIndex,1);
  this.edges[toNode].splice(fromNodeIndex,1);
};

// Pass in a callback which will be executed on each 
// node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

