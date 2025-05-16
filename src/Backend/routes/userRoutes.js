import express from "express";
import { registerUser} from "../controllers/userController.js";
import { loginUser } from "../controllers/loginController.js";

export const UserRouter = express.Router();
export const UserLoginRouter = express.Router();

UserRouter.post("/users", registerUser);       // For registration
UserLoginRouter.post("user", loginUser);      // For login
