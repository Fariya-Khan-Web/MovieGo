import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/Error/ErrorPage.jsx';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import AllMovies from './Components/Layouts/AllMovies.jsx';
import AddMovie from './Components/Layouts/AddMovie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/allmovie',
        element:<AllMovies/>
      },
      {
        path:'/addmovie',
        element:<AddMovie/>
      },
      {
        path:'/login',
        element:<Login/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
