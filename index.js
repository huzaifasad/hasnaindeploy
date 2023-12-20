// server.js or index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import addItemRoute from './Routes/addItemRoute.js';
import getItemsRoute from './Routes/getItemsRoute.js';
import deleteItemsRoute from './Routes/deleteItemsRoute.js';
import updateItemsRoute from './Routes/updateItemsRoute.js';
import { handleImageUpload } from './controllers/uploadImageController.js';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(express.json());
app.listen(5000);
app.use(cors({
    origin: "http://localhost:3000", // Update to your frontend URL
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
  }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/', addItemRoute);
app.use('/', getItemsRoute);
app.use('/', deleteItemsRoute);
app.use('/', updateItemsRoute);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), handleImageUpload);


