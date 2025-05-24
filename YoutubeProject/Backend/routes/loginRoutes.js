
import loginController from '../controllers/loginController.js';



export function loginRoutes(app){

app.post('/loginUser',loginController);

}


