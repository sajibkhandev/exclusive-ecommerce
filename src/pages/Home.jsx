import React from 'react'
import Shop from '../layouts/Shop'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
        <Shop/>
        <Navber/>
        <h1 className='text-5xl text-center py-10'>This is Home page</h1>
        <Footer/>
    </div>
  )
}

export default Home