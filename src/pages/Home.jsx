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

                <div
                    className={`flex-grow transition-all duration-300 ease-in-out 
                ${isOpen ? 'ml-60' : 'ml-0'} p-4 overflow-y-auto`}
                >
                    <div className='flex flex-wrap justify-evenly'>
                        {Array(30).fill(null).map((_, i) => (
                            <div
                                key={i}
                                className='animate-pulse backdrop-blur-2xl bg-white w-52 h-52  text-black opacity-30 rounded m-3'
                            >
                                Loading... {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;
