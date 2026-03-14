import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { CiMobile4 } from "react-icons/ci";

import CategoryCard from '../components/CategoryCard';
import { HiOutlineComputerDesktop } from 'react-icons/hi2'

const BrowserByCategory = () => {
  return (
    <section className='mb-17.5'>
        <Container>
            <SubHeading text="Categories"/>
            <Heading text="Browse By Category"/>

           <Flex className='justify-between pt-15 pb-17.5 border-b border-[#0000004d] '>

             <CategoryCard  icon={<CiMobile4 className='text-5xl group-hover:text-white duration-300'/>} title="Phones"/>
            <CategoryCard  icon={<HiOutlineComputerDesktop  className='text-5xl group-hover:text-white duration-300'/>} title="Computers"/>
            <CategoryCard  icon={<CiMobile4 className='text-5xl group-hover:text-white duration-300'/>} title="Phones"/>
            <CategoryCard  icon={<CiMobile4 className='text-5xl group-hover:text-white duration-300'/>} title="Phones"/>
            <CategoryCard  icon={<CiMobile4 className='text-5xl group-hover:text-white duration-300'/>} title="Phones"/>
            <CategoryCard  icon={<CiMobile4 className='text-5xl group-hover:text-white duration-300'/>} title="Phones"/>

           </Flex>

        </Container>
    </section>
  )
}

export default BrowserByCategory