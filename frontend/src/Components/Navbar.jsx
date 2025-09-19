import React from 'react'
import Logo from '../assets/Frontier Physicians (2).png'

const Navbar = () => {
  return (
    <nav className='flex gap-10 justify-around'>
        <div>
            <img className='w-30 h-30 rounded-4xl p-2' src={Logo} alt="" />
        </div>
        <div className=''>
            <ul className='flex gap-8 text-xl font-serif p-10  text-blue-950'>
                <li>Explore</li>
                <li>Library</li>
                <li>Practice</li>
                <li>Dasboard</li>
            </ul>
        </div>
        <div className='text-xl  gap-2 p-8'>
            <button className='border-2 rounded-xl w-25 h-8 bg-black text-white m-2'>Login</button>
            <button>SignUp</button>
        </div>
    </nav>
  )
}

export default Navbar