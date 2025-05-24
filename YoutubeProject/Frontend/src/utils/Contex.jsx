import { createContext, useContext, useState } from 'react';

// Create the context to hold sidebar state and related functions
const IsOpenContext = createContext();

// Provider component that will wrap the part of the app needing access to this context
export const SidebarProvider = ({ children }) => {

  // State to track if the main sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State to track if the profile sidebar is open or closed
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);

  // State to store user data retrieved from localStorage
  const [haschannel, setHasChannel] = useState('');

  // State to store whether the user has a channel or not (boolean)
  const [haschannelResult, setHaschannelResult] = useState(false);

  // Function to fetch user data from localStorage and check if user has a channel
  const hasChannelFun = () => {
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user object from localStorage
    setHasChannel(user); // Update haschannel state with user data
    console.log(user);   // Debugging: log user data
    
    // Check if the user object has a non-empty 'channel' property
    if (user?.channel !== '') {
      setHaschannelResult(true);  // User has a channel
    } else {
      setHaschannelResult(false); // User does not have a channel
    }
  };

  // Toggle the main sidebar open/closed state
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Toggle the profile sidebar open/closed state
  const toggleProfileSidebar = () => {
    setIsProfileSidebarOpen(prev => !prev);
  };

  // Close both sidebars
  const closeSidebars = () => {
    setIsSidebarOpen(false);
    setIsProfileSidebarOpen(false);
  };

  return (
    // Provide state and functions to any children components that consume this context
    <IsOpenContext.Provider value={{
      haschannel,             // user data object
      haschannelResult,       // boolean: does user have a channel?
      isSidebarOpen,          // boolean: is main sidebar open?
      isProfileSidebarOpen,   // boolean: is profile sidebar open?
      toggleSidebar,          // function to toggle main sidebar
      toggleProfileSidebar,   // function to toggle profile sidebar
      hasChannelFun,          // function to fetch user data and check channel
      closeSidebars           // function to close all sidebars
    }}>
      {children}
    </IsOpenContext.Provider>
  );
};

// Custom hook for easy consumption of IsOpenContext in functional components
export const useIsOpen = () => useContext(IsOpenContext);
