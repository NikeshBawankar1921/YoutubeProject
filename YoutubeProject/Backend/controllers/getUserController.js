import User from "../models/UserDataModel.js";


export default async function getUserController(req,res){
try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }



    // Payload for JWT
    const payload = {
      id: user._id,
      handle:user.channels[0].handle,
      channelname: user.channels[0].channels

    };

    res.status(200).json({
      message: "user fetch successful",
      user: payload
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
}