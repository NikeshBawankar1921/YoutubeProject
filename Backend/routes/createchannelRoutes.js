import express from "express";
import user from "../models/UserDataModel.js";

const channelRoutes = express.Router();

channelRoutes.post("/", async (req, res) => {
  const { channelname, handle, email } = req.body;

  try {
    // Find the user by email
    const userdata = await user.findOne({ email });
    if (!userdata) {
      return res.status(404).json({ error: "User not found" });
    }

    const newChannel = { channelname:channelname, handle:handle };


    // Check if channel array is empty or doesn't already have this channel
    const exists = userdata.channel.find(
      (ch) => ch.handle === handle || ch.channelname === channelname
    );

    if (!exists) {
      userdata.channel.push(newChannel);
      await userdata.save();
    }

    res.status(200).json({ userdata });
  } catch (error) {
    console.error("Error creating channel:", error);
    res.status(500).json({ error: error.message });
  }
});

export default channelRoutes;
