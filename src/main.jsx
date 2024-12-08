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
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Home from './Components/Layouts/Home.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './Components/HomeComp/Details.jsx';
import Favorites from './Components/Layouts/Favorites.jsx';
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import Update from './Components/Layouts/Update.jsx';
import Contact from './Components/Layouts/Contact.jsx';
import Updated from './Components/Layouts/Updated.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/allmovie',
        element: <AllMovies />
      },
      {
        path: '/allmovie/:id',
        loader: ({params})=> fetch(`https://movie-portal-server-one.vercel.app/movies/${params.id}`),
        element: <PrivateRoute><Details/></PrivateRoute>
      },
      {
        path: '/addmovie',
        element: <PrivateRoute><AddMovie /></PrivateRoute>
      },
      {
        path: '/allmovie/:id/update/:id',  
        loader: ({params})=> fetch(`https://movie-portal-server-one.vercel.app/movies/${params.id}`),
        element: <PrivateRoute><Update/></PrivateRoute>
      },
      {
        path: '/myfavorites',
        element: <PrivateRoute><Favorites/></PrivateRoute>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
