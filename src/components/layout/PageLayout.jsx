// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../footer/footer'


export default function PageLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
