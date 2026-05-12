import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Error = () => {
  return (
    <section className='py-[130px] bg-[#F9F9F9] min-h-screen flex items-center'>
      <Container>
        
        {/* Breadcrumb */}
        <p className='text-sm text-[#7D7D7D] font-pop pb-20'>
          Home / <span className='text-black'>404 Error</span>
        </p>

        {/* Main Content */}
        <Flex className='flex-col items-center justify-center text-center'>
          
          <h1 className='text-[150px] font-bold text-black leading-none'>
            404 Not Found
          </h1>

          <p className='text-base text-[#7D7D7D] font-pop pt-6 pb-12'>
            Your visited page not found. You may go home page.
          </p>

          <Button
            text="Back to home page"
            className='bg-secondary px-10 py-4 text-white rounded'
          />
          
        </Flex>

      </Container>
    </section>
  )
}

export default Error