import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Error from './pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/*" element={<Error />}></Route>
   
      
   </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App