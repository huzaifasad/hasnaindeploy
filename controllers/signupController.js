import bcrypt from "bcrypt";
import {userModel} from "../modules/User.js";

const signUpController = async(req, res) => {
    
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);

    const existingUser = await userModel.findOne({ email: userEmail });
    if (existingUser) return res.status(404).send("User already exist.");

    const newUser = new userModel({
        email: userEmail,
        password: hashedPassword
    });

    await newUser.save();
    
}
export default signUpController;