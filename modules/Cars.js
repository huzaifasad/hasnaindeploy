import mongoose from 'mongoose';

const carStructure=new mongoose.Schema({
    brand: String,
    model: Number,
    price : Number,
    mileage: Number,
    airbags : Boolean,
    makeyear: Date,
    pic: Buffer,
});
export const carmodel=mongoose.model("car",carStructure);