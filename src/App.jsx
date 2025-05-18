
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import SignIn from './pages/SignIn'
import Login from './pages/Login'

import UserChannel from './pages/UserChannel'
import GetRedux from './pages/GetRedux'
import CreateChannel from './pages/CreateChannel'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createchannel" element={<CreateChannel/>} />
      <Route path="/userchannel" element={<UserChannel/>} />
     


    </Routes>
  )
}

export default App;
