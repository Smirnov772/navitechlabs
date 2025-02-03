import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/index.css'
import App from './components/App/App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <div className="hero-section"></div>
      <App/>
    </StrictMode>,
)
