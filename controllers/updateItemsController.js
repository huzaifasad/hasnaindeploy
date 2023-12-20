import { carModel } from "../modules/carModel.js";

const updateItemsController = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { name, description, price, admprice, image } = req.body;

    // Find the item by ID and update its properties
    const updatedItem = await carModel.findByIdAndUpdate(
      itemId,
      {
        name,
        description,
        price,
        admprice,
        image,
      },
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default updateItemsController;
