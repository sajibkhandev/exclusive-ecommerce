import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'

const Navber = () => {
    return (
        <nav>
            <Container>
                <Flex>
                    <div className='w-3/12 '>
                    <Image src={Logo} alt="Logo" />
                    </div>
                    <div className='w-6/12 '>
                    <ul className='flex gap-x-12'>
                        <ListItem  text="Home"/>
                        <ListItem  text="Contact"/>
                        <ListItem  text="About"/>
                        <ListItem  text="Sign Up"/>
                        
                       
                    </ul>
                    </div>
                    <div className='w-3/12 '>button</div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navber