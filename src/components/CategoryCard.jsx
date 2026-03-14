import React from 'react'


const CategoryCard = ({className,icon,title}) => {
    return (
        <div className={`group flex flex-col justify-center items-center gap-y-4 w-42.5 h-36.25 border border-[#0000004d] hover:border-transparent rounded hover:bg-secondary duration-300 ${className}`}>
              {icon}
            <p className='text-base text-black font-pop font-normal group-hover:text-white duration-300'>{title}</p>

        </div>
    )
}

export default CategoryCard