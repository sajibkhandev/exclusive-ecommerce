import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`relative inline-block text-[#000000] text-base font-pop font-normal cursor-pointer after:w-0 after:h-px after:bg-[#00000080] after:absolute after:left-0 after:bottom-0 after:content-[""]  hover:after:w-full after:duration-300 ${className}`}>{text}</li>
  )
}

export default ListItem