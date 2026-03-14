import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'
import Button from '../components/Button'

const OurProduct = () => {
  return (
    <section className='py-16 pb-42'>
        <Container>
            <SubHeading text="Our Products"/>
            <Heading text="Explore Our Products"/>

            <Flex className='justify-between pt-15 flex-wrap gap-y-15'>
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                </Flex>
               <div className='text-center pt-18'>
                 <Button text="View All Products"/>
               </div>
        </Container>
    </section>
  )
}

export default OurProduct