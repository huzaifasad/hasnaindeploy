import express from 'express';
import getItemController from '../controllers/getItemController.js';

const router = express.Router();

router.get('/get-items', getItemController);

export default router;
