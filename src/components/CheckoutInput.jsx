import React from 'react'

const CheckoutInput = ({labeltext,className,type}) => {
    return (
        <label className={`inline-block text-base text-[#00000066] font-pop font-normal ${className}`} htmlFor="">{labeltext}{type && <span className='text-secondary'>*</span>}
            <input className='w-117.5 block py-2.5 px-3 text-black mt-2 bg-four rounded' type="text" />
        </label>
    )
}

export default CheckoutInput