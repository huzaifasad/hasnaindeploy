import mongoose from "mongoose";

const userStructure = new mongoose.Schema({
    email: String, 
    password: String 
    // email: {
    //     type: String, 
    //     required: true, 
    //     minlength : 5, 
    //     maxlength: 25, 
    //     unique: true
    // },
    // password: {
    //     type: String, 
    //     required: true, 
    //     minlength: 8, 
    //     maxlength: 255
    // }
});

export const userModel = mongoose.model('User', userStructure);