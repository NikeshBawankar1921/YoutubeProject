import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // React Router's navigation hook to programmatically redirect users
  const nav = useNavigate();

  // State variables for storing user input for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission for login
  async function submit(e) {
    e.preventDefault(); // Prevent default form submission refresh

    try {
      // Send POST request to backend login API with email and password
      const userdata = await axios.post("http://localhost:5000/loginUser", {
        email,
        password,
      });

      // Destructure token and user info from response
      const { token, user } = userdata.data;

      if (token) {
        // Store token in localStorage for authenticated requests
        localStorage.setItem("token", token);

        // Store user info as stringified JSON in localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Set a flag to indicate user is logged in
        localStorage.setItem("logedin", true);
      }

      // Redirect user to home page after successful login
      nav('/');
    } catch (err) {
      // Show alert with error message from backend or fallback to generic message
      alert(err.response?.data?.message ? err.response.data.message : "internal error");
    }
  }

  return (
    <div className="w-screen h-screen justify-items-center bg-gray-200 p-4">
      {/* Login form container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-500">Login</h2>

        {/* Email input field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900">Email</label>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-3 py-2 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>

        {/* Password input field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-900">Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            id="password" 
            name="password" 
            className="w-full px-3 py-2 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>

        {/* Login button triggers submit function on click */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" 
          onClick={submit}
        >
          Login
        </button>

        {/* Link to registration page for new users */}
        <label className="justify-center mt-4 block text-center">
          Don't have an Account?{" "}
          <Link to="/register" className="text-sky-500 font-bold">
            Register now!
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Login;
