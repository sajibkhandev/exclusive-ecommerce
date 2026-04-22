import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CheckoutInput from '../components/CheckoutInput'
import { IoMdCheckmark } from 'react-icons/io'
import Button from '../components/Button'
import Product from '../assets/product1.png'

const Checkout = () => {
  return (
    <section className='pt-20 pb-35'>
      <Container>
        <p>Account > My Account > Product > View Cart > CheckOut</p>

        <Flex className="items-center justify-between">
          <div className='left-part pt-20'>
            <Heading className="font-medium!" text="Billing Details" />

            <CheckoutInput className="mt-12 mb-8 " labeltext="First Name" type={true} />
            <CheckoutInput className="mb-8 " labeltext="Company Name" type={false} />
            <CheckoutInput className=" mb-8 " labeltext="Street Address" type={true} />
            <CheckoutInput className=" mb-8 " labeltext="Apartment, floor, etc. (optional)" type={false} />
            <CheckoutInput className=" mb-8 " labeltext="Town/City" type={true} />
            <CheckoutInput className=" mb-8 " labeltext="Phone Number" type={true} />
            <CheckoutInput className=" mb-8 " labeltext="Email Address" type={true} />



            <Flex className='gap-x-4'>
              <div className='flex justify-center items-center w-6 h-6 bg-red-500 rounded'>
                <IoMdCheckmark className='text-white text-xl' />

              </div>
              <p className='text-black text-base font-pop font-medium'>Save this information for faster check-out next time</p>


            </Flex>






          </div>





          <div className='right-part'>
            <div className='w-131.75 pr-25'>

              <Flex className='justify-between items-center pb-12'>
                <Flex className='gap-x-4 items-center'>
                  <Image className='w-8' src={Product} />
                  <p className='text-base text-black font-pop font-normal'>LCD Monitor</p>
                </Flex>
                <p className='text-base text-black font-pop font-normal'>$650</p>
              </Flex>

              <Flex className='justify-between items-center'>
                <Flex className='gap-x-4 items-center'>
                  <Image className='w-8' src={Product} />
                  <p className='text-base text-black font-pop font-normal'>H1 Gamepad</p>
                </Flex>
                <p className='text-base text-black font-pop font-normal'>$1100</p>
              </Flex>

              <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4 pt-6'>
                <p className='text-base text-black font-pop font-normal'>Subtotal:</p>
                <p className='text-base text-black font-pop font-normal'>$1750</p>
              </Flex>
              <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4'>
                <p className='text-base text-black font-pop font-normal'>Shipping::</p>
                <p className='text-base text-black font-pop font-normal'>Free</p>
              </Flex>
              <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4'>
                <p className='text-base text-black font-pop font-normal'>Total::</p>
                <p className='text-base text-black font-pop font-normal'>$1750</p>
              </Flex>


              


            </div>

            
            <Flex className='gap-x-6 pt-8 pb-12'>
                <input className='py-4 px-6 border border-[#00000080] rounded text-base text-black font-medium font-pop placeholder:text-[#00000080]' type="text" placeholder='Coupon Code' />

                <Button text="Apply Coupon" />
              </Flex>


              <Button text="Place Order" />




          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Checkout