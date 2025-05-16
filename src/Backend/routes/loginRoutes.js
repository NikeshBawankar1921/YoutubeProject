
import { loginUser } from "../controllers/loginController.js";

export default function LoginRouter (app)
{
app.post("/user", loginUser)
}






