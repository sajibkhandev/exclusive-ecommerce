import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'


const OtherCard = ({image,title,des}) => {
  return (
    <Flex className='flex-col justify-center items-center'>
        <Image src={image}/>
        <h3 className='pt-6 pb-2 text-xl text-black font-pop font-semibold'>{title}</h3>
        <p className='text-sm text-black font-pop font-normal'>{des}</p>
    </Flex>
  )
}

export default OtherCard