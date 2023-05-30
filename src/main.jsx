import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
// import AuthProvider from './Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
   <div className='max-w-[1250px] mx-auto'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
   </HelmetProvider>
  </React.StrictMode>,
)
