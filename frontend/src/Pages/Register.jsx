import React from 'react'


function OnRegister()
{
   
}

const Register = () => {
  return (
    <div className='flex flex-col gap-4'> 
        <input className='border w-50'
        type="text"
        placeholder='Enter your name' 
        
        />
        <input 
        type="text" 
        className='border w-50' 
        placeholder='Enter your email' />
        <input 
        type="text" 
        className='border w-50' 
        placeholder='Enter your password' />
        <button className='border text-white bg-black font-bold w-20 hover:bg-white hover:text-black ' onClick={OnRegister}>Register</button>
    </div>
  )
}

export default Register