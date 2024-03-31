import React from 'react'
import Header from '../../Components/Website/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Website/footer/Footer'

const Website = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Website
