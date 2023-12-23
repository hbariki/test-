// models/treeModel.js
class TreeNode {
    constructor(id, label, children = []) {
      this.id = id;
      this.label = label;
      this.children = children;
    }
  }
  
  module.exports = TreeNode;
  