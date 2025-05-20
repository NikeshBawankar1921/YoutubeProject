import user from "../models/UserDataModel.js";
import bcrypt from "bcrypt";

const registerController = async (req, res) => {

    try {
        const {username,email,password,userId,avatar,channel} = req.body;
        const olduser = await user.findOne({ email });

        if (olduser) {
            if (olduser.email === email) {
                console.log("Registered : ", olduser)
                return res.status(400).json({ error: "email already exists" })
            }

        }
        //password encryption
        const salt = await bcrypt.genSalt(10)
        const hasedPass = await bcrypt.hash(password, salt)

        //uploading user data 
        console.log(username, email, password)
        const newUser = new user({ username:username,email:email,password:hasedPass,userId:userId,avatar:avatar,channel:channel})
        await newUser.save()
        res.status(200).json({ message: "Signin successful", user: newUser });
    }

    catch (err) {
        console.error("Registration error : ", err.message)
    }
}
export default registerController;