import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Main from './layout/Main';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Profile from './pages/Profile';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/api/products/')
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`/api/products/${params.id}`)
            },
            {
                path: "/cart/:pId?",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router 