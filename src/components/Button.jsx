import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-4 px-12 text-[#fafafa] text-base font-pop font-medium rounded border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 ${className}`}>{text}</button>
  )
}

export default Button