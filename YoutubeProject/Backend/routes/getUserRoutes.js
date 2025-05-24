import getUserController from "../controllers/getUserController.js"

export default function getUserRouter (app)
{
app.post("/getuser", getUserController)
}
