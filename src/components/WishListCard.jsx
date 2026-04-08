import React from 'react'
import Image from './Image'

import { IoCartOutline } from 'react-icons/io5'
import { RiDeleteBinLine } from 'react-icons/ri'

const WishListCard = ({image,title,saleprice,regularprice}) => {
  return (
    <div className='w-67.5 h-80.5 rounded'>
        <div className='relative flex justify-center items-center w-full h-62.5 bg-[#F5F5F5]'>
              <Image src={image} alt="Product One"/>

              <div className='absolute top-3 right-3 flex justify-center items-center rounded-full bg-[#fafafa] h-8.5 w-8.5'><RiDeleteBinLine  className='text-black'/></div>

               <div className=' absolute bottom-0 left-0 w-full py-2 bg-black flex justify-center items-center '><p className='text-xs text-white font-medium font-pop'><IoCartOutline className='inline-block text-lg mr-1'/>Add To Cart</p></div>
        </div>
        <div>
            <h3 className='text-base text-[#000000] font-pop font-medium pt-4 pb-2'>{title}</h3>
            <p className='text-base text-secondary font-medium font-pop'>${saleprice}<span className='text-[#00000080] pl-3'><del className='text-[#00000080]'>${regularprice}</del></span></p>
        </div>
    </div>
  )
}

export default WishListCard