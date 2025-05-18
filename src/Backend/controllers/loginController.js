import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'Secretkey'; // Use env variable in production

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }
   

    // Payload for JWT
    const payload = {
      id: user._id,
      email: user.email,
      name: user.username,
      channels: user.userId,
    };

    // Generate token
    const accessToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '5m' });

    res.status(200).json({
      message: "Login successful",
      token: accessToken,
      user: payload
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
}
