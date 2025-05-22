import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';

function UserChannel() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const toggleProfile = () =>setIsOpenProfile(!isOpenProfile)
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
   console.log(user.channel[0].handle)
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(user.channel[0].handle);


  // Function to update user state from localStorage
  const updateUserFromStorage = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    console.log(storedUser)
  
  };

  useEffect(() => {
    // 1. Listen to 'storage' events (cross-tab)
  
    const handleStorageChange = () => {
      updateUserFromStorage();
    };
    const fetchVideos = async () => {
      try {

        const res = await axios.get('http://localhost:5000/videos');
        setVideos(res.data);


      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
    handleStorageChange()

  }, []);

  return (
    <div className='fixed top-0 w-screen h-screen bg-white text-black overflow-y-auto'>
      <Header onMenuClick={toggleSidebar} onProfileClick={toggleProfile}/>
      <SideBar isOpen={isOpen} />
      <Profile isOpenProfile={isOpenProfile}/>
      <img
        className='w-full h-50'
        src="https://wallpapers.com/images/hd/youtube-background-balmd1zcjzgnp7na.jpg"
        alt="banner"
      />
      <div className='grid grid-cols-3'>
        <div className='flex col-span-2'>
          <img
            className='rounded-full w-30 m-2'
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="profile"
          />
          <div className='m-2'>

            {user.channel.length > 0 ? (<> <div className="font-bold text-xl">
              {user.channel[0].channelname}
            </div>
              <div>{user.channel[0].handle}</div></>

            ) : (<> <div className="font-bold text-xl">
              loading...
            </div>
              <div> loading...</div></>)}


            <div>11.25k Subscribers </div>
            <div className='hidden rounded-full bg-gray-900 w-fit text-white pl-3 pr-3 p-1 cursor-pointer mt-3'>Subscribe</div>
          </div>
        </div>
        <div></div> {/* spacer */}
        <div className='w-screen mt-3'>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Home</span>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Videos</span>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Shorts</span>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Live</span>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Playlists</span>
          <span className='m-3 hover:border-b-2 cursor-pointer'>Community</span>
          <hr className='opacity-25' />
          <div className='flex gap-5'>
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Latest</div>
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Popular</div>
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Oldest</div>
          </div>

          {/* <div className='bg-amber-50 text-black w-screen flex gap-5 z-99 overflow-x-scroll  no-scrollbar'>
            {['ALL', 'Programming', 'Tech', 'News', 'Song', 'Animation', "Show"].map(category => (
              <div
                key={category}
                className={`w-fit pl-2 pr-2 rounded p-1 m-2 cursor-pointer ${selectedCategory === category.toLowerCase() ? 'bg-gray-900 text-white' : 'bg-gray-300'}`}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </div>
            ))}
          </div> */}
          <div className='flex flex-wrap justify-evenly sm:justify-start sm:p-12 bg-white h-full w-scree '>
            {videos
              .filter(video =>  video.channelId === selectedCategory )
              .map((video, index) => (
                <Link key={index} to={`/video/${video._id}`} className='bg-gray-300 w-52 h-64 rounded m-3 shadow-md '>
                  <img src={video.thumbnailUrl} alt={video.title} className='w-full h-28 object-cover rounded-t' />
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
}

export default UserChannel;
