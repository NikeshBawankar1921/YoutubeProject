


import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import videoRouter from "./Backend/routes/videoRoutes.js";
import UserRouter from "./Backend/routes/userRoutes.js";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/videos", videoRouter );
app.use("/", UserRouter);

mongoose.connect("mongodb+srv://rathodsamji795:ZIGiJOzsTOJarEUN@cluster0.jjtwiiw.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));


