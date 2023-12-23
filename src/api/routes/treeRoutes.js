
// treeRoutes.js
import express from 'express';
import { getTree, addNode } from '../controllers/treeController.js';

const router = express.Router();

router.get('/tree', getTree);
router.post('/tree', addNode);

export default router;
