import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import AboutImage from '../assets/aboutimage.png'


const About = () => {
  return (
    <section className='relative overflow-hidden'>
      
      <Container>
        
        <Flex className='justify-between py-[280px]'>
          <div className='w-1/2'>
            <Heading text="Our Story"/>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <div >
            <Image className='absolute top-1/2 -translate-y-1/2 right-0 w-[calc(50%-108px)]' src={AboutImage}/>
          </div>
          
        </Flex>

      </Container>
 
     
    </section>
  )
}

export default About