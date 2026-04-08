import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import ProductOne from '../assets/product1.png'
const Cart = () => {
  return (
    <section className='pt-14 pb-35'>
      <Container>
        <p className='text-sm text-[#00000080] font-normal font-pop'>home / <span className='text-black'>cart</span></p>

        <div className='flex shadow-md rounded w-full py-6 px-10 mb-10 mt-20'>
          <div className='w-3/12'><p>Product</p></div>
          <div className='w-3/12'><p>Price</p></div>
          <div className='w-3/12 '><p>Quantity</p></div>
          <div className='w-3/12 '><p>Subtotal</p></div>
        </div>
        <div className='flex shadow-md rounded w-full py-6 px-10 mb-10'>
          <div className='w-3/12'>
          <Image className="w-[40px] h-[40px] mr-5 inline-block" src={ProductOne}/>
          <p className='inline-block'>LCD Monitor</p>
          </div>
          <div className='w-3/12'><p>$650</p></div>
          <div className='w-3/12 '><p>
            <select name="" id="">
              <option value="">01</option>
              <option value="">01</option>
              <option value="">01</option>
            </select>
            </p></div>
          <div className='w-3/12 '><p>$650</p></div>
        </div>
        <div className='flex shadow-md rounded w-full py-6 px-10 mb-10'>
          <div className='w-3/12'>
          <Image className="w-[40px] h-[40px] mr-5 inline-block" src={ProductOne}/>
          <p className='inline-block'>LCD Monitor</p>
          </div>
          <div className='w-3/12'><p>$650</p></div>
          <div className='w-3/12 '><p>
            <select name="" id="">
              <option value="">01</option>
              <option value="">01</option>
              <option value="">01</option>
            </select>
            </p></div>
          <div className='w-3/12 '><p>$650</p></div>
        </div>
        
      </Container>
    </section>
  )
}

export default Cart