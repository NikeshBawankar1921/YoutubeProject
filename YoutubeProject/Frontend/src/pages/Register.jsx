import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  // Hook for programmatic navigation after successful registration
  const nav = useNavigate();

  // State variables for user input fields
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setconfPass] = useState('');

  // Static/default values for some user properties to send with registration
  const userId = '';
  const avatar = '';
  const channel = [];

  // Function to handle form submission and send registration data to backend
  async function sendData(e) {
    e.preventDefault(); // Prevent page reload on form submit

    // Validate inputs: all fields required
    if (username === "" || email === "" || password === "" || confPass === "")
      return alert("Input cannot be Empty!");

    // Validate passwords match
    if (password !== confPass)
      return alert("Password did not match");

    try {
      // Send POST request to register endpoint with user data
      await axios.post('http://localhost:5000/registeruser', {
        username: username,
        email: email,
        password: password,
        userId: userId,
        avatar: avatar,
        channel: channel,
      });

      // Navigate to login page after successful registration
      nav('/login');
    } catch (err) {
      // Show backend error message if registration fails
      alert(err.response.data.message);
    }
  }

  return (
    <div className="w-screen h-screen justify-items-center bg-gray-200 p-4">
      {/* Registration form container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-500">Registration</h2>

        {/* Username input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-900">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={username}
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border text-black border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border text-black border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-900">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border text-black border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Confirm password input */}
        <div className="mb-6">
          <label htmlFor="confPassword" className="block text-gray-900">Confirm Password</label>
          <input
            onChange={(e) => setconfPass(e.target.value)}
            value={confPass}
            type="password"
            id="confPassword"
            name="confPassword"
            className="w-full px-3 py-2 border text-black border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Register button triggers sendData function */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={sendData}
        >
          Register
        </button>

        {/* Link to login page for users who already have an account */}
        <label className="justify-center mt-4 block text-center">
          Already have an Account?{" "}
          <Link to="/login" className="text-sky-500 font-bold">
            Login
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Register;
