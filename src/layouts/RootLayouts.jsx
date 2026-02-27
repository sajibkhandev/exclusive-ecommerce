import React from 'react'
import { Outlet } from 'react-router-dom'
import Shop from './Shop'
import Navber from './Navber'
import Footer from './Footer'

const RootLayouts = () => {
  return (
    <div>
        <Shop/>
        <Navber/>
          <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayouts