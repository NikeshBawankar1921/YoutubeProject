import { useEffect, useState } from 'react';
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { PiUserCircleLight, PiDotsThreeVerticalBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useIsOpen } from '../utils/Contex'; // Custom context for sidebar toggling

// Header component receives search query props and filter callback
function Header({ searchQuery, setSearchQuery, searchFilter }) {
  
  const { toggleSidebar, toggleProfileSidebar } = useIsOpen(); // Context hooks
  const nav = useNavigate(); // For navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const [userImg, setUserImg] = useState(""); // Stores profile image

  // Check login status and user data on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("logedin") === "true";
    const userData = JSON.parse(localStorage.getItem("user"));
    
    setIsLoggedIn(loggedIn);

    // Set profile image if available
    if (loggedIn && userData?.profilePic) {
      setUserImg(userData.profilePic);
    }
  }, []);

  // Navigate to register page on Sign In click
  const handleSignIn = () => {
    nav("/register");
  };

  return (
    <div className='sticky top-0 bg-white text-black w-screen flex justify-between z-99 flex-wrap-reverse'>
      
      {/* Left Section: Hamburger menu and YouTube logo */}
      <div className='flex'>
        <GiHamburgerMenu className='size-6 m-2 mt-3 cursor-pointer' onClick={toggleSidebar} />
        <BsYoutube className='size-6 m-2 mt-3 text-red-600' />
        <h3 className='pt-2.5'><b>YouTube</b></h3>
      </div>

      {/* Center Section: Search bar and microphone */}
      <div className='flex'>
        {/* Search input and icon */}
        <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8">
          <input
            type="Search"
            className='rounded-l-2xl border pl-4 bg-white border-gray-300 text-black'
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CiSearch className='size-6 m-1 mb-2 cursor-pointer' onClick={searchFilter} />
        </div>

        {/* Microphone icon */}
        <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer">
          <FaMicrophone className='size-4 m-2 mt-2' />
        </div>
      </div>

      {/* Right Section: Icons based on login status */}
      {isLoggedIn ? (
        <div className="flex items-center">
          {/* Notification bell */}
          <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer">
            <FaRegBell className='size-4 m-2 mt-2' />
          </div>

          {/* User profile picture */}
          <img
            className='border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer mr-6'
            src={userImg || "https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"} // Fallback image
            alt='User'
            onClick={toggleProfileSidebar}
          />
        </div>
      ) : (
        <div className="flex items-center">
          {/* Vertical dots menu */}
          <div className="flex border-gray-600 rounded-2xl font-bold w-fit m-2 h-8 cursor-pointer">
            <PiDotsThreeVerticalBold className='size-4 m-2 mt-2' />
          </div>

          {/* Sign In button */}
          <div
            className='flex border-gray-600 rounded-4xl bg-gray-300 w-fit h-8 pr-3 justify-center pt-1 cursor-pointer mr-6'
            onClick={handleSignIn}
          >
            <PiUserCircleLight className='size-6 ml-2' /> SignIn
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
