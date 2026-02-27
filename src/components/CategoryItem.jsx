import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryItem = ({text,type,classNameli,classNameIcon}) => {
    console.log(type);
    
  return (
    <li className={`text-black text-base font-pop font-normal ${classNameli}`}>{text}  
    {type && <IoIosArrowForward className={`inline-block ml-10 text-lg ${classNameIcon}`}/> }
     </li>
  )
}

export default CategoryItem