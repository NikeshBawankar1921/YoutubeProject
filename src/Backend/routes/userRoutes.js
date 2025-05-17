
import { registerUser} from "../controllers/userController.js";


export function UserRouter (app){
app.post("/users", registerUser); 
} 
