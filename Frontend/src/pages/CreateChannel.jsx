import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateChannel = () => {


  const nav = useNavigate()
  const [channelName, setChannelName] = useState('');
  const [channelHandel, setchannelHandel] = useState('');
  const [email, setEmail] = useState("");



  async function submit(e) {
    e.preventDefault();

    try {
      const userdata = await axios.post("http://localhost:5000/createuserchannel", {   channelname: channelName,
  handle: channelHandel,
  email });
      const { user } = userdata.data;
      console.log( user.channel.length)
      if (user) {
        // Store token in sessionStorage
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(user));
      }

      nav('/')


    }
    catch (err) {
      alert(err.response?.data?.error || err.message);


    }
  }

  useEffect(() => {
       const data = JSON.parse(localStorage.getItem("user"));
  if (data?.email) {
    setEmail(data.email);
  }

    function updatedata() {
      setchannelHandel(`@${channelName}_${Math.floor(Math.random(1) * 10)}${Math.floor(Math.random(1) * 10)}${Math.floor(Math.random(1) * 10)}${Math.floor(Math.random(1) * 10)}`)
    }
 
    updatedata();
  }, [channelName])



  return (
    <div className="w-screen  h-screen justify-items-center bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800 justify-items-center">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-500  ">Create Channel</h2>
        <div className="w-20 bg-gray-400 h-20 rounded-full justify-items-center p-2 "> <p className=" m-4"> Profile </p></div>
        <div className="mb-4">
          <label htmlFor="cannelName" className="block text-gray-900">Channel Name</label>
          <input onChange={(e) => setChannelName(e.target.value)} value={channelName} type="text" id="cannelName" name="cannelName" className="w-full px-3 py-2 border border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="channelHandel" className="block text-gray-900">Channel Handel</label>
          <input value={channelHandel} type="text" id="channelHandel" name="channelHandel" className="w-full px-3 py-2 border text-blackasdsad border-amber-500  rounded-lg focus:outline-none " readOnly />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={submit}>Create Channel</button>

      </div>
    </div>
  )
}

export default CreateChannel;