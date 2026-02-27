import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CategoryItem from '../components/CategoryItem'
import BannerImage from '../assets/banner.jpg'


const Banner = () => {
  return (
    <section className='pt-10 pb-[140px]'>
        <Container>
           <Flex>
              <div className='w-3/12'>
              <ul className='flex flex-col gap-y-4'>
                <CategoryItem type={true} text="Woman’s Fashion" />
                <CategoryItem type={true} text="Men’s Fashion"  classNameIcon="ml-17"/>
                <CategoryItem type={false} text="Electronics"/>
                <CategoryItem type={false} text="Home & Lifestyle"/>
                <CategoryItem type={false} text="Medicine"/>
                <CategoryItem type={false} text="Sports & Outdoor"/>
                <CategoryItem type={false} text="Baby’s & Toys"/>
                <CategoryItem type={false} text="Groceries & Pets"/>
                <CategoryItem type={false} text="Health & Beauty"/>
                
                
               
                
               
              </ul>
              </div>
              <div className='w-9/12'>
              <Image  src={BannerImage}/>
              </div>
           </Flex>

        </Container>
    </section>
  )
}

export default Banner