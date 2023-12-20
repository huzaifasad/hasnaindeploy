// controllers/addItemsController.js
import { carModel } from "../modules/carModel.js";
// import uploadImage from '../uploadImage.js';

const addItemsController = async (req, res) => {
  try {
    const { name, description, price, admprice } = req.body;

    // Use the uploaded image URL received from the frontend
    const image = req.body.image;

    const newItem = new carModel({
      name,
      description,
      price,
      admprice,
      image,
    });

    console.log("Added successfully");
    const result = await newItem.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default addItemsController;
