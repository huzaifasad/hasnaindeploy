import mongoose from "mongoose";

const AutoSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    admprice:Number,
    listingDate: {
        type: Date,
        default: Date.now
    },
    image: {
        type: mongoose.Schema.Types.Mixed,
    },
});

export const carModel = mongoose.model("carrModel", AutoSchema);

// import mongoose from 'mongoose';

// const carSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   admprice: Number,
//   image: String, // Add the image field
// });

// export const carModel = mongoose.model('Car', carSchema);
