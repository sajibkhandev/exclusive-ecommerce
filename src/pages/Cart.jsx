import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Button from '../components/Button'
import ProductOne from '../assets/product1.png'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeitem} from '../slices/addtocartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
  let [subtotal,setSubTotal]=useState('')
  let data = useSelector(state => state.addtocart.value)
  let dispatch=useDispatch()

  useEffect(()=>{
    let total=0
    data.map(item=>{
      total+=item.price*item.quantity
    })
    setSubTotal(total)
    
  },[data])


  return (
    <section className='pt-14 pb-35'>
      <Container>
        <p className='text-sm text-[#00000080] font-normal font-pop'>home / <span className='text-black'>cart</span></p>

        <div className='flex justify-between shadow-md rounded w-full py-6 pl-10 mb-10 mt-20'>
          <div className='w-55 '><p>Product</p></div>
          <div className='w-55 '><p>Price</p></div>
          <div className='w-55 '><p>Quantity</p></div>
          <div className='w-50 '><p>Subtotal</p></div>
        </div>



        {
          data.map(item => (
            <div className='flex justify-between shadow-md rounded w-full py-6 pl-10 mb-10'>
              <div className='w-55 flex items-center gap-x-3'>
                <div className='relative '>
                  <Image className="w-14 h-14 " src={item.image} />
                  <div className='flex justify-center items-center absolute -top-2 -left-3 w-5 h-5 bg-red-500 rounded-full'>
                    <RxCross2 onClick={()=>dispatch(removeitem(item))} className='text-xs text-white' />

                  </div>
                </div>
                <p >{item.title}</p>
              </div>
              <div className='w-55'><p>${item.price}</p></div>
              <div className='w-55 '>
                <div className='flex justify-center items-center gap-x-2 border border-[#00000066] w-[72px] h-[44px] rounded'>
                  <button onClick={()=>dispatch(decrement(item))}>-</button>
                  <button >{item.quantity}</button>
                  <button onClick={()=>dispatch(increment(item))}>+</button>
                </div>
              </div>
              <div className='w-50 '><p>${item.price*item.quantity}</p></div>
            </div>
          ))
        }




        <Flex className='justify-between'>
          <button className='py-4 px-12 border border-[#00000080] rounded text-base text-black font-medium font-pop'>Return To Shop</button>

          <button className='py-4 px-12 border border-[#00000080] rounded text-base text-black font-medium font-pop'>Update Cart</button>
        </Flex>

        <Flex className='justify-between items-start pt-20'>
          <Flex className='gap-x-6 '>
            <input className='py-4 px-6 border border-[#00000080] rounded text-base text-black font-medium font-pop placeholder:text-[#00000080]' type="text" placeholder='Coupon Code' />

            <Button text="Apply Coupon" />
          </Flex>

          <div className='w-117.5 border border-black rounded py-8 px-6'>
            <h4 className='text-xl text-black font-pop font-medium'>Cart Total</h4>

            <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4 pt-6'>
              <p className='text-base text-black font-pop font-normal'>Subtotal:</p>
              <p className='text-base text-black font-pop font-normal'>${subtotal}</p>
            </Flex>
            <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4'>
              <p className='text-base text-black font-pop font-normal'>Delivery:</p>
              <p className='text-base text-black font-pop font-normal'>$2</p>
            </Flex>
            <Flex className='justify-between border-b border-[#00000060] pb-4 mb-4'>
              <p className='text-base text-black font-pop font-normal'>Total::</p>
              <p className='text-base text-black font-pop font-normal'>${subtotal+2}</p>
            </Flex>

            <div className='text-center'>
              <Link to="/checkout">
                 <Button text="Procees to checkout" />
              </Link>
            </div>

          </div>

        </Flex>

      </Container>
    </section>
  )
}

export default Cart