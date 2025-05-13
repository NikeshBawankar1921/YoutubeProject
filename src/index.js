import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


mongoose.connect("mongodb://0.0.0.0", {});
const data =  mongoose.connection;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


data.on('open',()=>{
    console.log("connected to DB");
})

data.on('error',()=>{
    console.log("connection to DB fail");
})

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const user = mongoose.model("User", userSchema);




app.get('/',(req,res)=>{
    res.send("get working...")

})

app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new user({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});