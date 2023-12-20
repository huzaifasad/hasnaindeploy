import mongoose from 'mongoose';

const tyreStructure=new mongoose.Schema({
    size: Number,
    brand: String,
    width: Number,

})
export const tyremodel=mongoose.model("tyre",tyreStructure);