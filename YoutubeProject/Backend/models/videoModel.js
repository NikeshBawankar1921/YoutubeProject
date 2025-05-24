import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({  //schema for comments
      text: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  likedBy: [{ type: String }],
  dislikedBy: [{ type: String }]
    
});

const videoSchema = new mongoose.Schema({  //Schema for videos
  videoId: String, 
  title: String,
  videoUrl: String,
  thumbnailUrl: String,
  description: String,
  subscribers:String,
  channelId: String,
  uploader: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  uploadDate: String,
  comments: [commentSchema],
});



export default mongoose.model("Video", videoSchema);