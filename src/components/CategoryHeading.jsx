import React from 'react'

const CategoryHeading = ({title,className}) => {
  return (
    <h6 className={`text-baes text-black font-pop font-medium ${className}`}>{title}</h6>
  )
}

export default CategoryHeading