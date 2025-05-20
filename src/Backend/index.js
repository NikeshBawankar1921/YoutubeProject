import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import videoRouter from "./routes/WAITvideoRoutes.js";
import dotenv from 'dotenv';
import channelRouter from "./routes/createchannelRoutes.js";
import getUserRouter from "./routes/getUserRoutes.js";
import { registerRoutes } from "./routes/registerRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import videoRouter from "./routes/videoRoutes.js";


dotenv.config();

const app = express();
const PORT = 5000;
const MONGOSEC=process.env.MONGO_KEY;
// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/videos',videoRouter);
app.use("/createuserchannel", channelRouter);
registerRoutes(app);
loginRoutes(app);
getUserRouter(app);


// DB connection and server start
// mongoose.connect('mongodb+srv://rathodsamji795:ZIGiJOzsTOJarEUN@cluster0.jjtwiiw.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connect(MONGOSEC)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));
