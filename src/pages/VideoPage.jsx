import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { AiTwotoneDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

import { VscVerifiedFilled } from "react-icons/vsc";
import Header from '../components/Header';
import SideBar from '../components/Sidebar';


function VideoPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col text-black  w-screen h-auto bg-white'>
            <Header onMenuClick={toggleSidebar} />


            
            <div className='flex flex-col sm:grid sm:grid-cols-3 '>
                <SideBar isOpen={isOpen} onClose={toggleSidebar} />

                <div className='col-span-2 grid w-full h-100   mb-4'> {/* video and comment */}
                    {/* video */}
                    <div className='h-100 bg-red-20  m-2'>
                        <iframe className='w-full h-80 rounded-2xl ' src="https://www.youtube.com/embed/Zb1zVeXLUf8" altr="video not available" />
                        <div className='font-bold'>Title : Learn React in 10hr by Nikesh Bawankr</div>

                    </div>

                    {/*Channel details and Buttons*/}
                    <div className='flex flex-wrap'>  {/* body of channel information Name,DP,Sub Count*/}
                        <img className='flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-8 cursor-pointer mr-6'
                            src="https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"
                            alt='P' />
                        <div>
                            <h4 className='font-bold'>Channel name</h4>

                            <h4>1.58k subscribers</h4>
                        </div>
                        <div className='rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center pt-1 ml-10 cursor-pointer'>Subscribe</div>
                        <div className='flex justify-evenly '>
                            <div className='flex bg-gray-300 p-2 rounded-full w-35 justify-between m-1 font-bold '> <BiLike className='size-6 cursor-pointer' /> 600  <hr className='rotate-90 p-3' /> <AiTwotoneDislike className='rotate-y-180 size-6 cursor-pointer' /> </div> {/*like and dislike*/}
                            <div className='flex bg-gray-300 p-2 rounded-full w-quto justify-between m-1 font-bold cursor-pointer'> <PiShareFat className='size-6 mr-2' />Share</div>
                            <div className='sm:flex bg-gray-300 p-2 rounded-full w-quto justify-between m-1 font-bold cursor-pointer hidden '> <HiDownload className='size-6 mr-2' />Download</div>

                            <div className='flex bg-gray-300  rounded-full w-quto justify-between font-bold pl-2 pr-2 m-1 pt-1 cursor-pointer'>. . .</div>
                        </div>
                    </div>


                    {/* comment */}
                    <div className='h-auto border'>comments

                    </div>
                </div>


                <div className=' h-scree w-full overflow-y-auto mt-48 sm:m-3'> {/*Video Suggetions*/}
                    


                    {Array(10).fill(null).map((_, i) => (
                            <div
                                key={i}
                         className='flex mb-4'>
                        <img className='w-50 rounded-2xl' src="https://i.fbcd.co/products/resized/resized-750-500/9-copy-125e211ff31e71ec0f8b77668619e8aadeebf54bcb48674b362848e13d002c4c.jpg" alt="" />
                        <div >
                            
                            <h2 className='ml-2 font-bold'>Thumbnail Banana Sikhe </h2>
                            <h4 className='ml-2 flex'>Channel 365 <VscVerifiedFilled className='size-4 mt-1 ml-3'/></h4>
                            <h4 className='ml-2'>5.5M views 4 months ago</h4>
                        </div>
                    </div>
                        ))}
                </div>

            </div>
        </div>
    )
}

export default VideoPage
