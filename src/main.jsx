import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SingleUserPage from './pages/SingleUserPage.jsx'


// rutiranje
// 1. kreiranje routera
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/singleUser/:id',
        element: <SingleUserPage />
      }
    ]
  }
  
]);

// 2. provajdovanje routera

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
