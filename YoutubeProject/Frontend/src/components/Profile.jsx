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
  // Hook to programmatically navigate between routes
  let nav = useNavigate();

  // Destructure state and methods from custom context hook
  const { isProfileSidebarOpen, haschannelResult, haschannel, closeSidebars } = useIsOpen();

  // Function to navigate to channel page if channel exists or to create channel page if not
  function channel() {
    if (haschannelResult) {
      closeSidebars();   // Close sidebars before navigating
      nav("/userchannel");
    } else {
      nav("/createchannel");
      closeSidebars();
    }
  }

  // Logout function to clear local storage, close sidebar, and navigate to login page
  function Logout() {
    closeSidebars();
    localStorage.clear();
    nav("/login");
  }

  return (
    // Sidebar container, positioned fixed at right, hidden or shown based on isProfileSidebarOpen state
    <div
      className={`fixed right-0 rounded-2xl w-65 h-screen bg-gray-900 z-40 text-white transform transition-transform duration-300 ease-in-out  
        ${isProfileSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="overflow-y-auto h-full pr-2">
        <br />
        {/* User info section with grid layout */}
        <div className="grid no-scrollbar grid-cols-3 justify-items-start">
          {/* User avatar icon */}
          <div className="row-span-2 rounded-full bg-sky-300 w-10 h-10 m-2">
            <BiUser className="m-2 size-6" />
          </div>
          {/* Display channel name or loading */}
          <div className="col-span-2 rounded-full">
            {haschannel?.name || "Loading..."}
          </div>
          {/* Display user email */}
          <div className="col-span-2 rounded-full">
            {haschannel?.email || ""}
          </div>
          {/* Button to view or create channel based on availability */}
          <div className="col-span-3 p-1 text-sky-500 cursor-pointer m-1">
            <div onClick={channel}>
              {haschannelResult ? "View your channel" : "Create channel"}
            </div>
          </div>
        </div>

        <hr className="opacity-20 mt-4 mb-4" />

        {/* Google Account label with icon */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <FaGoogle className="size-6 mr-2" /> Google Account
        </label>

        {/* Switch account option */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <MdSwitchAccount className="size-6 mr-2" /> Switch account
        </label>

        {/* Sign out option with logout handler */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={Logout}
        >
          <PiSignOutBold className="size-6 mr-2" /> Sign out
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        {/* YouTube Studio label */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <SiYoutubemusic className="size-6 mr-2 " /> YouTube Studio
        </label>

        {/* Purchases label */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <PiCurrencyDollarFill className="size-6 mr-2" /> Purchases
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        {/* Various settings and info options */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <BsFire className="size-6 mr-2" /> Your data in YouTube
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <WiMoonWaxingCrescent4 className="size-6 mr-2" /> Appearance: Device theme
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <FaGlobe className="size-6 mr-2" /> Language: British English
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <SiPrivateinternetaccess className="size-6 mr-2" /> Restricted Mode: Off
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <FiRadio className="size-6 mr-2" /> Location: India
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <SiYoutubegaming className="size-6 mr-2" /> Keyboard shortcuts
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        {/* Settings option */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <SiYoutubestudio className="size-6 mr-2" /> Setting
        </label>

        <hr className="opacity-20 mt-4 mb-4" />

        {/* Help and feedback options */}
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <IoIosHelpCircle className="size-6 mr-2" /> Help
        </label>
        <label
          className="flex cursor-pointer justify-start m-3 rounded hover:bg-gray-800 p-1"
          onClick={() => { nav("#") }}
        >
          <MdFeedback className="size-6 mr-2" /> Send feedback
        </label>

        {/* Spacing and padding at the bottom */}
        <br className="opacity-20 mt-4 mb-4" />
        <hr className="opacity-20 mt-4 mb-20" />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Profile;
