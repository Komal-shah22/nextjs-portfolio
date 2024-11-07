'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image'
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
    <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto transition-all duration-200'>
        <Image src={require("../../../../public/nav-logo.png")} 
        alt='logo'
        width={200}
        height={200}
        className='ml-[-1.5ram] sm:ml-0'/>
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
            {/* <button className='md:px-10 md:py-3 px-8 py-3 text-[#A6B37D] font-semibold sm:text-base text-sm bg-black hover:bg-[#3d3d3d] hover:text-black transition-all duration-200 rounded-lg'>Hire Me</button> */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar





