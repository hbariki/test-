
// treeController.js
import { findNodeById, addNewNodeIncremental, formatTree } from '../../services/treeService.js';
import  treeData   from '../../data/treeData.js'


const doesLabelExistInTree = (label, node) => {
  if (node.label === label) {
    return true;
  }

  for (const child of node.children) {
    if (doesLabelExistInTree(label, child)) {
      return true;
    }
  }

  return false;
};

const getTree = (req, res) => {
  const formattedTree = formatTree(treeData);
  res.json({ message: 'GET request successful', tree: formattedTree });
};

const addNode = (req, res) => {
  if (!req.body || !req.body.parent || !req.body.label) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const parentId = req.body.parent;
  const parent = findNodeById(parentId, treeData);

  if (!parent) {
    return res.status(404).json({ error: 'Parent node not found' });
  }

  const label = req.body.label;
   // check if label exists already
   const isLabelAlreadyExistsInTree = doesLabelExistInTree(label, treeData);

  if (isLabelAlreadyExistsInTree) {
    return res.status(400).json({ error: 'Label already exists in the tree' });
  }

  const newNode = addNewNodeIncremental(parent, label);

  res.json({ message: 'Node added successfully', newNode });
};

export { getTree, addNode };
