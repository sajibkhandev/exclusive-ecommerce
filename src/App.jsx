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


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="cart" element={<Cart />}></Route>
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