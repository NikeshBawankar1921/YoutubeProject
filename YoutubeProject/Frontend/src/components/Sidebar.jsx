import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { PiUserCircleLight, PiFilmSlate } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { LuRadioTower } from "react-icons/lu";
import { MdOutlineSubscriptions, MdOutlineNewspaper } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { RiShoppingBag4Line, RiGraduationCapLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsFire, BsTrophy } from "react-icons/bs";
import { TbHanger2 } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FiRadio } from "react-icons/fi";
import { useIsOpen } from "../utils/Contex";


function SideBar() {
  let nav = useNavigate(); // react-router hook for navigation
  
  // Extract sidebar open state and close function from context
  const { isSidebarOpen, closeSidebars } = useIsOpen();

  return (
    // Sidebar container with fixed positioning, width, height, background color, and smooth slide-in/out transition
    <div 
      className={` fixed left-0 w-60 h-screen  bg-white z-10 text-black transform transition-transform duration-300 ease-in-out  
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="overflow-y-auto h-full pr-2 ">
        
        {/* Home link - closes sidebar and navigates to homepage */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { closeSidebars(); nav("/"); }}
        >
          <IoMdHome className="size-6 mr-2" /> Home
        </label>

        {/* Shorts link - currently navigates to placeholder */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <SiYoutubeshorts className="size-6 mr-2" /> Shorts
        </label>

        {/* Subscriptions link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <MdOutlineSubscriptions className="size-6 mr-2" /> Subscriptions
        </label>

        {/* Divider */}
        <hr className="opacity-20 mt-4 mb-4" />

        {/* Section title: You */}
        <label className="font-bold ml-2">You</label>

        {/* You profile link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <PiUserCircleLight className="size-6 mr-2 " /> You
        </label>

        {/* History link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <LuHistory className="size-6 mr-2" /> History
        </label>

        {/* Divider */}
        <hr className="opacity-20 mt-4 mb-4" />

        {/* Section title: Explore */}
        <label className="font-bold ml-2">Explore</label>

        {/* Trending link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <BsFire className="size-6 mr-2" /> Trending
        </label>

        {/* Shopping link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <RiShoppingBag4Line  className="size-6 mr-2" /> Shopping
        </label>

        {/* Music link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <IoMusicalNotesOutline className="size-6 mr-2" /> Music
        </label>

        {/* Films link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <PiFilmSlate className="size-6 mr-2" /> Films
        </label>

        {/* Live link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <FiRadio className="size-6 mr-2" /> Live
        </label>

        {/* Gaming link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <SiYoutubegaming className="size-6 mr-2" /> Gaming
        </label>

        {/* News link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <MdOutlineNewspaper className="size-6 mr-2" /> News
        </label>

        {/* Sport link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <BsTrophy  className="size-6 mr-2" /> Sport
        </label>

        {/* Courses link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <RiGraduationCapLine className="size-6 mr-2" /> Courses
        </label>

        {/* Fashion & Beauty link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1" 
          onClick={() => { nav("#"); }}
        >
          <TbHanger2 className="size-6 mr-2" /> Fashion & beauty
        </label>

        {/* Podcasts link */}
        <label 
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-200 p-1 " 
          onClick={() => { nav("#"); }}
        >
          <LuRadioTower className="size-6 mr-2" /> Podcasts
        </label>

        {/* Divider */}
        <hr className="opacity-20 mt-4 mb-4" />

        {/* Footer note */}
        <label className="font-serif ">
          This YTClone is created by Nikesh Bawankar only for learning purpose.
          I thank you team InternShala for Teaching me all the required skills to become a job ready student.
        </label>

        {/* Bottom spacing */}
        <hr className="opacity-20  mb-20" />
      </div>
    </div>
  );
}

export default SideBar;
