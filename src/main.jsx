import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import SmoothScroll from './Component/CommonComponent/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
    <App />
    </SmoothScroll>
  
  </StrictMode>,
)
