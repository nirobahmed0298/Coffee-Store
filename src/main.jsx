import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Sections/Home/Home';
import AddCoffee from './Components/Sections/AddCoffee';
import CoffeeDetails from './Components/Sections/CoffeeDetails';
import UpdateCoffee from './UpdateCoffee';
import LogIn from './Components/Auth/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import Users from './Components/Sections/Users';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/details/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)

      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
