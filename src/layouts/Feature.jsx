import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'
import ImageOne from '../assets/feature.png'
import ImageTwo from '../assets/feature2.png'
import ImageThree from '../assets/feature3.png'
import ImageFour from '../assets/feature4.png'

const Feature = () => {
    return (
        <section>
            <Container>
                <SubHeading text="Featured" />
                <Heading text="New Arrival" />
                <div className="mt-15 grid grid-cols-4 grid-rows-2 gap-8">

                    <div className="col-span-2 row-span-2"><Image className="w-full h-full" src={ImageOne} /></div>
                    <div className="col-span-2"><Image className="w-full h-full" src={ImageTwo} /></div>
                    <div><Image className="w-full h-full" src={ImageThree} /></div>
                    <div><Image className="w-full h-full" src={ImageFour} /></div>

                </div>
            </Container>
        </section>
    )
}

export default Feature