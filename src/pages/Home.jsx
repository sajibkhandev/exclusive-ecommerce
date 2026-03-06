import React from 'react'
import Banner from '../layouts/Banner'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ProductOne from '../assets/product1.png'
import ProductTwo from '../assets/product2.png'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Container>
        <Flex className='gap-x-5'>
          <Card title="Product One" image={ProductOne} saleprice="120" regularprice="160" badge="-40%"/>
          <Card title="Product Two" image={ProductTwo} saleprice="100" regularprice="150" badge="New"/>
          <Card title="Product One" image={ProductOne} saleprice="120" regularprice="160" badge="-40%"/>
          <Card title="Product Two" image={ProductTwo} saleprice="100" regularprice="150" badge="New"/>
        
        </Flex>
      
      </Container>
      
      
    </div>
  )
}

export default Home