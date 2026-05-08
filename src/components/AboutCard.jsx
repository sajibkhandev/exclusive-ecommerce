import React from 'react'
import { RxHome } from 'react-icons/rx'

const AboutCard = ({title,text,icon}) => {
  return (
     <div className='group flex flex-col items-center justify-center w-[270px] h-[230px] border border-[#0000004d] rounded hover:bg-secondary hover:border-transparent duration-300'>
           <div className='w-20 h-20 bg-[#2F2E30] rounded-full flex justify-center items-center group-hover:bg-[#ffffff4d] duration-300'>
            <div className='w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center group-hover:bg-white duration-300'>
              {icon}

            </div>

           </div>
          <h3 className='pt-6 pb-3 text-4xl text-black font-inter font-bold group-hover:text-white duration-300'>{title}</h3>
          <p className='text-base text-black font-normal font-pop group-hover:text-white duration-300'>{text}</p>
        </div>

  )
}

export default AboutCard