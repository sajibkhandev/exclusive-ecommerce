import React from 'react'
import Image from './Image'
import Product1 from '../assets/product1.png'
import { FaStar } from "react-icons/fa6";
import { GoHeart } from 'react-icons/go';
import { FiEye } from 'react-icons/fi';


const Card = ({title,image,saleprice,regularprice,badge}) => {
  return (
    <div className='w-67.5 h-87.5 '>
        <div className='group relative overflow-hidden w-full h-62.5 flex justify-center items-center bg-[#F5F5F5] rounded' >
            <Image src={image} alt="Product One"/>

            <div className='absolute top-3 left-3 flex justify-center items-center rounded bg-secondary h-6.5 w-13.75 text-primary text-xs font-pop font-normal '>
                {badge}
            </div>

            <div className='absolute top-3 right-3 flex justify-center items-center rounded-full bg-[#fafafa] h-8.5 w-8.5'><GoHeart className='text-black'/></div>

            <div className='absolute top-13 right-3 flex justify-center items-center rounded-full bg-[#fafafa] h-8.5 w-8.5'><FiEye className='text-black'/></div>

            <div className='rounded-b absolute -bottom-[20%] group-hover:bottom-0 left-0 w-full py-2 bg-black flex justify-center items-center duration-300 '><p className='text-base text-white font-medium font-pop'>Add To Cart</p></div>


        </div>
        <div>
            <h3 className='text-base text-[#000000] font-pop font-medium pt-4 pb-2'>{title}</h3>
            <p className='text-base text-secondary font-medium font-pop'>${saleprice}<span className='text-[#00000080] pl-3'><del className='text-[#00000080]'>${regularprice}</del></span></p>

            <ul className='flex items-center space-x-1 pt-2'>
                <li><FaStar className='text-third' /></li>
                <li><FaStar  className='text-third'/></li>
                <li><FaStar  className='text-third'/></li>
                <li><FaStar  className='text-third'/></li>
                <li><FaStar  className='text-third'/></li>
                <p className='pl-1 text-sm text-[#00000080] font-pop font-semibold'>(88)</p>
            </ul>
        </div>

    </div>
  )
}

export default Card