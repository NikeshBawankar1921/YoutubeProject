import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'          // Global CSS styles
import App from './App.jsx'   // Main app component
import { SidebarProvider } from './utils/Contex.jsx'  // Context provider for sidebar state management


// Create the root React DOM node and render the app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* SidebarProvider provides sidebar state and functions via React Context to the entire app */}
    <SidebarProvider>
      {/* Router enables routing functionality throughout the app */}
      <Router>
        {/* The main App component which contains all route definitions */}
        <App />
      </Router>
    </SidebarProvider>
  </StrictMode>,
)
