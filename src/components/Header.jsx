import React, { useState } from 'react'
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { PiUserCircleLight, PiDotsThreeVerticalBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";




function Header({ onMenuClick }) {



    const [SignIn, setSignIn] = useState("flex");
    const [Login, setLogin] = useState("hidden");

    function changeState() {
        if (SignIn === "flex") {
            setSignIn("hidden");
            setLogin("flex");
        } else {
            setSignIn("flex");
            setLogin("hidden");
        }
    }

    return (
        <div className='sticky top-0 bg-amber-50 text-black w-screen flex justify-between z-99'>
            <div className='flex'>
                <GiHamburgerMenu
                    className='size-6 m-2 mt-3 cursor-pointer'
                    onClick={onMenuClick} // ✅ This triggers sidebar toggle
                />
                <BsYoutube className='size-6 m-2 mt-3 text-red-600' />
                <h3 className='pt-2.5'><b>YouTube</b></h3>
            </div>

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

            <div className={Login}>
                <div className="flex border-gray-600 rounded-4xl bg-gray-300 w-fit h-8 mt-2 pr-3 justify-center pt-1 cursor-pointer">
                    <GoPlus className='size-6 ml-2' /> Create
                </div>
                <div className="flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer">
                    <FaRegBell className='size-4 m-2 mt-2' />
                </div>
                <img
                    className='flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer mr-6'
                    src="https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"
                    alt='P'
                    onClick={changeState}
                />
            </div>

            <div className={SignIn}>
                <div className="flex border-gray-600 rounded-2xl font-bold w-fit m-2 h-8 cursor-pointer">
                    <PiDotsThreeVerticalBold className='size-4 m-2 mt-2' />
                </div>
                <div
                    className=" border-gray-600 rounded-4xl bg-gray-300 w-fit h-8 mt-2 pr-3 justify-center pt-1 cursor-pointer mr-6 hidden sm:flex"
                    onClick={changeState}
                >
                    <PiUserCircleLight className='size-6 ml-2 ' /> Sign in
                </div>
            </div>
        </div>
    );
}

export default Header;
