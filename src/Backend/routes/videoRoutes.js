import express from "express";
import Video from "../models/videoModel.js";

const videoRouter = express.Router();

videoRouter.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a single video by ID
videoRouter.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get comments for a video
videoRouter.get("/:id/comments", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json(video.comments || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a comment to a video
videoRouter.post("/:id/comments", async (req, res) => {
  try {
    const { text, userId } = req.body;
    if (!text || !userId) {
      return res.status(400).json({ error: "Text and userId are required" });
    }

    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const newComment = {
      text,
      userId,
      timestamp: new Date(),
      likes: 0,
      dislikes: 0,
      likedBy: [],
      dislikedBy: []
    };

    video.comments.push(newComment);
    await video.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a comment
videoRouter.put("/:videoId/comments/:commentId", async (req, res) => {
  try {
    const { videoId, commentId } = req.params;
    const { text, userId } = req.body;

    if (!text || !userId) {
      return res.status(400).json({ error: "Text and userId are required" });
    }

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const comment = video.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Check if the user is the owner of the comment
    if (comment.userId !== userId) {
      return res.status(403).json({ error: "Not authorized to edit this comment" });
    }

    comment.text = text;
    comment.edited = true;
    comment.editTimestamp = new Date();
    
    await video.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like/Unlike a video
videoRouter.post("/:id/like", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    // Initialize likedBy array if it doesn't exist
    if (!video.likedBy) {
      video.likedBy = [];
    }

    const userIndex = video.likedBy.indexOf(userId);
    if (userIndex === -1) {
      // User hasn't liked the video, add like
      video.likedBy.push(userId);
      video.likes = (video.likes || 0) + 1;
      
      // Remove dislike if user had disliked
      if (video.dislikedBy && video.dislikedBy.includes(userId)) {
        video.dislikedBy = video.dislikedBy.filter(id => id !== userId);
        video.dislikes = Math.max(0, (video.dislikes || 0) - 1);
      }
    } else {
      // User has already liked, remove like
      video.likedBy.splice(userIndex, 1);
      video.likes = Math.max(0, (video.likes || 0) - 1);
    }

    await video.save();
    res.status(200).json({ likes: video.likes, dislikes: video.dislikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Dislike/Undislike a video
videoRouter.post("/:id/dislike", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    // Initialize dislikedBy array if it doesn't exist
    if (!video.dislikedBy) {
      video.dislikedBy = [];
    }

    const userIndex = video.dislikedBy.indexOf(userId);
    if (userIndex === -1) {
      // User hasn't disliked the video, add dislike
      video.dislikedBy.push(userId);
      video.dislikes = (video.dislikes || 0) + 1;
      
      // Remove like if user had liked
      if (video.likedBy && video.likedBy.includes(userId)) {
        video.likedBy = video.likedBy.filter(id => id !== userId);
        video.likes = Math.max(0, (video.likes || 0) - 1);
      }
    } else {
      // User has already disliked, remove dislike
      video.dislikedBy.splice(userIndex, 1);
      video.dislikes = Math.max(0, (video.dislikes || 0) - 1);
    }

    await video.save();
    res.status(200).json({ likes: video.likes, dislikes: video.dislikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like/Unlike a comment
videoRouter.post("/:videoId/comments/:commentId/like", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const comment = video.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Initialize arrays if they don't exist
    if (!comment.likedBy) comment.likedBy = [];
    if (!comment.dislikedBy) comment.dislikedBy = [];

    const userIndex = comment.likedBy.indexOf(userId);
    if (userIndex === -1) {
      // User hasn't liked the comment, add like
      comment.likedBy.push(userId);
      comment.likes = (comment.likes || 0) + 1;
      
      // Remove dislike if user had disliked
      if (comment.dislikedBy.includes(userId)) {
        comment.dislikedBy = comment.dislikedBy.filter(id => id !== userId);
        comment.dislikes = Math.max(0, (comment.dislikes || 0) - 1);
      }
    } else {
      // User has already liked, remove like
      comment.likedBy.splice(userIndex, 1);
      comment.likes = Math.max(0, (comment.likes || 0) - 1);
    }

    await video.save();
    res.status(200).json({ likes: comment.likes, dislikes: comment.dislikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Dislike/Undislike a comment
videoRouter.post("/:videoId/comments/:commentId/dislike", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const comment = video.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Initialize arrays if they don't exist
    if (!comment.likedBy) comment.likedBy = [];
    if (!comment.dislikedBy) comment.dislikedBy = [];

    const userIndex = comment.dislikedBy.indexOf(userId);
    if (userIndex === -1) {
      // User hasn't disliked the comment, add dislike
      comment.dislikedBy.push(userId);
      comment.dislikes = (comment.dislikes || 0) + 1;
      
      // Remove like if user had liked
      if (comment.likedBy.includes(userId)) {
        comment.likedBy = comment.likedBy.filter(id => id !== userId);
        comment.likes = Math.max(0, (comment.likes || 0) - 1);
      }
    } else {
      // User has already disliked, remove dislike
      comment.dislikedBy.splice(userIndex, 1);
      comment.dislikes = Math.max(0, (comment.dislikes || 0) - 1);
    }

    await video.save();
    res.status(200).json({ likes: comment.likes, dislikes: comment.dislikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default videoRouter;