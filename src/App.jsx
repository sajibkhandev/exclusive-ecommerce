import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayouts from './layouts/RootLayouts';
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import ProductDetalis from './pages/ProductDetalis';


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="productdetalis" element={<ProductDetalis />}></Route>
        <Route path="wishlist" element={<Wishlist />}></Route>
        <Route path="account" element={<Account />}></Route>
        <Route path="*" element={<Error />}></Route>
   </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App