import { SiYoutubeshorts ,SiYoutubegaming  } from "react-icons/si";
import { PiUserCircleLight ,PiFilmSlate } from "react-icons/pi";
import { IoMdHome   } from "react-icons/io";
import { LuRadioTower } from "react-icons/lu";
import { MdOutlineSubscriptions ,MdOutlineNewspaper  } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { RiShoppingBag4Line ,RiGraduationCapLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsFire , BsTrophy } from "react-icons/bs";
import { TbHanger2 } from "react-icons/tb";
// import { GiHanger } from "react-icons/gi";

 
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FiRadio } from "react-icons/fi";


function SideBar({ isOpen,  }) {
  let nav=useNavigate();
  


  return (
    <div 
      className={` fixed left-0 w-60 h-screen  bg-white z-10 text-black transform transition-transform duration-300 ease-in-out  
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
<div className="overflow-y-auto h-full pr-2 ">
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
      <label className="font-bold ml-2">You</label>
       

      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <PiUserCircleLight className="size-6 mr-2 " /> You
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <LuHistory className="size-6 mr-2" /> History
      </label>

      <hr className="opacity-20 mt-4 mb-4" />
      <label className="font-bold ml-2">Explore</label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <BsFire className="size-6 mr-2" /> Trending
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <RiShoppingBag4Line  className="size-6 mr-2" /> Shopping
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <IoMusicalNotesOutline className="size-6 mr-2" /> Music
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <PiFilmSlate className="size-6 mr-2" /> Films
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <FiRadio className="size-6 mr-2" /> Live
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <SiYoutubegaming className="size-6 mr-2" /> Gaming
      </label>
       <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <MdOutlineNewspaper className="size-6 mr-2" /> News
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <BsTrophy  className="size-6 mr-2" /> Sport
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <RiGraduationCapLine className="size-6 mr-2" /> Courses
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" onClick={()=>{nav("/")}}>
        <TbHanger2 className="size-6 mr-2" /> Fashion & beauty
      </label>
      <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1 " onClick={()=>{nav("/")}}>
        <LuRadioTower className="size-6 mr-2" /> Podcasts
      </label>
        <hr className="opacity-20 mt-4 mb-4" />
        <label className="font-serif ">
          This YTClone is created by Nikesh Bawankar only for learning purpose.
          I thankyou team InternShala for Teaching me all the required skills to become a job ready student.

        </label>
        <hr className="opacity-20  mb-20" />
      </div>
    </div>
  );
}

export default SideBar;








