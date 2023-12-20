import express from "express";
import  signUpController  from '../controllers/signupController.js';

const router = express.Router();

router.post("/signup", signUpController);

export default router;