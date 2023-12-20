import mongoose from 'mongoose';

const partsStructure=new mongoose.Schema({
PartName: String,
Description: String,
price: Number,
availability: Boolean,

});
export const partsmodel=mongoose.model("parts",partsStructure);