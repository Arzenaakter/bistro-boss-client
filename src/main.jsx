import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <div className='max-w-screen-lg mx-auto'>
   <RouterProvider router={router} />
   </div>
  </HelmetProvider>
  </React.StrictMode>,
)
