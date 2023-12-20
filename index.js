// server.js or index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import addItemRoute from './Routes/addItemRoute.js';  // Uncomment this line
import getItemsRoute from './Routes/getItemsRoute.js';
import deleteItemsRoute from './Routes/deleteItemsRoute.js';
import updateItemsRoute from './Routes/updateItemsRoute.js';
// import { handleImageUpload } from './controllers/uploadImageController.js';
// import multer from 'multer';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: "https://frontnd.vercel.app", // Update to your frontend URL
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }));
  
  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000);
mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/', addItemRoute);  // Uncomment this line
app.use('/', getItemsRoute);
app.use('/', deleteItemsRoute);
app.use('/', updateItemsRoute);

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('image'), handleImageUpload);
