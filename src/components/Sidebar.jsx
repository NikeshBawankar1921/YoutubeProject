import { SiYoutubeshorts } from "react-icons/si";
import { PiUserCircleLight } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { GiSunCloud } from "react-icons/gi";
import { useNavigate } from "react-router-dom";



function SideBar({ isOpen,  }) {
  let nav=useNavigate();
  


  return (
    <div
      className={`fixed left-0 w-60 h-screen t bg-white z-10 text-black transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >

      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <IoMdHome className="size-6 mr-2" /> Home
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/video")}}>
        <SiYoutubeshorts className="size-6 mr-2" /> Shorts
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <MdOutlineSubscriptions className="size-6 mr-2" /> Subscriptions
      </label>

      <hr className="opacity-20 mt-4 mb-4" />

      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <PiUserCircleLight className="size-6 mr-2" /> You
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <LuHistory className="size-6 mr-2" /> History
      </label>

      <hr className="opacity-20 mt-4 mb-4" />
    </div>
  );
}

export default SideBar;
