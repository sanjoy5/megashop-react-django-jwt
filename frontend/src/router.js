import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Main from './layout/Main';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router 