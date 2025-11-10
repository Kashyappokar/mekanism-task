import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EditTask from './component/EditTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <EditTask /> */}
\  </StrictMode>,
)
