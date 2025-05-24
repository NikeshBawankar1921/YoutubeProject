import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from "../models/UserDataModel.js";

const loginController = async (req, res) => {

  try {
    const { email, password } = req.body;

    // Find user by email
    const user1 = await user.findOne({ email });
    console.log(user1 )
    if (!user1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare hashed passwords
    const GotPass = await bcrypt.compare(password, user1.password);

    if (!GotPass) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    // Create JWT payload
    const payload = {
      id: user1._id,
      email: user1.email,
      name: user1.username,
      channel: user1.channel,
    };

    // Sign JWT token
    const accessToken = jwt.sign(
      {
        id: user1._id,
        email: user1.email,
      },
      "youtube", // Secret key
      { expiresIn: '1h' }
    );
    
    /////jwt.verify(accessToken,"youtube",(err,tokenVerified)=>{console.log(tokenVerified.data)});//////

    // Send response
    return res.status(200).json({
      message: "Login successful",
      token: accessToken,
      user: payload,
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default loginController;
