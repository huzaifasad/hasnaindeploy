
import express from 'express';
import deleteItemsController from '../controllers/deleteItemsController.js';

const router = express.Router();

router.delete('/delete-item/:id', deleteItemsController);

export default router;
