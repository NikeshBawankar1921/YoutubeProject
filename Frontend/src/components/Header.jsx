import { useEffect, useState } from 'react';
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { PiUserCircleLight, PiDotsThreeVerticalBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


function Header({ onMenuClick,onProfileClick }) {
  const nav = useNavigate();
  // const [userMenu,setuserMenu]=useState('hidden');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImg, setUserImg] = useState("");
  const [hideCreate, sethideCreate] = useState('flex border-gray-600 rounded-4xl bg-gray-300 w-fit h-8  pr-3 justify-center pt-1 cursor-pointer');
  const [LogoutState, setLogoutState] = useState("flex")

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("logedin") === "true";
    const userData = JSON.parse(localStorage.getItem("user"));
    let hasChannel
    if (localStorage.getItem("user")) {
      hasChannel = userData.channel;

    }
    setIsLoggedIn(loggedIn);
    if (loggedIn && userData?.profilePic) {
      setUserImg(userData.profilePic); // or fallback to a static image
    }
    if (hasChannel) {
      sethideCreate("hidden")
    }


  }, []);

  const handleSignIn = () => {
    nav("/register");
  };

  // const handleProfileClick = () => {
  //   //     if(userMenu=="hidden")
  //   //     {setuserMenu('fixed');}
  //   //     else{
  //   // setuserMenu('hidden');
  //   nav("/userchannel")
  // }


  function Logout() {
    setIsLoggedIn(false)
    setLogoutState(`hidden`)
    sethideCreate(`hidden`)
    localStorage.clear();

    nav("/")
  }

  function createChannel() {
    nav('/createchannel')
  }


  return (
    <div className='sticky top-0 bg-white text-black w-screen flex justify-between z-99 flex-wrap-reverse'>
      {/* Left: Logo and Menu */}
      <div className='flex'>
        <GiHamburgerMenu className='size-6 m-2 mt-3 cursor-pointer' onClick={onMenuClick} />
        <BsYoutube className='size-6 m-2 mt-3 text-red-600' />
        <h3 className='pt-2.5'><b>YouTube</b></h3>
      </div>

      {/* Middle: Search Bar */}
      <div className='flex'>
        <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8">
          <input
            type="Search"
            className='rounded-l-2xl border pl-4 bg-white border-gray-300 text-black'
            placeholder="Search"
          />
          <CiSearch className='size-6 m-1 mb-2 cursor-pointer' />
        </div>
        <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer">
          <FaMicrophone className='size-4 m-2 mt-2' />
        </div>
      </div>

      {/* Right: Conditional based on login */}
      {isLoggedIn ? (
        <div className="flex items-center">


          {/* <div
            className={` ${hideCreate} border-gray-600 rounded-4xl bg-gray-300 w-fit h-8  pr-3 justify-center pt-1 cursor-pointer mr-6 `}
            onClick={createChannel}
          >
            <PiUserCircleLight className='size-6 ml-2 ' /> Create
          </div> */}


          <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer" onClick={onProfileClick}>
            <FaRegBell className='size-4 m-2 mt-2'  />
          </div>
          <img
            className='border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer mr-6'
            src={userImg || "https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"}
            alt='User'
            onClick={onProfileClick}
          />
          
          {/* <div
            className={`${LogoutState} border-gray-600 rounded-4xl bg-gray-300 w-fit h-8 pt-1 pr-3 justify-center  cursor-pointer mr-6 `}
            onClick={Logout}
          >
            <PiUserCircleLight className='size-6 ml-2 ' /> LogOut
          </div> */}
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex border-gray-600 rounded-2xl font-bold w-fit m-2 h-8 cursor-pointer">
            <PiDotsThreeVerticalBold className='size-4 m-2 mt-2' />
          </div>
          <div
            className={'flex border-gray-600 rounded-4xl bg-gray-300 w-fit h-8  pr-3 justify-center pt-1 cursor-pointer mr-6'}
            onClick={handleSignIn}
          >
            <PiUserCircleLight className='size-6 ml-2 ' /> SignIn
          </div>

        </div>
      )}



    </div>
  );
}

export default Header;
