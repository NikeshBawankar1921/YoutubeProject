
import User from "../models/userModel.js"; // Assumes you have this model

import express from 'express';
const channelRouter = express.Router();


channelRouter.put("/",async (req,res)=>{
try {
    const { channelsName, handle, currentUserId } = req.body;

    const user = await User.findOne({ _id: currentUserId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const handleExists = user.channels.some(ch => ch.handle === handle);
    if (handleExists) {
      return res.status(400).json({ error: "Handle already taken" });
    }

    const newChannel = {
      channels: channelsName,
      handle,
      currentUserId,
    };

user.channels.push(newChannel);

    
    await user.save();

    res.status(201).json({
      message: "Channel created successfully",
      user,
    });
  } catch (err) {
    console.error("Channel creation error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



export default channelRouter;

