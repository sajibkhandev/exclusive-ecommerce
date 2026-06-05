import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'
import Button from '../components/Button'

const OurProduct = () => {
     let [allData,setAllData]=useState([])
     let [show,setShow]=useState(16)
  
      useEffect(()=>{
          fetch("https://dummyjson.com/products")
          .then(res=>res.json())
          .then(data=>setAllData(data.products))
  
      },[])

      let handleAllProducts=()=>{
        if(show>=allData.length){
            setShow(16)
        }else{

            setShow(allData.length)
        }
      }



  return (
    <section className='py-16 pb-42'>
        <Container>
            <SubHeading text="Our Products"/>
            <Heading text="Explore Our Products"/>

            <Flex className='gap-7.5 pt-15 flex-wrap gap-y-15'>

               {
                        allData.slice(8,show).map((item,index)=>(
                             <Card title={item.title} image={item.thumbnail} saleprice={item.price} regularprice="250" badge="new" />
                             

                        ))
                    }
                    
                </Flex>
               <div onClick={handleAllProducts} className='text-center pt-18'>
                 <Button text={show>=allData.length?"View 16 Product" :"View All Products"}/>
                 
               </div>
        </Container>
    </section>
  )
}

export default OurProduct