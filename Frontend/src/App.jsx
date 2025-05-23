
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import UserChannel from './pages/UserChannel'
import CreateChannel from './pages/CreateChannel'
import Login from './pages/LogIn'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createchannel" element={<PrivateRoute> <CreateChannel/> </PrivateRoute>  } />
      <Route path="/userchannel" element={<PrivateRoute>  <UserChannel/> </PrivateRoute>} />
      


    </Routes>
  )
}

export default App;
