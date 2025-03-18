'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
type Props ={
 openNav:()=>void 
};

const Navbar = ({ openNav }:Props) => {
  const [navBg, setnavBg] = useState(false)
  useEffect(()=>{
    const handler=()=>{
      if(window.scrollY >= 90){
        setnavBg(true)
      }if(window.scrollY < 90){
        setnavBg(false)
      }
    }
    window.addEventListener("scroll",handler)

    return()=>{
      window.removeEventListener("scroll",handler)
    }
  }) 
   return (
    <div className={`fixed Z-[1000] ${navBg?'bg-[hsl(0,1%,15%)]':'fixed'} h-[12vh] bg-[#080808] w-full `}>
    <div className='navbar-bg flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto  font-extrabold  text-4xl'>Portfolio..
        <div className="text uppercase text-4xl font-bold"></div>
        <div className='flex items-center space-x-10'>
            <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((navLinks)=>{
            return <Link key={navLinks.id} href={navLinks.url}>
            <p className='nav_link  bg-gradient-to-r from-[#46bcd1] via-[#9ecaca] to-[#46bcd1] text-transparent bg-clip-text font-semibold'>{navLinks.label}</p>
            </Link>
        })}
        </div>
        <div className='flex items-center space-x-4'>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar





