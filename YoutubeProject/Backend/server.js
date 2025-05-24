import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing route handlers
import getUserRouter from './routes/getUserRoutes.js';
import { registerRoutes } from './routes/registerRoutes.js';
import { loginRoutes } from './routes/loginRoutes.js';
import videoRouter from './routes/videoRoutes.js';
import channelRoutes from './routes/createchannelRoutes.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 5000; // Port where the server will run
const MONGOSEC = process.env.MONGO_KEY; // MongoDB connection string from environment variables

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Setting up API routes
app.use('/videos', videoRouter); // Handles all video-related routes
app.use('/createuserchannel', channelRoutes); // Routes for creating user channels

// Register routes for authentication and user retrieval
registerRoutes(app); // Handles user registration
loginRoutes(app);    // Handles user login
getUserRouter(app);  // Handles fetching user details

// Connect to MongoDB and start the server
mongoose.connect(MONGOSEC)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () =>
      console.log(`🚀 Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
  });
