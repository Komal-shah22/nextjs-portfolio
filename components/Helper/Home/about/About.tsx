
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-24 bg-black"
    >
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <Image
          src="/about-image.jpeg"
          alt="About me image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2
          className={`about-bg text-4xl md:text-6xl font-bold text-[rgb(64, 168, 194)] mb-4 transition-transform duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-white mb-6 transition-transform duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          I am a dedicated developer with a passion for creating innovative solutions. I specialize in web development and have experience in various technologies.
        </p>
        <a
          href="#hire"
          className={`inline-block bg-[#58b9e6] text-white px-6 py-3 rounded-md font-bold shadow-lg hover:bg-white hover:text-[#58b9e6] transition duration-300 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default About;

