import React from 'react'
import Navbar from '../Components/Navbar'
import Assistant from '../Components/Assistant'
import FloatingSidebar from '../Components/FloatingSidebar'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Assistant />
      <FloatingSidebar />
      <div className='w-full h-screen'>
       <div className='h-[100vh] w-full bg-black/35'>
         <video className='w-full h-full object-cover absolute z-[-10]' autoPlay loop  muted src="https://mitwpu.edu.in/uploads/banner/banner_video_desktop.mp4"></video>
       </div>
      </div>
    </div>
  )
}

export default HomePage
