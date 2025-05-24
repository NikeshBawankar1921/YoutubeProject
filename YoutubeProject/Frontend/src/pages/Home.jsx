import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import axios from 'axios';
import Profile from '../components/Profile';
import { useIsOpen } from "../utils/Contex";

const Home = () => {
  // State to store the current search input value
  const [searchQuery, setSearchQuery] = useState(""); 

  // State to trigger filtering based on search button click
  const [searchclick, setsearchClick] = useState("");

  // Get sidebar open/close state from context
  const { isSidebarOpen } = useIsOpen();

  // Function to update the searchclick state when search button is clicked
  const searchFilter = () => { 
    return setsearchClick(searchQuery);
  };

  // Get function from context, possibly to update if user has a channel or some UI state
  const { hasChannelFun } = useIsOpen();

  // State to hold list of videos fetched from server
  const [videos, setVideos] = useState([]);

  // State for currently selected video category filter; default is "all"
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Call context function to update channel-related UI or status
    hasChannelFun();

    // Async function to fetch videos from backend API
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/videos');
        setVideos(res.data);  // Save the fetched video data to state
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    // Call it again (possibly redundant here, can remove one)
    hasChannelFun();

    // Listener function to detect changes in localStorage 'logedin' key
    const handleStorageChange = () => {
      const logedin = JSON.parse(localStorage.getItem('logedin'));
      console.log('Login state changed to:', toString(logedin));
    };

    // Fetch videos on component mount
    fetchVideos();

    // Add event listener to track changes in localStorage (across tabs/windows)
    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('storage', handleStorageChange);

  }, []); // Empty dependency array: runs only once when component mounts

  return (
    // Main container: full screen width and height, vertical flex layout
    <div className='flex flex-col w-screen min-h-screen text-black no-scrollbar ' >
      
      {/* Header component with search input and handler props */}
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        searchFilter={searchFilter} 
      />

      <div className='top-20 flex flex-grow'>
        {/* Sidebar component */}
        <SideBar />

        {/* Profile section component */}
        <Profile />

        {/* Main content area, adjusts margin-left based on sidebar state */}
        <div className={`flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-60' : 'ml-0'} overflow-y-auto no-scrollbar`}>

          {/* Category filter bar with horizontal scroll */}
          <div className=' text-black w-screen flex gap-5 z-99 overflow-x-scroll  no-scrollbar'>
            {/* Map over categories, display each as a clickable pill */}
            {['ALL', 'Programming', 'Tech', 'News', 'Song', 'Animation', "Show"].map(category => (
              <div
                key={category}
                className={`w-fit pl-2 pr-2 rounded p-1 m-2 cursor-pointer ${selectedCategory === category.toLowerCase() ? 'bg-gray-900 text-white' : 'bg-gray-300'}`}
                onClick={() => {
                  // On category click: update selected category and reset search click to clear search filter
                  setSelectedCategory(category.toLowerCase())
                  setsearchClick("")
                }}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Video grid container */}
          <div className='flex flex-wrap justify-evenly sm:justify-start sm:p-12 bg-white h-full w-screen'>
            {/* Filter and map videos to display */}
            {videos
              .filter(video => {  
                if (searchclick) {
                  // If search click triggered, filter videos by title including search term (case-insensitive)
                  return video.title.toLowerCase().includes(searchclick.toLowerCase());
                }
                // Otherwise filter videos by selected category or show all if 'all' selected
                return selectedCategory === "all" || video.category.toLowerCase() === selectedCategory.toLowerCase();
              })
              .map((video, index) => (
                // Each video links to its own detail page by id
                <Link key={index} to={`/video/${video._id}`} className='bg-gray-300 w-52 h-64 rounded m-3 shadow-md'>
                  
                  {/* Video thumbnail */}
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className='w-full h-28 object-cover rounded-t'
                  />

                  {/* Video details below thumbnail */}
                  <div className='p-2 text-sm text-black'>
                    <h3 className='font-bold'>{video.title}</h3>
                    <p>Uploader: {video.uploader}</p>
                    <p>Views: {video.views}</p>
                  </div>

                </Link>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
