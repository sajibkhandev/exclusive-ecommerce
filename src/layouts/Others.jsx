import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import OtherCard from '../components/OtherCard'
import ServiceImage from '../assets/services.png'

const Others = () => {
  return (
    <section className='py-35'>
        <Container>
            <Flex className='justify-between'>
                <OtherCard image={ServiceImage} title="FREE AND FAST DELIVERY" des="Free delivery for all orders over $140"/>
                <OtherCard image={ServiceImage} title="24/7 CUSTOMER SERVICE" des="Free delivery for all orders over $140"/>
                <OtherCard image={ServiceImage} title="FREE AND FAST DELIVERY" des="Free delivery for all orders over $140"/>
            </Flex>

        </Container>
    </section>
  )
}

export default Others