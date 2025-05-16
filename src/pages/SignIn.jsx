import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
    const nav=useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitData = async (e) => {
    e.preventDefault();
    console.log(username,email,password)
    try {
      const response = await axios.post("http://localhost:5000/users", { username, email, password });
      console.log(response.data);
       alert("Registered Successfully!");
       nav("/")
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="justify-items-center min-h-screen text-black bg-gray-200">
      <form onSubmit={SubmitData} className="flex flex-col items-center h-screen w-screen">
        <h1 className="text-blue-500 text-2xl mt-8">SignUp</h1>
        <div className="grid p-4 w-fit rounded bg-white backdrop-blur-2xl mt-8">
          <label className="mb-1">Name:</label>
          <input className="border rounded mb-2 p-1" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          <label className="mb-1">Email:</label>
          <input className="border rounded mb-2 p-1" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label className="mb-1">Password:</label>
          <input className="border rounded mb-2 p-1" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" className="m-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            SignUp
          </button>
          <p>
            Already have an account? <Link className="text-blue-500 underline" to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;