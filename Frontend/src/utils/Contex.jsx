import { createContext, useContext, useState } from 'react';

// Create the context
const IsOpenContext = createContext();

// Provider component
export const SidebarProvider = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  const [haschannel, setHasChannel] = useState('');
  const [haschannelResult, setHaschannelResult] = useState(false);



const hasChannelFun = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  setHasChannel(user); 

if (user?.channel !='') {
    setHaschannelResult(true);
  } else {
setHaschannelResult(false);
  }
 
};





  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const toggleProfileSidebar = () => {
    setIsProfileSidebarOpen(prev => !prev);
   
  };
const closeSidebars=()=>{setIsSidebarOpen(false)
  setIsProfileSidebarOpen(false)
}

  return (
    <IsOpenContext.Provider value={{
      haschannel,
      haschannelResult,
      isSidebarOpen,
      isProfileSidebarOpen,
      toggleSidebar,
      toggleProfileSidebar,
      hasChannelFun,
      closeSidebars
    
    }}>
      {children}
    </IsOpenContext.Provider>
  );


};

// Custom hook to use the context
export const useIsOpen = () => useContext(IsOpenContext);