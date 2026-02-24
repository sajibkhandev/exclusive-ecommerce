import React from 'react'
import Image from '../components/Image'
import ErrorImage from '../assets/download.png'
import Shop from '../layouts/Shop'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'

const Error = () => {
  return (
    <div>
      <Shop/>
      <Navber/>


       <h1 className='text-8xl text-center mt-10'>Error page</h1>


       
       <Footer/>


    </div>
  )
}

export default Error