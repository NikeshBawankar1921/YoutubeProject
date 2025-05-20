import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


function CreateChannel() {

  const [channelsName, setchannels] = useState("");
  const [handle, sethandle] = useState("");
  const nav = useNavigate();
  const [currentUserId,setcurrentUserId]=useState('');

useEffect(() => {  const user = JSON.parse(localStorage.getItem("user"));
      setcurrentUserId(user.id);
      console.log(user.id);
      
    console.log('Login state changed to:', currentUserId); },[]);



  const userChannelasync = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.put("http://localhost:5000/createuserchannel", {
      channelsName,
      handle,
      currentUserId,
    });

    const { user } = response.data;

    if (user) {
      alert("Channel created successfully!");

      let oldUser = JSON.parse(localStorage.getItem("user"));
      oldUser.channel = true;
     localStorage.setItem("user", JSON.stringify(oldUser));

      nav("/");
    } else {
      alert("Invalid credentials. Token not received.");
    }
  } catch (error) {
    console.error("Channel creation error:", error);
    alert("Failed to create channel. Try again.");
  }
};








return (
  <div className='justify-items-center  w-screen h-screen text-black bg-gray-200 pt-8'>


    <div className="flex flex-col  w-70 p-4 h-fit rounded bg-white backdrop-blur-2xl ">
      <div className="text-blue-500 font-bold justify-items-center"> Create Channel

        <img className="rounded-full w-30 m-2"  alt="profile" />

      </div>
      <input type="file" id="myFile" name="filename" className="border rounded cursor-pointer text-blue-500" />
      <h4 className="w-fit">Channel Name</h4>
      <input className=" border rounded mb-2" type="text" placeholder="InternShala Traning" onChange={(e)=>setchannels(e.target.value)} />
      <h4 className="w-fit ">Handle</h4>
      <input className="border rounded " type="text"  placeholder="@nameExample_00" onChange={(e)=>sethandle(e.target.value)}/>


      <div className="flex justify-end">
        <div className="cursor-pointer  gap-5 ml-2 mr-2" onClick={()=>nav("/")} >Cancel</div>
        <div className="cursor-pointer text-blue-500 gap-5 ml-2 mr-2"  onClick={userChannelasync}>Create Channel</div>
      </div>
    </div>

  </div>
)
}

export default CreateChannel
