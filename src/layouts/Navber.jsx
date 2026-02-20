import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from 'react-icons/go'
import { IoCartOutline } from 'react-icons/io5'

const Navber = () => {
    return (
        <nav className='pt-10 pb-4 border-b border-[#0000004d]'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-3/12 '>
                    <Image src={Logo} alt="Logo" />
                    </div>
                    <div className='w-5/12 '>
                    <ul className='flex gap-x-12'>
                        <ListItem  text="Home"/>
                        <ListItem  text="Contact"/>
                        <ListItem  text="About"/>
                        <ListItem  text="Sign Up"/>
                        
                       
                    </ul>
                    </div>
                    <div className='w-4/12 flex gap-x-10 items-center'>
                       <div className='relative w-[243px] bg-[#F5F5F5] rounded'>
                        <input className='w-full py-2.5 pl-5 pr-10  text-sm placeholder:text-[#00000080] placeholder:text-xs placeholder:font-normal placeholder:font-pop' type="text" placeholder='What are you looking for?'/>
                        <FiSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-xl'/>
                       </div>
                      <GoHeart className='text-2xl'/>
                       <IoCartOutline className='text-[26px]'/>

                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navber