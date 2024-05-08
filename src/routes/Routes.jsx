import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BookService from "../components/BookService/BookService";
import BookingList from "../components/BookingList/BookingList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/bookservice/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-one-pi.vercel.app/services/${params.id}`),
        },
        {
          path: '/bookinglist',
          element: <PrivateRoute><BookingList></BookingList></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router; 
  