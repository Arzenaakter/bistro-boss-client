import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Providers/AuthProvider';
import router from './Routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <HelmetProvider>
              <div className='max-w-screen-lg mx-auto'>
                    <RouterProvider router={router} />
              </div>
          </HelmetProvider>
      </AuthProvider>
  </React.StrictMode>,
)
