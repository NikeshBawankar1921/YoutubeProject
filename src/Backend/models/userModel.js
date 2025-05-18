import mongoose from "mongoose";



const channelsSchema = new mongoose.Schema({
 channels: String,
 handle: String,
 currentUserId:String,
    
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  channels: [channelsSchema]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;