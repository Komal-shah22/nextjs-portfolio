import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = aboutRef.current;

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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-white mb-6 transition-transform duration-1000 ease-out delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          I am a passionate AI and Full-Stack Developer with a strong foundation
          in modern web technologies and artificial intelligence. Currently, I
          am pursuing Artificial Intelligence (AI) at GIAIC and PIAIC, where I
          am actively enhancing my skills in TypeScript, JavaScript, Python,
          Next.js, React, HTML, and CSS. With a keen interest in AI-driven
          solutions and full-stack development, I have worked on multiple
          projects, including Shop.co, a clothing marketplace, and the Personal
          Library Manager integrated with the Gemini API. These experiences have
          strengthened my problem-solving abilities and technical expertise,
          allowing me to build scalable and efficient solutions. My goal is to
          master full-stack development and contribute to cutting-edge projects
          that leverage AI and web technologies to create meaningful impact. I
          am always eager to explore new tools, optimize workflows, and
          collaborate on innovative solutions that push the boundaries of
          technology.
        </p>
        <a
          href="https://glittery-palmier-92b342.netlify.app/"
          className={`inline-flex items-center gap-2 bg-[#58b9e6] text-white px-6 py-3 rounded-md font-bold shadow-lg hover:bg-white hover:text-[#58b9e6] transition duration-300 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          My Resume <FiDownload className="text-xl font extrabold" />
        </a>
      </div>
    </section>
  );
};

export default About;
