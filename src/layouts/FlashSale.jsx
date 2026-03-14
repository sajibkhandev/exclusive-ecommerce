import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'
import ProductTwo from '../assets/product2.png'
import Button from '../components/Button'

const FlashSale = () => {
    return (
        <section className='mb-20'>
            <Container>
                <SubHeading text="Today’s" />
                <Heading text="Flash Sales" />

                <Flex className='justify-between pt-10 pb-15'>
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="Gamepad" image={ProductTwo} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductTwo} saleprice="200" regularprice="250" badge="new" />

                </Flex>
               <div className='text-center border-b border-[#0000004d] pb-15'>
                 <Button text="View All Products"/>
               </div>
               

            </Container>
        </section>
    )
}

export default FlashSale