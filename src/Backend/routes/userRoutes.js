import express from "express";
import { registerUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/users", registerUser);

export default UserRouter;
