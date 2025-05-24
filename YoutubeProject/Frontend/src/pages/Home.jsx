

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';
import Profile from '../components/Profile';
import { useIsOpen } from "../utils/Contex";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); //search input 
  const [searchclick, setsearchClick] = useState("")
  const { isSidebarOpen } = useIsOpen();
  const searchFilter = () => { return setsearchClick(searchQuery) };//search button onclick function call


const {hasChannelFun}=useIsOpen();//context to 


  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");



  useEffect(() => {

    hasChannelFun()

    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/videos');
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

hasChannelFun()

    const handleStorageChange = () => {
      const logedin = JSON.parse(localStorage.getItem('logedin'));
      console.log('Login state changed to:', toString(logedin));
    };

    fetchVideos();

window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  },[]);




  return (
    <div className='flex flex-col w-screen min-h-screen text-black no-scrollbar ' >
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchFilter={searchFilter} />

      <div className='top-20 flex flex-grow'>
        <SideBar />
        <Profile />
        <div className={`flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-60' : 'ml-0'} overflow-y-auto no-scrollbar`}>

          <div className=' text-black w-screen flex gap-5 z-99 overflow-x-scroll  no-scrollbar'>
            {['ALL', 'Programming', 'Tech', 'News', 'Song', 'Animation', "Show"].map(category => (
              <div
                key={category}
                className={`w-fit pl-2 pr-2 rounded p-1 m-2 cursor-pointer ${selectedCategory === category.toLowerCase() ? 'bg-gray-900 text-white' : 'bg-gray-300'}`}
                onClick={() => {
                  setSelectedCategory(category.toLowerCase())
                  setsearchClick("")
                }
                }
              >
                {category}
              </div>
            ))}
          </div>

          <div className='flex flex-wrap justify-evenly sm:justify-start sm:p-12 bg-white h-full w-screen'>
            {videos
              .filter(video => {  if (searchclick) {   return video.title.toLowerCase().includes(searchclick.toLowerCase());  }
                return selectedCategory === "all" || video.category.toLowerCase() === selectedCategory.toLowerCase();        })
              .map((video, index) => 
                (    <Link key={index}    to={`/video/${video._id}`} className='bg-gray-300 w-52 h-64 rounded m-3 shadow-md' >

                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className='w-full h-28 object-cover rounded-t'
                  />

                  <div className='p-2 text-sm text-black'>
                    <h3 className='font-bold'>{video.title}</h3>
                    <p>Uploader: {video.uploader}</p>
                    <p>Views: {video.views}</p>
                  </div>


                </Link>
              ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;