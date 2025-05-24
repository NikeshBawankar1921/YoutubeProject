import mongoose from "mongoose";


const userChannelSchema = new mongoose.Schema({ //Schema for userChannel
  channelname: String,
  handle: String
});

const userSchema = new mongoose.Schema({   ///Schema for user data
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userId:   String,
  avatar:   String,
  channel:  [userChannelSchema] // Corrected
});

const user = mongoose.model("User2", userSchema);
export default user;
