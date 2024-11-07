'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Mobile from './Mobile'

const Responsivenav = () => {
    const [showNav, setshowNav] = useState(false)
    const showNavHandler = ()=>setshowNav(true)
    const closeNavHandler = ()=>setshowNav(false)
  return (
    <div className='relative z-[1000]'>
        <Navbar  openNav={showNavHandler}/>
        <Mobile showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default Responsivenav