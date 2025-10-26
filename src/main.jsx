import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer/Footer.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-4'>
      <App />
    </div>
    <div className='bg-white w-full'>
      <div className=' bg-white mx-auto px-4 container'>
        <Footer></Footer>
      </div>
    </div>
  </StrictMode>,
)
