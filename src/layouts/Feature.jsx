import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'
import ImageOne from '../assets/feature.png'

const Feature = () => {
  return (
    <section>
        <Container>
            <SubHeading text="Featured"/>
            <Heading text="New Arrival"/>
            <div className='flex justify-between w-full h-[600px] '>
                <div className='w-[48%] h-full bg-blue-500'>
                    <Image className='w-full h-full' src={ImageOne}/>
                </div>
                <div className='w-[48%] h-full'>
                     <div className='w-full h-[46%] '>
                         <Image className='w-full h-full' src={ImageOne}/>
                     </div>
                     <div className='flex  mt-9 justify-between w-full h-[48%] '>
                         <div className='w-[46%] h-full'>
                             <Image className='w-full h-full' src={ImageOne}/>
                         </div>
                         <div className='w-[46%] h-full'>
                             <Image className='w-full h-full' src={ImageOne}/>
                         </div>
                     </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Feature