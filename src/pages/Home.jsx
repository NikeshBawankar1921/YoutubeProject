import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col w-screen min-h-screen text-black'>

            <Header onMenuClick={toggleSidebar} />
           

            <div className='top-20 flex flex-grow'>
                <SideBar isOpen={isOpen} onClose={toggleSidebar} />

                <div className={`flex-grow transition-all duration-300 ease-in-out 
                ${isOpen ? 'ml-60' : 'ml-0'}  overflow-y-auto`}
                >
                     <div className=" bg-amber-50 text-black w-screen flex gap-5 z-99">
                <div className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>ALL</div>
                <div className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>Music</div>
                <div className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>News</div>
                <div className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>Comedy</div>
                <div className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>Songs</div>

                 
                
                
                
            </div>
                    <div className='flex flex-wrap justify-evenly'>
                        {Array(30).fill(null).map((_, i) => (
                            <div
                                key={i}
                                className='animate-pulse backdrop-blur-2xl bg-white w-52 h-52  text-black opacity-30 rounded m-3'
                            >
                                <img className='p-1' src="https://tse3.mm.bing.net/th/id/OIP.TIiC2ETU7FzBMC2-ZcL2BAHaEK?w=680&h=383&rs=1&pid=ImgDetMain" alt="" />
                                <div className='flex flex-col'>
                                    <label>How to make Thumbnail? </label>
                                    <label>Sikhlo {i}</label>
                                    <label>Views: 8.9M</label>
                                    <label></label>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;
