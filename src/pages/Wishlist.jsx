import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import WishListCard from '../components/WishListCard'
import SubHeading from '../components/SubHeading'
import Card from '../components/Card'
import CardImage from '../assets/product1.png'
import CardImageTwo from '../assets/product2.png'

const Wishlist = () => {
  return (
    <section className='pt-20 pb-35'>
      <Container>
        <Flex className='justify-between items-center pb-15'>
          <p className='text-xl text-black font-pop font-normal'>Wishlist (4)</p>
          <div className='border border-[#00000080] py-6 px-12 rounded'>
            <p className='text-base text-black font-medium font-pop'>Move All To Bag</p>
          </div>


        </Flex>


        <Flex className='justify-between'>
          <WishListCard image={CardImage} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <WishListCard image={CardImageTwo} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <WishListCard image={CardImage} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <WishListCard image={CardImageTwo} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
         
        </Flex>


         <Flex className='justify-between items-center pt-15 pb-20'>
          <SubHeading text="Just For You"/>
          <div className='border border-[#00000080] py-6 px-12 rounded'>
            <p className='text-base text-black font-medium font-pop'>See All</p>
          </div>
        </Flex>


        <Flex className='justify-between'>

          <Card image={CardImage} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <Card image={CardImageTwo} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <Card image={CardImageTwo} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
          <Card image={CardImage} title="Gucci duffle bag"  saleprice="200" regularprice="250"/>
        
         
        </Flex>



        

      </Container>
    </section>
  )
}

export default Wishlist