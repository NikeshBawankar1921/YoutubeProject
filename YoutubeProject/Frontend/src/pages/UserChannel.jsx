import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import { useIsOpen } from '../utils/Contex';

function UserChannel() {
  // Get the channel data from custom context hook
  const { haschannel } = useIsOpen();

  // State variables to store channel name and handle
  const [channeName, setChannelName] = useState();
  const [channeHandle, setChannelHandle] = useState();

  // Effect to set channel name and handle based on `haschannel` data
  useEffect(() => {
    if (!haschannel || !haschannel.channel) return; // If no channel info, exit early

    // If channel is an object with channelname, set values directly
    if (haschannel.channel.channelname !== undefined) {
      setChannelName(haschannel.channel.channelname);
      setChannelHandle(haschannel.channel.handle);
    }
    // If channel is an array, set values from the first element
    else if (Array.isArray(haschannel.channel) && haschannel.channel.length > 0) {
      setChannelName(haschannel.channel[0].channelname);
      setChannelHandle(haschannel.channel[0].handle);
    }
  }, [haschannel]);

  // Debugging output to console: log channel name (may cause error if haschannel or channel is undefined)
  console.log("sachannel data:", haschannel.channel.channelname);

  // State to store the list of all videos fetched from backend
  const [videos, setVideos] = useState([]);

  // Effect to fetch videos once when component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Fetch all videos from backend API
        const res = await axios.get('http://localhost:5000/videos');
        // Store videos in state
        setVideos(res.data);
      } catch (error) {
        // Log any error during fetch
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="fixed top-0 w-screen h-screen bg-white text-black overflow-y-auto">
      {/* Header and navigation sidebar components */}
      <Header />
      <SideBar />
      <Profile />

      {/* Channel banner image */}
      <img
        className="w-full h-50"
        src="https://wallpapers.com/images/hd/youtube-background-balmd1zcjzgnp7na.jpg"
        alt="banner"
      />

      <div className="grid grid-cols-3">
        {/* Left section: profile image and channel info */}
        <div className="flex col-span-2">
          <img
            className="rounded-full w-30 m-2"
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="profile"
          />
          <div className="m-2">
            {/* Display channel name and handle if available */}
            {haschannel ? (
              <>
                <div className="font-bold text-xl">{channeName}</div>
                <div>{channeHandle}</div>
              </>
            ) : (
              <>
                {/* Show loading text if channel data not available yet */}
                <div className="font-bold text-xl">{"Loading..."}</div>
                <div>Loading...</div>
              </>
            )}
            <div>11.25k Subscribers</div>

            {/* Subscribe button (currently hidden) */}
            <div className="hidden rounded-full bg-gray-900 w-fit text-white pl-3 pr-3 p-1 cursor-pointer mt-3">
              Subscribe
            </div>
          </div>
        </div>

        <div></div> {/* Spacer column */}

        {/* Right section: navigation tabs and videos */}
        <div className="w-screen mt-3">
          {/* Channel navigation tabs */}
          <span className="m-3 hover:border-b-2 cursor-pointer">Home</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Videos</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Shorts</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Live</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Playlists</span>
          <span className="m-3 hover:border-b-2 cursor-pointer">Community</span>
          <hr className="opacity-25" />

          {/* Filters: Latest, Popular, Oldest */}
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

          {/* Video list container */}
          <div className="flex flex-wrap justify-evenly sm:justify-start sm:p-12 bg-white h-full w-screen">
            {
              // Filter videos that belong to this channel using channel handle
              videos.filter((video) => video.channelId === channeHandle).length > 0 ? (
                // Map through filtered videos and render each as a Link card
                videos
                  .filter((video) => video.channelId === channeHandle)
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
                // If no videos found, show a placeholder message
                <div className="text-gray-500 font-semibold m-5">No videos uploaded yet.</div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChannel;
