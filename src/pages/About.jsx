import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import AboutImage from '../assets/aboutimage.png'
import Empleyee from '../components/Empleyee'
import Modal2 from '../assets/modal2.png'
import OtherCard from '../components/OtherCard'
import ServiceImage from '../assets/services.png'


const About = () => {
  return (
    <section className='relative overflow-hidden mb-[140px]'>

      <Container>

        <Flex className='justify-between py-[280px]'>
          <div className='w-1/2'>
            <Heading text="Our Story" />
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <div className='w-1/2 '>
            <Image className='absolute top-1/4 -translate-y-1/2 right-0 w-[calc(50%-108px)]' src={AboutImage} />
          </div>

        </Flex>




        <Flex className='justify-between pb-[196px]'>
          <Empleyee image={Modal2} name="Tom Cruise" deg="Founder & Chairman" />
          <Empleyee image={Modal2} name="Emma Watson" deg="Managing Director" />
          <Empleyee image={Modal2} name="Emma Watson" deg="Managing Director" />
        </Flex>

        <Flex className='justify-between '>
          <OtherCard image={ServiceImage} title="FREE AND FAST DELIVERY" des="Free delivery for all orders over $140"/>
        <OtherCard image={ServiceImage} title="FREE AND FAST DELIVERY" des="Free delivery for all orders over $140"/>
        <OtherCard image={ServiceImage} title="FREE AND FAST DELIVERY" des="Free delivery for all orders over $140"/>
        
        </Flex>
        


      </Container>


    </section>
  )
}

export default About