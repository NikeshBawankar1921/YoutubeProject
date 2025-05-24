import mongoose from "mongoose";


const userChannelSchema = new mongoose.Schema({
  channelname: String,
  handle: String
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userId:   String,
  avatar:   String,
  channel:  [userChannelSchema] // Corrected
});

const user = mongoose.model("User2", userSchema);
export default user;
