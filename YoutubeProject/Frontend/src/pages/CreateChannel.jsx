import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsOpen } from "../utils/Contex";

const CreateChannel = () => {
  // Extract function from context to update channel state globally
  const { hasChannelFun } = useIsOpen();

  // Hook to programmatically navigate to other routes
  const nav = useNavigate();

  // Local state to store channel name input by user
  const [channelName, setChannelName] = useState('');

  // Local state for the generated channel handle (read-only)
  const [channelHandel, setchannelHandel] = useState('');

  // Local state to store user email (retrieved from localStorage)
  const [email, setEmail] = useState("");

  // Function triggered on form submit (button click)
  async function submit(e) {
    // Validate channel name is not empty
    if (!channelName) {
      return alert("field cannot be Empty !");
    }
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to backend to create a user channel
      const userdata = await axios.post("http://localhost:5000/createuserchannel", {
        channelname: channelName,
        handle: channelHandel,
        email
      });

      // Extract user object from response
      const { user } = userdata.data;

      // Log the number of channels user has (for debugging)
      console.log(user.channel.length);

      if (user) {
        // Remove existing user data from localStorage
        localStorage.removeItem("user");

        // Save updated user data with new channel info in localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Call context function to update app-wide channel state
        hasChannelFun();
      }

      // Navigate to home page after successful creation
      nav('/');

    } catch (err) {
      // Show alert on error with backend error message if available
      alert(err.response?.data?.error || err.message);
    }
  }

  // useEffect to initialize email from localStorage and generate channel handle on channelName change
  useEffect(() => {
    // Get user data from localStorage
    const data = JSON.parse(localStorage.getItem("user"));
    if (data?.email) {
      // Set email state if available
      setEmail(data.email);
    }

    // Generate a random channel handle based on channel name plus 4 random digits
    function updatedata() {
      setchannelHandel(`@${channelName}_${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`)
    }

    updatedata();
  }, [channelName]); // Runs every time channelName changes

  return (
    <div className="w-screen h-screen justify-items-center bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800 justify-items-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-500">Create Channel</h2>

        {/* Placeholder Profile Circle */}
        <div className="w-20 bg-gray-400 h-20 rounded-full justify-items-center p-2">
          <p className="m-4"> Profile </p>
        </div>

        {/* Channel Name Input */}
        <div className="mb-4">
          <label htmlFor="cannelName" className="block text-gray-900">Channel Name</label>
          <input
            onChange={(e) => setChannelName(e.target.value)}
            value={channelName}
            type="text"
            id="cannelName"
            name="cannelName"
            className="w-full px-3 py-2 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Channel Handle Display (read-only) */}
        <div className="mb-6">
          <label htmlFor="channelHandel" className="block text-gray-900">Channel Handel</label>
          <input
            value={channelHandel}
            type="text"
            id="channelHandel"
            name="channelHandel"
            className="w-full px-3 py-2 border border-amber-500 rounded-lg focus:outline-none"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={submit}
        >
          Create Channel
        </button>
      </div>
    </div>
  );
}

export default CreateChannel;
