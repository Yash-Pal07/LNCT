import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full h-fit  text-white border-white/20 px-[2vw] p-[1.5vw] flex justify-between absolute top-0 left-0 z-50  '>
      <div className='Icon w-[30%]'>
        <img className='w-[10vw]' src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Logo.png" alt="logo" />
      </div>
      <div className='Components flex flex-col gap-[.7vw] w-[70%] h-full '>
        <div>
          <ul className='flex gap-[1vw] justify-end text-[1vw] font-semibold'>
          <li className='hover:text-blue-700 cursor-pointer'>Alumni</li> |
          <li className='hover:text-blue-700 cursor-pointer'>Contact</li> |
          <li className='hover:text-blue-700 cursor-pointer'>Login</li>
          
        </ul>
        </div>
        <div>
          <ul className='flex gap-[1vw] justify-end text-[1.2vw] font-semibold'>
            <li className='hover:text-blue-700 cursor-pointer'>About</li> |
            <li className='hover:text-blue-700 cursor-pointer'>Collages</li> | 
            <li className='hover:text-blue-700 cursor-pointer'>Placements</li>|
            <li className='hover:text-blue-700 cursor-pointer'>Life@LNCT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
