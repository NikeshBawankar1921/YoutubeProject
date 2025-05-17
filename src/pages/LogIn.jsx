import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

let Nav=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user", {
        email,
        password,
      });
       const { token, user } = response.data;

      if (token) {
        // Store token in sessionStorage
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("logedin", "true");

        alert("Login successful!");
        Nav("/");
      } else {
        alert("Invalid credentials. Token not received.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check credentials or try again.");
    }
  };

  return (
    <div className="justify-items-center min-h-screen text-black bg-gray-200">
      <form
        onSubmit={SubmitData}
        className="flex flex-col items-center h-screen w-screen"
      >
        <h1 className="text-blue-500 text-2xl mt-8">LogIn</h1>
        <div className="grid p-4 w-fit rounded bg-white backdrop-blur-2xl mt-8">
          <label className="mb-1">Email:</label>
          <input
            className="border rounded mb-2 p-1"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label className="mb-1">Password:</label>
          <input
            className="border rounded mb-2 p-1"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            
            }}
            required
          />

          <button
            type="submit"
            className="m-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500 underline" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
