
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import SignIn from './components/SignIn'
import Login from './components/Login'
import CreateChannel from './components/CreateChannel'
import UserChannel from './pages/UserChannel'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createchannel" element={<CreateChannel/>} />
      <Route path="/userchannel" element={<UserChannel/>} />



    </Routes>
  )
}

export default App
