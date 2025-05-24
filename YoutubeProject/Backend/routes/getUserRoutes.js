import getUserController from "../controllers/getUserController.js"

//function exported for getuser routes
export default function getUserRouter (app)
{
app.post("/getuser", getUserController)
}
