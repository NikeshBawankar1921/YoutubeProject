
import registerController from '../controllers/registerController.js';


export function registerRoutes(app){
    app.post('/registeruser',registerController)
}

