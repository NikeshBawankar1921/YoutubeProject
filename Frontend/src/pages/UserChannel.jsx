import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';

function UserChannel() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [haschannel, setHasChannel] = useState('');
  const [haschannelResult, setHasChannelResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleProfile = () => {
    if (haschannel?.channel !== '') {
      setHasChannelResult(true);
    } else {
      setHasChannelResult(false);
    }
    setIsOpenProfile(!isOpenProfile);
  };

  // Update user from localStorage after delay
  const updateUserFromStorage = () => {
    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
      setHasChannel(storedUser);
      if (storedUser?.channel?.length > 0) {
        setSelectedCategory(storedUser.channel[0].handle);
      }
      console.log('User updated:', storedUser);
    }, 1000); // 1 second delay
  };

  useEffect(() => {
    updateUserFromStorage();

    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/videos');
        setVideos(res.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();

    window.addEventListener('storage', updateUserFromStorage);
    return () => window.removeEventListener('storage', updateUserFromStorage);
  }, []);

  return (
    <div className="fixed top-0 w-screen h-screen bg-white text-black overflow-y-auto">
      <Header onMenuClick={toggleSidebar} onProfileClick={toggleProfile} />
      <SideBar isOpen={isOpen} />
      <Profile isOpenProfile={isOpenProfile} haschannelResult={haschannelResult} />

      <img
        className="w-full h-50"
        src="https://wallpapers.com/images/hd/youtube-background-balmd1zcjzgnp7na.jpg"
        alt="banner"
      />

      <div className="grid grid-cols-3">
        <div className="flex col-span-2">
          <img
            className="rounded-full w-30 m-2"
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="profile"
          />
          <div className="m-2">
            {user?.channel?.length > 0 ? (
              <>
                <div className="font-bold text-xl">{user.channel[0].channelname}</div>
                <div>{user.channel[0].handle}</div>
              </>
            ) : (
              <>
                <div className="font-bold text-xl">No channel found</div>
                <div>---</div>
              </>
            )}
            <div>11.25k Subscribers</div>
            <div className="hidden rounded-full bg-gray-900 w-fit text-white pl-3 pr-3 p-1 cursor-pointer mt-3">
              Subscribe
            </div>
          </div>
        </div>

        <div></div> {/* spacer */}

        <div className="w-screen mt-3">
          <span className="m-3 hover:border-b-2 cursor-pointer">Home</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Videos</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Shorts</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Live</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Playlists</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Community</span>
          <hr className="opacity-25" />

          <div className="flex gap-5">
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">
              Latest
            </div>
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">
              Popular
            </div>
            <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">
              Oldest
            </div>
          </div>

          <div className="flex flex-wrap justify-evenly sm:justify-start sm:p-12 bg-white h-full w-screen">
            {selectedCategory &&
            videos.filter((video) => video.channelId === selectedCategory).length > 0 ? (
              videos
                .filter((video) => video.channelId === selectedCategory)
                .map((video, index) => (
                  <Link
                    key={index}
                    to={`/video/${video._id}`}
                    className="bg-gray-300 w-52 h-64 rounded m-3 shadow-md"
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-28 object-cover rounded-t"
                    />
                    <div className="p-2 text-sm text-black">
                      <h3 className="font-bold">{video.title}</h3>
                      <p>Uploader: {video.uploader}</p>
                      <p>Views: {video.views}</p>
                    </div>
                  </Link>
                ))
            ) : (
              <div className="text-gray-500 font-semibold m-5">No videos uploaded yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChannel;
