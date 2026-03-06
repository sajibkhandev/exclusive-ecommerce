import React from 'react'
import Banner from '../layouts/Banner'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'


const Home = () => {
  return (
    <div>
      <Banner/>
       <SubHeading text="Categories"/>
       <Heading text="Browse By Category"/>
      
    </div>
  )
}

export default Home