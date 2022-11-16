import React from 'react'
import { useState } from "react"
import {Outlet} from 'react-router-dom'

//COMPONENT
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Layout = () => {
 

  return (

 <>
 
<Nav/>
 

    <div className='main'>
        <Outlet/>
    </div>


<Footer/>

 </>
  )
}

export default Layout