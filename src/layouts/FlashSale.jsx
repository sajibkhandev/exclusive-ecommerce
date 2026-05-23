import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Card from '../components/Card'
import Button from '../components/Button'


const FlashSale = () => {
    let [alldata,setAllData]=useState([])


    useEffect( ()=>{

        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setAllData(data.products))


    },[])

    
    

    
    
    
    

    return (
        <section className='mb-20'>
            <Container>
                <SubHeading text="Today’s" />
                <Heading text="Flash Sales" />

                <Flex className='justify-between flex-wrap pt-10 pb-15'>
                    {
                        alldata.map((item,index)=>(
                            index<4 &&
                            <Card title={item.title} image={item.thumbnail} saleprice={item.price} regularprice={"500"} badge="new" />

                        ))

                    }
                    
                   

                </Flex>
               <div className='text-center border-b border-[#0000004d] pb-15'>
                 <Button text="View All Products"/>
               </div>
               

            </Container>
        </section>
    )
}

export default FlashSale