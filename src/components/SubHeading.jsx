import React from 'react'
import Flex from './Flex'

const SubHeading = ({text}) => {
  return (
    <Flex className='gap-x-4 items-center'>
        <div className='w-5 h-10 bg-secondary rounded'></div>
         <p className='text-base text-secondary font-semibold font-pop'>{text}</p>
    </Flex>

  )
}

export default SubHeading
