import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterLogo from '../assets/footerlogo.png'
import { LuSendHorizontal } from 'react-icons/lu'
import ListItem from '../components/ListItem'
import QR from '../assets/qr.png'
import App from '../assets/appstore.png'
import Play from '../assets/playstore.png'

const Footer = () => {
    return (
        <footer className='bg-black pt-20 pb-15'>
            <Container>
                <Flex>
                    <div className='w-3/12'>
                        <Image src={FooterLogo} alt="Footer logo"/>
                        <h3 className='text-primary text-xl font-medium font-pop py-6'>Subscribe</h3>
                        <p className='text-primary text-base font-normal font-pop'>Get 10% off your first order</p>
                        <div className='relative w-[217px] border border-white rounded mt-4'>
                            <input className='w-full py-3 pl-4 pr-10 text-white text-base placeholder:text-[#fafafa66] placeholder:text-base placeholder:font-normal placeholder:font-pop' type="text" placeholder='Enter your email'/>
                            <LuSendHorizontal className='absolute top-1/2 -translate-y-1/2 right-3 text-white text-xl'/>

                        </div>
                    </div>
                    
                    <div className='w-3/12'>
                    <strong className='text-xl text-primary font-pop font-medium'>Support</strong>
                    <ul className='flex flex-col gap-y-4 mt-6'>
                        <ListItem className="text-white after:bg-transparent" text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."/>
                        <ListItem className="text-white after:bg-transparent" text="exclusive@gmail.com"/>
                        <ListItem className="text-white after:bg-transparent" text="+88015-88888-9999"/>
                        
                    </ul>

                    </div>
                    <div className='w-2/12'>
                    <strong className='text-xl text-primary font-pop font-medium'>Account</strong>
                    <ul className='flex flex-col gap-y-4 mt-6'>
                        <ListItem className="text-white after:bg-transparent" text="My Account"/>
                        <ListItem className="text-white after:bg-transparent" text="Login / Register"/>
                        <ListItem className="text-white after:bg-transparent" text="Cart"/>
                        <ListItem className="text-white after:bg-transparent" text="Wishlist"/>
                        <ListItem className="text-white after:bg-transparent" text="Shop"/>
                    </ul>

                    </div>
                    <div className='w-2/12'>
                    <strong className='text-xl text-primary font-pop font-medium'>Quick Link</strong>
                    <ul className='flex flex-col gap-y-4 mt-6'>
                        <ListItem className="text-white after:bg-transparent" text="Privacy Policy"/>
                        <ListItem className="text-white after:bg-transparent" text="Terms Of Use"/>
                        <ListItem className="text-white after:bg-transparent" text="FAQ"/>
                        <ListItem className="text-white after:bg-transparent" text="Contact"/>
                       
                    </ul>

                    </div>
                    
                    <div className='w-2/12'>
                    <strong className='text-xl text-primary font-pop font-medium'>Download App</strong>
                    <p className='text-xs text-primary'>Save $3 with App New User Only</p>
                    <Flex>
                        <Image src={QR}/>
                        <div>
                            <Image src={App}/>
                            <Image className='mt-3' src={Play}/>
                        </div>
                    </Flex>

                     <ul>
                        <li><LuSendHorizontal/></li>
                        <li><LuSendHorizontal/></li>
                        <li><LuSendHorizontal/></li>
                        <li><LuSendHorizontal/></li>
                        <li><LuSendHorizontal/></li>
                     </ul>
                    </div>
                </Flex>

            </Container>
        </footer>
    )
}

export default Footer