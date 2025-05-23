import {
  SiYoutubegaming, SiYoutubestudio, SiYoutubemusic, SiPrivateinternetaccess,
} from "react-icons/si";
import { PiSignOutBold, PiCurrencyDollarFill } from "react-icons/pi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdSwitchAccount, MdFeedback } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import { FiRadio } from "react-icons/fi";
import { FaGlobe, FaGoogle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { useIsOpen } from "../utils/Contex";



function Profile() {

  

  let nav = useNavigate();
  const { isProfileSidebarOpen, haschannelResult, haschannel ,closeSidebars } = useIsOpen();


  function channel() {
    if (haschannelResult) {
      closeSidebars()
      nav("/userchannel");
    } else {
      nav("/createchannel");
      closeSidebars()
    }
  }


  function Logout() {
    closeSidebars()
    localStorage.clear();
     
    nav("/login");
  }



  return (
    <div
      className={`fixed right-0 rounded-2xl w-65 h-screen bg-gray-900 z-40 text-white transform transition-transform duration-300 ease-in-out  
        ${isProfileSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="overflow-y-auto h-full pr-2">
        <br />
        <div className="grid no-scrollbar grid-cols-3 justify-items-start">
          <div className="row-span-2 rounded-full bg-sky-300 w-10 h-10 m-2">
            <BiUser className="m-2 size-6" />
          </div>
          <div className="col-span-2 rounded-full">
            {haschannel?.name || "Loading..."}
          </div>
          <div className="col-span-2 rounded-full">
            {haschannel?.email || ""}
          </div>
          <div className="col-span-3 p-1 text-sky-500 cursor-pointer m-1">
            <div onClick={channel}>
              {haschannelResult ? "View your channel" : "Create channel"}
            </div>
          </div>
        </div>

        <hr className="opacity-20 mt-4 mb-4" />
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <FaGoogle className="size-6 mr-2" /> Google Account
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <MdSwitchAccount className="size-6 mr-2" /> Switch account
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={Logout}>
          <PiSignOutBold className="size-6 mr-2" /> Sign out
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <SiYoutubemusic className="size-6 mr-2 " /> YouTube Studio
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <PiCurrencyDollarFill className="size-6 mr-2" /> Purchases
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <BsFire className="size-6 mr-2" /> Your data in YouTube
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <WiMoonWaxingCrescent4 className="size-6 mr-2" /> Appearance: Device theme
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <FaGlobe className="size-6 mr-2" /> Language: British English
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <SiPrivateinternetaccess className="size-6 mr-2" /> Restricted Mode: Off
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <FiRadio className="size-6 mr-2" /> Location: India
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <SiYoutubegaming className="size-6 mr-2" /> Keyboard shortcuts
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <SiYoutubestudio className="size-6 mr-2" /> Setting
        </label>
        <hr className="opacity-20 mt-4 mb-4" />

        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <IoIosHelpCircle className="size-6 mr-2" /> Help
        </label>
        <label className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1" onClick={() => { nav("/") }}>
          <MdFeedback className="size-6 mr-2" /> Send feedback
        </label>

        <br className="opacity-20 mt-4 mb-4" />
        <hr className="opacity-20 mt-4 mb-20" />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Profile;
