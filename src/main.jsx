import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { Login } from './login/Login.jsx';
import { Register } from './login/Register.jsx';


const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
    path: '/login/',
    element: <Login />
  },

  {
    path: '/register',
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
