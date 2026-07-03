import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import Logo from '../assets/logo.png'
import ProductOne from '../assets/product1.png'
import ListItem from '../components/ListItem'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from 'react-icons/go'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux'



const Navber = () => {
    let [alldata, setAllData] = useState([])
    let [search, setSearch] = useState([])
    let [input, setInput] = useState("")
    let [open, setOpne] = useState(false)

    let data = useSelector(state => state.addtocart.value)





    let handleInput = (e) => {
        setInput(e.target.value);
        let search = alldata.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearch(search);
    }
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setAllData(data.products))


    }, [])

    let handleAddToCart = () => {
        setOpne(!open)

    }



    return (
        <nav className='pt-10 pb-4 border-b border-[#0000004d]'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-3/12 '>
                        <Link to='/'><Image src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className='w-5/12 '>
                        <ul className='flex gap-x-12'>
                            <Link to="/">
                                <ListItem text="Home" />
                            </Link>
                            <Link to='/contact'>
                                <ListItem text="Contact" />
                            </Link>
                            <Link to='/about'>
                                <ListItem text="About" />
                            </Link>
                            <Link to='/signup'>
                                <ListItem text="Sign Up" />
                            </Link>


                        </ul>
                    </div>
                    <div className='relative w-4/12 flex gap-x-10 items-center'>
                        <div className='relative w-[243px] bg-[#F5F5F5] rounded'>

                            <input value={input} onChange={handleInput} className='w-full py-2.5 pl-5 pr-10  text-sm placeholder:text-[#00000080] placeholder:text-xs placeholder:font-normal placeholder:font-pop' type="text" placeholder='What are you looking for?' />
                            <FiSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-xl' />
                            {
                                input.length > 0 &&
                                search.length > 0 &&
                                <div className='z-50 absolute top-[50px] left-1/2 -translate-x-1/2 w-[150%] py-5
                            px-10 bg-[#F5F5F5] rounded'>
                                    {
                                        search.map(item => (
                                            <Link onClick={() => setInput("")} to={`productdetalis/${item.id}`}>
                                                <li className='list-none py-1 cursor-pointer'>{item.title}</li>
                                            </Link>
                                        ))
                                    }
                                </div>
                            }

                        </div>
                        <GoHeart className='text-2xl' />
                        <IoCartOutline onClick={handleAddToCart} className='text-[26px]' />
                        {
                            open &&
                            <div className=' absolute top-[45px] left-0 rounded-md w-full h-[84vh] bg-[#F5F5F5] z-50'>
                                <div className='flex items-end gap-x-10'>
                                    <button
                                        onClick={() => setOpne(false)}

                                        className="mt-3 ml-3 w-7 h-7 border-2 border-red-500 flex justify-center items-center rounded-full p-1 text-red-500 transition-all duration-200"
                                        aria-label="Remove item"
                                    >
                                        <IoClose size={15} />
                                    </button>
                                    <h3 className='text-base font-normal'>All Cart Here :</h3>
                                </div>
                                <ul className='flex  px-3 pt-3 pb-5 text-sm text-black font-semibold border-b border-black/30'>
                                    <li className='w-20'>Name:</li>
                                    <li className='w-20'>Image:</li>
                                    <li className='w-20'>Quantity:</li>
                                    <li className='w-20 text-center'>Price:</li>
                                    <li className='w-20'>SubTotal:</li>
                                </ul>
                                <div className='overflow-y-scroll h-[58vh]'>

                                    {
                                        data.map(item => (
                                            <ul className='flex items-center  px-2 py-5 text-xs text-black/70 font-semibold border-b border-black/30'>
                                                <li className='w-20'>{item.title}</li>
                                                <li className='w-20 text-center '>
                                                    <Image className='w-8 mx-auto' src={item.image} />
                                                </li>
                                                <li className='w-20 flex justify-center gap-x-3 text-center border border-black/30 rounded py-1  '>
                                                    <button>-</button>
                                                    <button>{item.quantity}</button>
                                                    <button>+</button>
                                                </li>
                                                <li className='w-20 text-center'>{item.price}$</li>
                                                <li className='w-20 text-center'>{item.price*item.quantity}$</li>
                                            </ul>

                                        ))
                                    }




                                </div>

                                <h1 className='mt-4 text-right text-2xl pr-5 font-semibold'>Total 400$</h1>

                                <div className=' mt-2 mb-3 flex gap-x-6 justify-center'>
                                    <Button className='py-2! px-4! text-sm!' text="Checkout" />
                                    <Button className='py-2! px-4! text-sm!' text="View Cart" />
                                </div>

                            </div>
                        }

                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navber