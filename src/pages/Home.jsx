

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [videos, setVideos] = useState([]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/videos");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='flex flex-col w-screen min-h-screen text-black'>
      <Header onMenuClick={toggleSidebar} />
      <div className='top-20 flex flex-grow'>
        <SideBar isOpen={isOpen} onClose={toggleSidebar} />
        <div className={`flex-grow transition-all duration-300 ease-in-out ${isOpen ? 'ml-60' : 'ml-0'} overflow-y-auto`}>
          <div className='bg-amber-50 text-black w-screen flex gap-5 z-99'>
            {['ALL', 'Music', 'News', 'Comedy', 'Songs'].map(category => (
              <div key={category} className='w-fit pl-2 pr-2 rounded p-1 m-2 bg-gray-300 cursor-pointer'>{category}</div>
            ))}
          </div>
          <div className='flex flex-wrap justify-evenly bg-white '>
            {/* {videos.map((video, index) => (
              <div key={index} className='bg-white w-52 h-64 rounded m-3 shadow-md'>
                <img src={video.thumbnailUrl} alt={video.title} className='w-full h-28 object-cover rounded-t' />
                <div className='p-2 text-sm'>
                  <h3 className='font-bold'>{video.title}</h3>
                  <p>Uploader: {video.uploader}</p>
                  <p>Views: {video.views}</p>
                </div>
              </div>
            ))} */}

            {videos.map((video, index) => (
              <Link key={index} to={`/video/${video._id}`} className='bg-white w-52 h-64 rounded m-3 shadow-md'>
                <img src={video.thumbnailUrl} alt={video.title} className='w-full h-28 object-cover rounded-t' />
                <div className='p-2 text-sm'>
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