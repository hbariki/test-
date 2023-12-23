// treeService.js
import  treeData   from '../data/treeData.js'

const findNodeById = (id, node) => {
  if (!node || typeof node !== 'object') {
    return null;
  }
  if (node.id === id) {
    return node;
  }

  for (const child of node.children) {
    const foundNode = findNodeById(id, child);
    if (foundNode) {
      return foundNode;
    }
  }

  return null;
};

const findMaxNodeId = (node) => {
  let maxId = node.id;
  for (const child of node.children) {
    const childMaxId = findMaxNodeId(child);
    maxId = Math.max(maxId, childMaxId);
  }

  return maxId;
};

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

const formatTree = (node) => {
  const result = {};
  result[node.id] = {
    label: node.label,
    children: node.children.map(formatTree),
  };
  return result;
};

export { findNodeById, findMaxNodeId, addNewNodeIncremental, formatTree };
