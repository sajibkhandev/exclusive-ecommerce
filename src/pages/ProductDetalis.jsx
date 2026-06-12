import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'

import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from 'react-icons/io'
import { LuCar } from 'react-icons/lu'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'
import ProductTwo from '../assets/product2.png'
import SubImage1 from '../assets/sub-image1.png'
import SubImage2 from '../assets/sub-image2.png'
import SubImage3 from '../assets/sub-image3.png'
import SubImage4 from '../assets/sub-image4.png'
import { useParams } from 'react-router-dom'

const ProductDetalis = () => {
  let [alldata, setAllData] = useState([])

  let param=useParams()
  // console.log(param.id);


  useEffect(() => {
  
          fetch(`https://dummyjson.com/products/${param.id}`)
              .then(res => res.json())
              .then(data => setAllData(data))
  
  
      }, [param.id])


      useEffect(()=>{
        window.scrollTo({top:0})

      },[])



  const images = [
    SubImage1,
    SubImage2,
    SubImage3,
    SubImage4,

  ];
  let [color, setColor] = useState("")
  let [size, setSize] = useState("")
  const [mainImage, setMainImage] = useState(images[0]);


  let handleColor = (name) => {
    setColor(name);
  }
  let handleSize = (name) => {
    setSize(name);
  }

  return (
    <section className='pt-20'>
      <Container>
        <p>Account / Gaming /Havic HV G-92 Gamepad</p>

        <Flex className='pt-20 pb-35'>



          <div className="w-8/12 mr-18">
            <Flex className="justify-between">

              {/* Sub Images */}
              <Flex className="flex-col gap-y-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(img)}
                    className="flex justify-center items-center w-44 h-34.5 bg-four rounded cursor-pointer border hover:border-black"
                  >
                    <Image
                      preview={false}
                      src={alldata.thumbnail}
                      className="object-cover"
                    />
                  </div>
                ))}
              </Flex>

              {/* Main Image */}
              <div className="flex justify-center items-center rounded w-[500px] h-[600px] bg-four">
                <Image className="w-[400px] h-[300px]"
                  preview={false}
                  src={alldata.thumbnail}
                />
              </div>
            </Flex>
          </div>

          
          <div className='w-4/12'>
            <h3 className='text-2xl text-black font-inter font-semibold pb-4'>{alldata.title}</h3>

            <Flex className='items-center gap-x-3'>
              <ul className='flex gap-x-1'>
                <li><FaStar className='text-third text-sm' /></li>
                <li><FaStar className='text-third text-sm' /></li>
                <li><FaStar className='text-third text-sm' /></li>
                <li><FaStar className='text-third text-sm' /></li>
                <li><FaStar className=' text-sm text-black/25' /></li>
              </ul>
              <p className='text-sm text-black/50 font-pop font-normal'>(150 Reviews) | </p>
              <p className='text-sm text-[#00FF66] font-pop font-normal'>In Stock</p>
            </Flex>
            <h5 className='text-2xl text-black font-inter font-normal pt-4 pb-6'>${alldata.price}</h5>
            <p className='text-sm text-black font-pop font-normal border-b border-black/50 pb-6'>{alldata.description}</p>



            <Flex className='gap-x-4 items-center py-6'>
              <p className='text-xl text-black font-normal font-pop cursor-pointer'>Colours: </p>


              <div onClick={() => handleColor("blue")} className={`flex justify-center items-center w-6 h-6 rounded-full ${color == "blue" ? "border-black border-2" : "bg-blue-500"}`}>
                <div className={`${color == "blue" ? "w-4 h-4" : "w-full h-full"} rounded-full bg-blue-500`}></div>
              </div>

              <div onClick={() => handleColor("red")} className={`flex justify-center items-center w-6 h-6 rounded-full ${color == "red" ? "border-black border-2" : "bg-red-500"}`}>
                <div className={`${color == "red" ? "w-4 h-4" : "w-full h-full"} rounded-full bg-red-500`}></div>
              </div>

              <div onClick={() => handleColor("green")} className={`flex justify-center items-center w-6 h-6 rounded-full ${color == "green" ? "border-black border-2" : "bg-green-500"}`}>
                <div className={`${color == "green" ? "w-4 h-4" : "w-full h-full"} rounded-full bg-green-500`}></div>
              </div>





            </Flex>

            <Flex className='gap-x-6 items-center'>
              <p className='text-xl text-black font-inter font-normal'>Size: </p>

              <Flex className='gap-x-4'>

                <div onClick={() => handleSize("XS")} className={`flex justify-center items-center w-8 h-8  rounded ${size == "XS" ? "bg-secondary" : "border border-black/50"}`}>
                  <p className={`cursor-pointer text-sm  font-inter font-medium ${size == "XS" ? "text-white" : "text-black"}`}>XS</p>
                </div>

                <div onClick={() => handleSize("S")} className={`flex justify-center items-center w-8 h-8  rounded ${size == "S" ? "bg-secondary" : "border border-black/50"}`}>
                  <p className={`cursor-pointer text-sm  font-inter font-medium ${size == "S" ? "text-white" : "text-black"}`}>S</p>
                </div>
                <div onClick={() => handleSize("M")} className={`flex justify-center items-center w-8 h-8  rounded ${size == "M" ? "bg-secondary" : "border border-black/50"}`}>
                  <p className={`cursor-pointer text-sm  font-inter font-medium ${size == "M" ? "text-white" : "text-black"}`}>M</p>
                </div>

                <div onClick={() => handleSize("L")} className={`flex justify-center items-center w-8 h-8  rounded ${size == "L" ? "bg-secondary" : "border border-black/50"}`}>
                  <p className={`cursor-pointer text-sm  font-inter font-medium ${size == "L" ? "text-white" : "text-black"}`}>L</p>
                </div>
                <div onClick={() => handleSize("XL")} className={`flex justify-center items-center w-8 h-8  rounded ${size == "XL" ? "bg-secondary" : "border border-black/50"}`}>
                  <p className={`cursor-pointer text-sm  font-inter font-medium ${size == "XL" ? "text-white" : "text-black"}`}>XL</p>
                </div>





              </Flex>
            </Flex>


            <Flex className='items-center justify-between'>
              <div className='flex justify-between items-center border border-black/50 rounded w-32 h-10 my-10'>
                <div className='group w-1/4 h-full flex justify-center items-center border-r border-black hover:bg-secondary hover:border-transparent duration-300'><FaMinus className='group-hover:text-white duration-300' /></div>
                <div className='w-2/4 h-full flex justify-center items-center text-base'>2</div>
                <div className='group w-1/4 h-full flex justify-center items-center bg-secondary border-l border-transparent hover:bg-transparent  hover:border-black/50 duration-300 '><FaPlus className='text-white group-hover:text-black duration-300' /></div>

              </div>

              <Button className='py-2!' text="Buy Now" />

              <div className='flex justify-center items-center w-10 h-10 border border-black/50 rounded'>
                <p className='text-sm text-black font-inter font-medium'>
                  <IoMdHeartEmpty className='text-2xl' />

                </p>
              </div>
            </Flex>

            <div className='border border-black/50 rounded'>
              <Flex className='pt-6 pl-4 pb-4 items-center gap-x-4 w-full  border-b border-black/50'>
                <LuCar className='text-4xl' />
                <div>
                  <h5 className='text-base text-black font-medium font-pop'>Free Delivery</h5>
                  <p className='text-xs text-black font-normal font-pop'>Enter your postal code for Delivery Availability</p>
                </div>
              </Flex>
              <Flex className='pt-6 pl-4 pb-4 items-center gap-x-4 w-full '>
                <LuCar className='text-4xl' />
                <div>
                  <h5 className='text-base text-black font-medium font-pop'>Free Delivery</h5>
                  <p className='text-xs text-black font-normal font-pop'>Enter your postal code for Delivery Availability</p>
                </div>
              </Flex>
            </div>

          </div>
        </Flex>


     {/* part two */}
        <SubHeading text="Related Item" />
        <Flex className='justify-between pt-10 pb-15'>
          <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
          <Card title="Gamepad" image={ProductTwo} saleprice="200" regularprice="250" badge="new" />
          <Card title="HAVIT HV-G92 Gamepad" image={ProductOne} saleprice="200" regularprice="250" badge="new" />
          <Card title="HAVIT HV-G92 Gamepad" image={ProductTwo} saleprice="200" regularprice="250" badge="new" />

        </Flex>



      </Container>
    </section>
  )
}

export default ProductDetalis