import express from "express";
import user from "../models/UserDataModel.js";

const channelRoutes = express.Router();

//post request to create channnel
channelRoutes.post("/", async (req, res) => {
  const { channelname, handle, email } = req.body;

  try {
    // Find the user by email
    const userdata = await user.findOne({ email }); //checking if email is present in the data base
    if (!userdata) {
      return res.status(404).json({ error: "User not found" });
    }

    const newChannel = { 
     
      channelname:channelname, 
      handle:handle }
      


    // Check if channel array is empty or doesn't already have this channel
    const exists = userdata.channel.find(
      (ch) => ch.handle === handle || ch.channelname === channelname
    );

    if (!exists) {
      userdata.channel.push(newChannel);
      await userdata.save();
    }
  return res.status(200).json({   // sending response with data

      user: {id: userdata._id,
      email: email,
      name: userdata.username,
      channel: 
      {channelname:channelname, 
      handle:handle }},
    });
  } catch (error) {
    console.error("Error creating channel:", error);
    res.status(500).json({ error: error.message });
  }
});

export default channelRoutes;
