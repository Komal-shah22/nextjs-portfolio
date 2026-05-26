'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { motion } from 'framer-motion'

type Props ={
 openNav:()=>void
};

const Navbar = ({ openNav }:Props) => {
  const [navBg, setnavBg] = useState(false)
  useEffect(()=>{
    const handler=()=>{
      if(window.scrollY >= 90){
        setnavBg(true)
      } else {
        setnavBg(false)
      }
    }
    window.addEventListener("scroll",handler)

    return()=>{
      window.removeEventListener("scroll",handler)
    }
  }, [])
   return (
    <motion.div
      className={`fixed z-[1000] ${navBg?'bg-[hsl(0,1%,15%)] shadow-lg':'bg-[#080808]'} h-[12vh] w-full transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className='gradient-text flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto  font-extrabold  text-4xl'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Portfolio..
      </motion.div>
        <div className='flex items-center space-x-10'>
            <nav className='hidden lg:flex items-center space-x-8' aria-label="Main navigation">
            {navLinks.map((navLink, index)=>{
            return <motion.div
              key={navLink.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={navLink.url}>
                <p className='nav_link bg-gradient-to-r from-[#46bcd1] via-[#9ecaca] to-[#46bcd1] text-transparent bg-clip-text font-semibold hover:scale-110 transition-transform duration-200'>
                  {navLink.label}
                </p>
              </Link>
            </motion.div>
        })}
        </nav>
        <div className='flex items-center space-x-4'>
            <motion.button
              onClick={openNav}
              className='w-8 h-8 cursor-pointer text-white lg:hidden'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <HiBars3BottomRight className='w-full h-full'/>
            </motion.button>
        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Navbar





