import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"


function Login() {

  //  const nav=useNavigate();
  const username = "dfsdf";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitData = async (e) => {
    e.preventDefault();
    console.log(username, email, password)
    try {
      const response = await axios.post("http://localhost:5000/user", {
        email,
        password,
      });
      console.log(response.data);
      alert("logedin")
    } catch (error) {
      alert(error)
      console.error("Error fetching videos:", error);
    }
  };



  return (
    <div className="justify-items-center min-h-screen text-black bg-gray-200">
      <form onSubmit={SubmitData} className="flex flex-col items-center h-screen w-screen">
        <h1 className="text-blue-500 text-2xl mt-8">LogIn</h1>
        <div className="grid p-4 w-fit rounded bg-white backdrop-blur-2xl mt-8">

          <label className="mb-1">Email:</label>
          <input className="border rounded mb-2 p-1" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label className="mb-1">Password:</label>
          <input className="border rounded mb-2 p-1" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="m-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
          <p>
            Don't have an account? <Link className="text-blue-500 underline" to="/signup">SignUp</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login
