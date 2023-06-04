import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Shop/Order/Order";
import Login from "../Regster&Login/Login/Login";
import Regster from "../Regster&Login/Regster/Regster";
import Secret from "../Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/regster',
                element: <Regster></Regster>
            },
            {
                path: '/secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>

            }
        ]
    },

]);