import { BaseInfo } from '@/Data/data';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      id="hero"
      className="z-10 mt-[75px] w-full pt-[6vh] md:pt-[12vh] h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-black/60 backdrop-blur-md border-2 border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="text-center lg:text-left">
          <motion.h1
            className="text-2xl md:text-4xl font-semibold text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            I am {BaseInfo.name}
          </motion.h1>
          <motion.h1
            className="gradient-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {BaseInfo.position}
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 text-sm md:text-lg font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {BaseInfo.description}
          </motion.p>

          <Link
            href="https://drive.google.com/file/d/14VIPUCOQ1z0uqouuSnvt4J1gmtmIwIBk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="flex items-center justify-center px-6 py-2 mt-6 text-white text-lg font-semibold rounded-lg bg-[#58b9e6] hover:bg-[#e2eef3] hover:text-[#58b9e6] transition-all duration-200 space-x-2 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download my CV"
            >
              <span>Download CV</span>
              <FaDownload />
            </motion.button>
          </Link>
        </div>

        <motion.div
          className="mx-auto lg:block hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            className="rounded-lg shadow-lg"
            src="/hero-image.jpeg"
            alt={`${BaseInfo.name} - Full Stack Developer`}
            width={450}
            height={450}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

