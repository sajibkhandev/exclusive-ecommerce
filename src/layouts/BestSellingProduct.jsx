import React, { use, useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'

const BestSellingProduct = () => {
    let [allData,setAllData]=useState([])
    let [show,setShow]=useState(4)

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setAllData(data.products))

    },[])

   





    return (
        <section className='pb-[140px]'>
            <Container>
                <Flex className='justify-between items-end'>
                    <div>
                        <SubHeading text="This Month" />
                        <Heading text="Best Selling Products" />
                    </div>
                    <div onClick={()=>setShow(show+4)}>
                        <Button  text="View All" />
                    </div>
                </Flex>


                <Flex className='flex-wrap gap-7.5 pt-15'>

                    {
                        allData.slice(0,show).map((item,index)=>(
                           
                             <Card title={item.title} image={item.thumbnail} saleprice={item.price} regularprice="250" badge="new" />
                             

                        ))
                    }
                   
                    
                </Flex>
            </Container>
        </section>
    )
}

export default BestSellingProduct