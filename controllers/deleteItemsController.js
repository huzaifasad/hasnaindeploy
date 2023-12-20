// controllers/deleteItemsController.js
import { carModel } from "../modules/carModel.js";

const deleteItemsController = async (req, res) => {
  try {
    console.log("Deleted");
    const itemId = req.params.id;
    const deletedItem = await carModel.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: 'Ad not found' });
    }

    res.status(200).json({ message: 'Ad deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteItemsController;
