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
    // Define all routes for the application
    <Routes>
      {/* Catch-all route: displays Error page for any undefined routes */}
      <Route path="*" element={<Error />} />

      {/* Public routes */}
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Video detail page with dynamic video ID parameter */}
      <Route path="/video/:id" element={<VideoPage />} />

      {/* User authentication routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes wrapped with PrivateRoute to restrict access to logged-in users */}
      {/* Page to create a new channel */}
      <Route path="/createchannel" element={
        <PrivateRoute>
          <CreateChannel />
        </PrivateRoute>
      } />

      {/* User's channel page */}
      <Route path="/userchannel" element={
        <PrivateRoute>
          <UserChannel />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App;
