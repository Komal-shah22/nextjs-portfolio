import { navLinks } from '@/constant/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { motion, AnimatePresence } from 'framer-motion'

type Navprops ={
    showNav:boolean
    closeNav:()=>void
}

const Mobile = ({closeNav,showNav}:Navprops) => {
  return (
    <AnimatePresence>
      {showNav && (
        <div>
          <motion.div
            className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeNav}
          />
          <motion.nav
            className="text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0d0d0e] space-y-6 z-[10000]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((navLink, index)=>{
            return <motion.div
              key={navLink.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link href={navLink.url} onClick={closeNav}>
                <p className='nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] hover:text-[#58b9e6] transition-colors duration-200'>
                  {navLink.label}
                </p>
              </Link>
            </motion.div>
        })}
        <motion.button
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white hover:text-[#58b9e6] transition-colors duration-200'
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close mobile menu"
        >
          <CgClose className='w-full h-full'/>
        </motion.button>
        </motion.nav>
        </div>
      )}
    </AnimatePresence>
  )
}
export default Mobile