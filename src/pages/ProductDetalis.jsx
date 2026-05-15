import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import ProductMainImage from '../assets/productmainimage.png'
import ProductSubImage from '../assets/productsubimage.png'
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const ProductDetalis = () => {
  let [payment,setPayment]=useState("")
  return (
    <section>
      <Container>
        <p>Account / Gaming /Havic HV G-92 Gamepad</p>

      <Flex className='pt-20 pb-35'>
          <div className='w-8/12 mr-18'>
            <Flex className='justify-between'>
              <Flex className='flex-col gap-y-4'>
               <div className='flex justify-center items-center w-44 h-34.5 bg-four rounded'>
                 <Image  src={ProductSubImage}/>
               </div>
               <div className='flex justify-center items-center w-44 h-34.5 bg-four rounded'>
                 <Image  src={ProductSubImage}/>
               </div>
               <div className='flex justify-center items-center w-44 h-34.5 bg-four rounded'>
                 <Image  src={ProductSubImage}/>
               </div>
               <div className='flex justify-center items-center w-44 h-34.5 bg-four rounded'>
                 <Image  src={ProductSubImage}/>
               </div>
              
              </Flex>
              <div className='flex justify-center items-center rounded w-[500px] h-[600px] bg-four'>
                <Image src={ProductMainImage}/>
              </div>
            </Flex>

          </div>
          <div className='w-4/12'>
            <h3 className='text-2xl text-black font-inter font-semibold pb-4'>Havic HV G-92 Gamepad</h3>

            <Flex className='items-center gap-x-3'>
              <ul className='flex gap-x-1'>
                <li><FaStar  className='text-third text-sm'/></li>
                <li><FaStar  className='text-third text-sm'/></li>
                <li><FaStar  className='text-third text-sm'/></li>
                <li><FaStar  className='text-third text-sm'/></li>
                <li><FaStar className=' text-sm text-black/25'/></li>
              </ul>
              <p className='text-sm text-black/50 font-pop font-normal'>(150 Reviews) | </p>
              <p className='text-sm text-[#00FF66] font-pop font-normal'>In Stock</p>
            </Flex>
            <h5 className='text-2xl text-black font-inter font-normal pt-4 pb-6'>$192.00</h5>
            <p className='text-sm text-black font-pop font-normal border-b border-black/50 pb-6'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>



            <Flex className='gap-x-4 items-center py-6'>
              <p onClick={()=>setPayment("bank")} className='text-xl text-black font-normal font-pop cursor-pointer'>Colours: </p>

                  <div onClick={()=>setPayment("color")} className='flex justify-center items-center w-6 h-6 border-2 border-black rounded-full'>
                      <div className={`w-3.5 h-3.5 ${payment=="color"? "bg-black":"bg-transparent"} rounded-full`}></div>
                </div>
                  

                
                </Flex>

            <Flex className='gap-x-6 items-center'>
                <p className='text-xl text-black font-inter font-normal'>Size: </p>

              <Flex className='gap-x-4'>
                  <div className='flex justify-center items-center w-8 h-8 border border-black/50 rounded'>
                  <p className='text-sm text-black font-inter font-medium'>XL</p>
                </div>
                <div className='flex justify-center items-center w-8 h-8 border border-black/50 rounded'>
                  <p className='text-sm text-black font-inter font-medium'>XL</p>
                </div>
                <div className='flex justify-center items-center w-8 h-8 border border-black/50 rounded'>
                  <p className='text-sm text-black font-inter font-medium'>XL</p>
                </div>
                <div className='flex justify-center items-center w-8 h-8 border border-black/50 rounded'>
                  <p className='text-sm text-black font-inter font-medium'>XL</p>
                </div>
                <div className='flex justify-center items-center w-8 h-8 border border-black/50 rounded'>
                  <p className='text-sm text-black font-inter font-medium'>XL</p>
                </div>
          
              </Flex>
            </Flex> 


            <Flex className='items-center justify-between'>
              <div className='flex justify-between items-center   border border-black/50 w-40 h-10 my-10 px-2'>
              <p><FaMinus className='inline-black'/></p>
              <p>2</p>
              <p><FaPlus className='inline-black'/></p>
              </div> 

              <Button text="Buy Now"/>
            </Flex>
          
          
          
          
          
          
          
          
          
          
          
          </div>
      </Flex>

      </Container>
    </section>
  )
}

export default ProductDetalis