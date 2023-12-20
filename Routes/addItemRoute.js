// addItemRoute.js
import express from 'express';
import addItemsController from '../controllers/addItemsController.js';

const router = express.Router();

router.post('/add-item', addItemsController);

export default router;
