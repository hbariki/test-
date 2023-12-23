// Find MaxNodeId
const findMaxNodeId = (node) => {
    let maxId = node.id;
      for (const child of node.children) {
      const childMaxId = findMaxNodeId(child);
      maxId = Math.max(maxId, childMaxId);
    }
  
    return maxId;
  };

// Add new node with the id incrementally based on last max node
  const addNewNodeIncremental = (parent, label) => {
    const lastNodeId = findMaxNodeId(treeData);
    const newNodeId = lastNodeId + 1;
  
    const newNode = {
      id: newNodeId,
      label: label || `Node ${newNodeId}`,
      children: [],
    };
  
    parent.children.push(newNode);
  
    return newNode;
  };
