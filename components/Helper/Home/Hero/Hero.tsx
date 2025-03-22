import { BaseInfo } from '@/Data/data';
import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="z-10 mt-[75px] w-full pt-[6vh] md:pt-[12vh] h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1
            className={`text-2xl md:text-4xl font-semibold text-gray-300 transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            I am {BaseInfo.name}
          </h1>
          <h1
            className={`text-bg text-4xl sm:text-5xl md:text-6xl font-extrabold text-white transition-transform duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {BaseInfo.position}
          </h1>
          <p
            className={`text-gray-300 mt-4 text-sm md:text-lg font-medium transition-transform duration-1000 ease-out delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {BaseInfo.description}
          </p>
          
          <Link
            href="https://drive.google.com/file/d/1um4gfmbLsQIi_AuUShtPBOTMvacrycBX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`flex items-center justify-center px-6 py-2 mt-6 text-white text-lg font-semibold rounded-lg bg-[#58b9e6] hover:bg-[#e2eef3] hover:text-[#58b9e6] transition-all duration-200 space-x-2 mx-auto lg:mx-0 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </Link>
        </div>

        <div className="mx-auto lg:block hidden">
          <Image
            className="rounded-lg shadow-lg"
            src="/hero-image.jpeg"
            alt={BaseInfo.name}
            width={450}
            height={450}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

