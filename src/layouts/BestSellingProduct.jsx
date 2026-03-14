import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'

const BestSellingProduct = () => {
    return (
        <section className='pb-[140px]'>
            <Container>
                <Flex className='justify-between items-end'>
                    <div>
                        <SubHeading text="This Month" />
                        <Heading text="Best Selling Products" />
                    </div>
                    <Button text="View All" />
                </Flex>


                <Flex className='justify-between pt-15'>
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                    <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
                </Flex>
            </Container>
        </section>
    )
}

export default BestSellingProduct