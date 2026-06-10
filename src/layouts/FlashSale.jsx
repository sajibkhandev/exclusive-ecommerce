import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Card from '../components/Card'
import Button from '../components/Button'


const FlashSale = () => {
    let [alldata, setAllData] = useState([])
    let [show, setShow] = useState(4)


    useEffect(() => {

        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setAllData(data.products))


    }, [])

    let handleAllProducts = () => {

       setShow(show+4)

    }











    return (
        <section className='mb-20'>
            <Container>
                <SubHeading text="Today’s" />
                <Heading text="Flash Sales" />

                <Flex className='gap-7.5 flex-wrap pt-10 pb-15'>
                    {
                        alldata.slice(0, show).map((item, index) => (

                            <Card id={item.id} title={item.title} image={item.thumbnail} saleprice={item.price} regularprice={"500"} badge="new" />

                        ))

                    }



                </Flex>
              {
                show<alldata.length 
                ?
                  <div onClick={handleAllProducts} className='text-center border-b border-[#0000004d] pb-15'>
                    <Button text="View More Products" />

                </div>
                :
                <p className='text-2xl text-center text-red-400'>No More Products</p>
              }


            </Container>
        </section>
    )
}

export default FlashSale