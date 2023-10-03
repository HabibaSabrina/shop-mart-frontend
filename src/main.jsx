import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import ProductCart from './components/ProductCart/ProductCart.jsx';
import { addedProductsCart } from './loader/getAddedProducts.js';

import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import PaymentHistory from './components/Payment/PaymentHistory/PaymentHistory.jsx';
import CheckoutForm from './components/Payment/CheckoutForm/CheckoutForm.jsx';
import Login from './components/Login/Login.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import User from './components/Dashboard/User/User.jsx';
import Products from './components/Products/Products.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/productcart",
        element:<ProductCart></ProductCart>,
        loader: addedProductsCart
      },
      {
        path:"/product/:id",
        element:<ProductDetail></ProductDetail>,
        loader:() => fetch(`/products.json`)
      },
      {
        path:"/payment",
        element:<CheckoutForm></CheckoutForm>
      },
      {
        path:"/history",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/product',
        element:<Products></Products>
      }
      
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'user',
        element:<User></User>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
