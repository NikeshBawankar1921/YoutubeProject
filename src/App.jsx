
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import SignIn from './components/SignIn'
import Login from './components/Login'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )
}

export default App
