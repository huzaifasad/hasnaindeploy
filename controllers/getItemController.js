import { carModel } from "../modules/carModel.js";

const getItemController = async (req, res) => {
  try {
    console.log("Fetched");
    const items = await carModel.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getItemController;
