import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/HomePage"
import ContactUsPage from '../pages/ContactUsPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
