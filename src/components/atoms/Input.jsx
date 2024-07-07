import React from 'react'

export const Input = ({ type, placeholder, value, onChange}) => {
  return (
    <>
    <input 
    type={type} 
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className='boder rounded py-2 px-4 w-full'
    
    
    />
    </>
  )
}

