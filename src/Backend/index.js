import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import videoRouter from "./routes/videoRoutes.js";
import { UserRouter } from "./routes/userRoutes.js";
import LoginRouter from "./routes/loginRoutes.js";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/videos", videoRouter);
app.use("/", UserRouter);
LoginRouter(app);



// DB connection and server start
mongoose.connect("mongodb+srv://rathodsamji795:ZIGiJOzsTOJarEUN@cluster0.jjtwiiw.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));
