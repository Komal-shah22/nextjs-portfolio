import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaEye } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
    {
      title: "Portfolio Html & Css",
      description: "A personal portfolio website built with HTML & CSS.",
      image: "/portfolio-logo.jpeg",
      link: "https://beamish-twilight-4d4b62.netlify.app/",
      github: "https://github.com/Komal-shah22/portfolio-with-html-css.git",
    },
    {
      title: "CountDown Timer",
      description: "A simple countdown timer built using next.js.",
      image: "/countdown-timer.png",
      link: "https://serene-starlight-574e0b.netlify.app/",
      github: "https://github.com/Komal-shah22/count-down-timer",
    },
    {
      title: "Weather App",
      description: "A sleek and animated weather app built with Next.js, using API to display real-time temperature for any city.",
      image: "/weather-app.png",
      link: "https://project-2-weather-app.netlify.app/",
      github: "https://github.com/Komal-shah22/Weather-app.git",
    },
    {
      title: "E-commerce Website",
      description: "An interactive e-commerce website UI clone.",
      image: "/E-commerce.png",
      link: "https://figma-hackathon-design.netlify.app/",
      github: "https://github.com/Komal-shah22/ui-ux-hackathon",
    },
    {
      title: "Streamlit Project",
      description: "Personal Library Manager app built using Streamlit.",
      image: "/streamlit.png",
      link: "https://komal-shah22-personal-library-manager-app-emmkgy.streamlit.app/",
      github: "https://github.com/Komal-shah22/Personal-Library-Manager",
    },
    {
      title: "Agentia-world Clone UI",
      description: "A clone of the Agentia-world website UI.",
      image: "/Agentia-world.png",
      link: "https://agentia-world-ui.netlify.app/",
      github: "https://github.com/Komal-shah22/Agentia-world-ui",
    },
    {
      title: "Netflix Clone",
      description: "A responsive clone of Netflix's homepage.",
      image: "/Netflix.jpeg",
      link: "https://dynamic-hamster-44c832.netlify.app/",
      github: "https://github.com/Komal-shah22/Netflix-Website.git",
    },
      {
      title: 'Figma template clone ',
      description: 'Cloning a Figma template for practice.',
      image: '/figma assigment-3.png',
      link: 'https://figma-assigment-3.netlify.app/',
      github: 'https://github.com/Komal-shah22/figma-assigment-3',
    },
  
    {
      title: "Figma Template Clone",
      description: "Cloning a Figma template for practice.",
      image: "/figma assigment-2.png",
      link: "https://figma-assigment-2.netlify.app/",
      github: "https://github.com/Komal-shah22/2nd-Assigment",
    },
    {
      title: "Resume Generator",
      description: "A tool to generate resumes dynamically.",
      image: "/resume.png",
      link: "https://sunny-sopapillas-5b74fc.netlify.app/",
      github: "https://github.com/Komal-shah22/hackathon-milestone-3",
    },
    {
      title: "Governour Website Clone",
      description: "A fully responsive clone of the Governour website.",
      image: "/governour-website-clone.png",
      link: "http://gov-web-clone.netlify.app/results",
      github: "https://github.com/Komal-shah22/Governour-website-clone",
    },
    {
      title: "Hackathon Project",
      description: "Participated in a hackathon with this project.",
      image: "/hackathon.png",
      link: "https://hackathon-mileston-5.netlify.app/",
      github: "https://github.com/Komal-shah22/hackathon-mileston-5",
    },
    {
      title: "Password Strength Meter",
      description: "A tool to check the strength of passwords.",
      image: "/password strength meter.png",
      link: "https://komal-shah22-password-strength-meter-password-oruxwp.streamlit.app/",
      github: "https://github.com/Komal-shah22/Password-strength-meter",
    },
  ];
  
const ProjectCard = ({
  project,
  isActive,
  position,
}: {
  project: Project;
  isActive: boolean;
  position: number;
}) => {
  return (
    <motion.div
      className={`absolute w-[90%] sm:w-[320px] h-[400px] p-4 rounded-lg shadow-lg border-[2px] transition-transform duration-500 bg-black ${
        isActive ? "z-20" : "z-10"
      }`}
      style={{ transform: `translateX(${position * 100}%)` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.8 }}
    >
      <div className="w-full h-48 relative">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority={isActive}
        />
      </div>

      <div className="bg-transparent p-4 rounded-b-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-white text-sm sm:text-base">{project.description}</p>

        <div className="flex space-x-4 mt-3">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaEye size={24} />
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-black relative w-full flex items-center justify-center py-12">
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 md:left-16 bg-[#45d4e7] text-white p-3 sm:p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30"
      >
        &#8592;
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 md:right-16 bg-[#34d2e7] text-white p-3 sm:p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30"
      >
        &#8594;
      </button>

      <div className="relative w-[90%] sm:w-[320px] h-[450px] flex justify-center">
        {projects.map((project, index) => {
          const position = index - activeIndex;
          return (
            <ProjectCard
              key={index}
              project={project}
              isActive={index === activeIndex}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSlider;

