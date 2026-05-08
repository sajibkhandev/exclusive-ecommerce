import React from 'react'

const AccountInputFiled = ({labaltext,labalclassName,inputclassName,htmlForAndId,placeholder,onChange,value}) => {
  return (
    <label className={`text-black text-base font-pop font-normal w-[47%] block  ${labalclassName}`} htmlFor={htmlForAndId}>{labaltext}
                  <input onChange={onChange} value={value} id={htmlForAndId} className={`w-full block  mt-2 bg-[#F5F5F5] py-3 px-4 rounded ${inputclassName}`} type="text" placeholder={placeholder}/>

              </label>
             
  )
}

export default AccountInputFiled