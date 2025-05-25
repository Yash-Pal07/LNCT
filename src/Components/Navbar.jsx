import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full h-fit text-white border-white/20 px-[2vw] p-[1.5vw] flex justify-between absolute top-0 left-0 z-50  '>
      <div className='Icon w-[30%] flex gap-10'>
        <img className='w-[10vw]' src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Logo.png" alt="logo" />
        <img className='w-[5vw] ' src="https://lnct.ac.in/wp-content/uploads/2021/04/NBA-LOGO-2.png" alt="logo" />
      </div>
      <div className='Components flex flex-col gap-[.7vw] w-[70%] h-full'>
        <div>
          <ul className='flex gap-[1vw] justify-end text-[1vw] font-semibold'>
          <li className='hover:text-blue-700 cursor-pointer'>Alumni</li> |
          <li className='hover:text-blue-700 cursor-pointer'>Contact</li> |
          <li className='hover:text-blue-700 cursor-pointer'>Login</li> |
          <button className='bg-green-700 rounded-[2vw] hover:bg-green-400 text-white hover:text-black w-[8vw] h-[4vh] text-center -mt-1'>Apply Now</button>
          
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
