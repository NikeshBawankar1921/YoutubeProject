// Import the User model from your MongoDB schema
import User from "../models/UserDataModel.js";

// Controller to fetch a user by email
export default async function getUserController(req, res) {
  try {
    // Extract email from request body
    const { email } = req.body;

    // Search for the user in the database using the email
    const user = await User.findOne({ email });

    // If user not found, return a 404 error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prepare the payload to return (e.g., for JWT or client response)
    const payload = {
      id: user._id, // Unique MongoDB ID
      handle: user.channels[0].handle, // User's channel handle (assuming array exists)
      channelname: user.channels[0].channels // Channel name (check naming, 'channels' might be a typo)
    };

    // Send the payload in the response
    res.status(200).json({
      message: "user fetch successful",
      user: payload
    });

  } catch (err) {
    // Catch any errors during the process and send 500 Internal Server Error
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
}
