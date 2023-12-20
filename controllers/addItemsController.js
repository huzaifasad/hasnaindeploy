// controllers/addItemsController.js
import { carModel } from "../modules/carModel.js";

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

    console.log("Adding item to the database");
    const result = await newItem.save();

    console.log("Item added successfully");
    res.status(201).json(result);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addItemsController;
