import React from 'react'

const CategoryText = ({text,className}) => {
  return (
     <p className={`text-base text-[#00000080] font-normal font-pop hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</p>
  )
}

export default CategoryText