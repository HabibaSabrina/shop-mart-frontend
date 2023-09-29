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
import Payment from './components/Payment/Payment.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import PaymentHistory from './components/Payment/PaymentHistory/PaymentHistory.jsx';

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
        path:"/payment/:id",
        element:<Payment></Payment>
      },
      {
        path:"/history",
        element:<PaymentHistory></PaymentHistory>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
