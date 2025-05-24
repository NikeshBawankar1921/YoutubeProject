import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './utils/Contex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<SidebarProvider>
      <Router>
        <App />
      </Router>
</SidebarProvider>
  </StrictMode>,
)