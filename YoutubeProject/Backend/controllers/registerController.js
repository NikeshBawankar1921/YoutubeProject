// Import the user model from the database
import user from "../models/UserDataModel.js";

// Import bcrypt for password hashing
import bcrypt from "bcrypt";

// Define the register controller function
const registerController = async (req, res) => {
    try {
        // Destructure required fields from the request body
        const { username, email, password, userId, avatar, channel } = req.body;

        // Check if a user with the given email already exists
        const olduser = await user.findOne({ email });

        if (olduser) {
            // If the email already exists, return an error response
            if (olduser.email === email) {
                console.log("Registered : ", olduser);
                return res.status(400).json({ error: "email already exists" });
            }
        }

        // Generate a salt for hashing the password
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the generated salt
        const hasedPass = await bcrypt.hash(password, salt);

        // Create a new user document with the hashed password and other details
        const newUser = new user({
            username: username,
            email: email,
            password: hasedPass,
            userId: userId,
            avatar: avatar,
            channel: channel
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response with the newly created user data
        res.status(200).json({ message: "Signin successful", user: newUser });
    } catch (err) {
        // Log and handle any server errors
        console.error("Registration error : ", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Export the controller for use in route definitions
export default registerController;
