import express from 'express';
import updateItemsController from '../controllers/updateItemsController.js';

const router = express.Router();

router.put('/update-item/:id', updateItemsController);

export default router;
