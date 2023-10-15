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
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import PaymentHistory from './components/Payment/PaymentHistory/PaymentHistory.jsx';
import CheckoutForm from './components/Payment/CheckoutForm/CheckoutForm.jsx';
// import Login from './components/Login/Login.jsx';
import User from './components/Dashboard/User/User.jsx';
import Products from './components/Products/Products.jsx';
// import Register from './components/Register/Register.jsx';

import Faq from './components/FAQ/FAQ.jsx';
import ProductProvider from './Provider/ProductProvider.jsx';
import Register from './components/LoginRegister/Register/Register.jsx';
import Login from './components/LoginRegister/Login/Login.jsx';
import About from './components/About/About.jsx';
import UserProvider from './Provider/UserProvider.jsx';
import InfoProvider from './Provider/InfoProvider.jsx';



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
        element:<ProductCart></ProductCart>
      },
      {
        path:"/product/:id",
        element:<ProductDetail></ProductDetail>,
        loader:() => fetch(`/datasets/products.json`)
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
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/user',
        element:<User></User>
      }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <UserProvider>
    <InfoProvider>
    <RouterProvider router={router} />
    </InfoProvider>
    </UserProvider>
    </ProductProvider>
  </React.StrictMode>,
)
