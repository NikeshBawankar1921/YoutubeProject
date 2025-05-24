
import loginController from '../controllers/loginController.js';


//function exported for login routes
export function loginRoutes(app){

app.post('/loginUser',loginController);

}


