import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoIosArrowDown } from "react-icons/io";


const Shop = () => {
  return (
   <section className='bg-[#000000] py-3'>
    <Container>
        <Flex>
            <div className='w-9/12 text-right'>
            <p className='text-sm text-primary font-normal font-pop'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-semibold pl-2 underline underline-offset-1'>ShopNow</span></p>

            </div>
            <div className='w-3/12 text-right'>
            <Flex className='justify-end gap-x-2 items-center'>
                <p className='text-sm text-primary font-normal font-pop'>English</p><IoIosArrowDown className='text-base text-primary '/>
            </Flex>

            </div>
        </Flex>
    </Container>

   </section>
  )
}

export default Shop