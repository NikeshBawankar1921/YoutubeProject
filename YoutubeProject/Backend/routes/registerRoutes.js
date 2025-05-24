
import registerController from '../controllers/registerController.js';

//function exported for registration routes
export function registerRoutes(app){
    app.post('/registeruser',registerController)
}

