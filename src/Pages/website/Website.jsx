import React from 'react'
import Header from '../../Components/Website/Header/Header'
import { Outlet } from 'react-router-dom'

const Website = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default Website
