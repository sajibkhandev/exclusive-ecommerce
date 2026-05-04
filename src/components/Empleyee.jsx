import React from 'react'
import Image from '../components/Image'
import { RxTwitterLogo } from 'react-icons/rx'
import { FaInstagram } from 'react-icons/fa'
import { RiLinkedinLine } from 'react-icons/ri'

const Empleyee = ({image,name,deg}) => {
  return (
    <div className='w-[370px] '>
        <div className='w-full h-[430px] bg-[#F5F5F5] flex justify-center items-center'>
            <Image src={image}/>
        </div>
        <div >
            <h3 className='text-[32px] text-black font-inter font-medium pt-8 pb-2'>{name}</h3>
            <p className='text-base text-black font-pop font-normal'>{deg}</p>

         <ul className='flex gap-x-4 pt-4 items-center'>
            <li><RxTwitterLogo className='text-lg'/></li>
            <li><FaInstagram className='text-lg'/></li>
            <li><RiLinkedinLine className='text-xl' /></li>
         </ul>
        </div>
        
    </div>
  )
}

export default Empleyee