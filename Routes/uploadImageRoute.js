// import express from 'express';
// import  uploadImageController  from '../controllers/uploadImageController.js';

// const router = express.Router();

// router.post('/upload-image', uploadImageController);

// export default router;
// routes.js

import express from 'express';
import multer from 'multer';
import { handleImageUpload } from '../controllers/uploadImageController.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define routes
router.post('/upload', upload.single('image'), handleImageUpload);

export default router;

