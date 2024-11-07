
import { BaseInfo } from '@/Data/data';
import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, 
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="z-10 mt-[75px] w-full pt-[4vh] md:pt-[12vh] h-screen bg-[black] overflow-hidden relative"
    >
      <div className="id-1 flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1
              className={`text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold transition-transform duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              I am {BaseInfo.name}
            </h1>
            <h1
              className={`text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white transition-transform duration-1000 ease-out delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              {BaseInfo.position}
            </h1>
            <p
              className={`text-gray-300 mt-6 text-sm md:text-base font-semibold transition-transform duration-1000 ease-out delay-400 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              {BaseInfo.description}
            </p>

            <a
              href="https://hackathon-mileston-5.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#58b9e6] hover:bg-[#e2eef3] hover:text-[#58b9e6] flex items-center space-x-2 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>
          <div className="mx-auto hidden lg:block rounded-lg overflow-hidden">
            <Image
              className="text-white"
              src={require('../../../../public/hero-image.jpeg')}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


