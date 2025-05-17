import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { userStore } from './util/Store/userStore.js'
import { Provider } from 'react-redux'; //

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={userStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
